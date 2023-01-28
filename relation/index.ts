export const relationVoiture = {
    $lookup: {
        from: "voiture",
        localField: `_id`,
        foreignField: `clientId`,
        as: "voiture",
        pipeline: [
            {
                $lookup: {
                    from: "reparation",
                    localField: `_id`,
                    foreignField: `voitureId`,
                    as: "reparation",
                }
            }
        ],
    },
}; 

export const reparationRelation=[
    {
        // relation voiture.clientId =client.id
        $lookup:{
            from: "reparation",
            let: { r: `$_reparationId` },
            as: "reparation",
            pipeline:[
                {
                    $match:{
                        $expr:{
                            $eq:[`$id`,"$$r"]
                        }
                    }
                }
            ],
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields:{
            reparation:{
                $arrayElemAt:["$reparation",0]
            }
        }
    }
];

export const modelVoitureMarquePieceRelation=[
    {
        $lookup:{
            from: "marquePieceModelVoiture",
            as: "modelVoiture",
            localField:"_id",
            foreignField:"marquePieceId",
            pipeline:[
                {
                    $lookup:{
                        from:"modelVoiture",
                        as:"modelVoiture",
                        localField:"modelVoitureId",
                        foreignField:"_id",
                        pipeline:[
                            {
                                $lookup:{
                                    from:"marqueVoiture",
                                    as:"marqueVoiture",
                                    localField:"marqueVoitureId",
                                    foreignField:"_id",
                                }
                            },
                            {
                                $addFields:{
                                    marqueVoiture:{
                                        $arrayElemAt:["$marqueVoiture",0]
                                    }
                                }
                            }                                   
                        ]
                    }
                },
                {
                    $addFields:{
                        modelVoiture:{
                            $arrayElemAt:["$modelVoiture",0]
                        }
                    }
                }
            ]
        
        }
        
    },
    {
        $addFields:{
            modelVoiture:"$modelVoiture.modelVoiture"
        }
    }
];

export const relationPiece=[
    {
        $lookup:{
            from:"marquePiece",
            as:"marquePiece",
            localField:"marquePieceId",
            foreignField:"_id"
        }
    },
    {
        $addFields:{
            marquePiece:{
                $arrayElemAt:["$marquePiece",0]
            }
        }
    }
];

export const modelVoiture=[
    {
        $lookup:{
            from:"modelVoiture",
            as:"modelVoiture",
            localField:"modelVoitureId",
            foreignField:"_id"
        }
    },
    {
        $addFields:{
            modelVoiture:{
                $arrayElemAt:["$modelVoiture",0]
            }
        }
    }
]

export const marqueRelation=[
    {
        // relation voiture.clientId =client.id
        $lookup:{
            from: "marqueVoiture",
            localField:"marqueVoitureId",
            foreignField:"_id",
            as: "marqueVoiture"
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields:{
            marqueVoiture:{
                $arrayElemAt:["$marqueVoiture",0]
            }
        }
    }
];

export const reparationRelation1=[
    {
        $lookup:{
            from:"reparation",
            as:"reparation",
            localField:"reparationId",
            foreignField:"_id",
            pipeline:[
                {
                    $lookup:{
                        from:"reparationDetail",
                        as:"reparationDetail",
                        localField:"_id",
                        foreignField:"reparationId",
                        pipeline:[
                            {
                                $lookup:{
                                    from:"marquePiece",
                                    as:"marquePiece",
                                    localField:"marquePieceId",
                                    foreignField:"_id"
                                }
                            },
                            {
                                $addFields:{
                                    marquePiece:{
                                        $arrayElemAt:["$marquePiece",0]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup:{
                        from:"voiture",
                        as:"voiture",
                        localField:"voitureId",
                        foreignField:"_id"
                    }
                }
            ]
        }
    }
];

export const detailReparationRelation=[
    {
        $lookup:{
            from:"reparationDetail",
            as:"reparationDetail",
            localField:"_id",
            foreignField:"reparationId",
            pipeline:[
                {
                    $lookup:{
                        from:"marquePiece",
                        as:"marquePiece",
                        localField:"marquePieceId",
                        foreignField:"_id"
                    }
                },
                {
                    $addFields:{
                        marquePiece:{
                            $arrayElemAt:["$marquePiece",0]
                        }
                    }
                }
            ]
        }
    },
    {
        $lookup:{
            from:"voiture",
            as:"voiture",
            localField:"voitureId",
            foreignField:"_id"
        }
    }
];

export const relation={
    $lookup:{
        from: "activity",
        let: { r: `$_id` },
        as: "activity",
        pipeline:[
            {
                $match:{
                    $expr:{
                        $eq:[`$resourceId`,"$$r"]
                    }
                }
            }
        ],
    },

}; 

export const clientRelation=[
    {
        // relation voiture.clientId =client.id
        $lookup:{
            from: "client",
            localField:"clientId",
            foreignField:"_id",
            as: "client",
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields:{
            client:{
                $arrayElemAt:["$client",0]
            }
        }
    }
];

export const reparationRelation2=[
    {
        // relation voiture.id =Reparation.voitureId
        $lookup:{
            from: "reparation",
            localField:"_id",
            as: "reparation",
            foreignField:"voitureId",
            pipeline:[
                {
                    $lookup:{
                        from:"reparationDetail",
                        as:"reparationDetail",
                        localField:"_id",
                        foreignField:"reparationId",
                        pipeline:[
                            {
                                $lookup:{
                                    from:"marquePiece",
                                    as:"marquePiece",
                                    localField:"marquePieceId",
                                    foreignField:"_id"
                                }
                            },
                            {
                                $addFields:{
                                    marquePiece:{
                                        $arrayElemAt:["$marquePiece",0]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup:{
                        from:"voiture",
                        as:"voiture",
                        localField:"voitureId",
                        foreignField:"_id"
                    }
                }
            ]
        },
    },
];

export const modelVoitureRelation=[
    {
        $lookup:{
            from: "modelVoiture",
            localField:"modelVoitureId",
            as: "modelVoiture",
            foreignField:"_id",
            pipeline:[
                {
                    $lookup:{
                        from:"marqueVoiture",
                        as:"marqueVoiture",
                        localField:"marqueVoitureId",
                        foreignField:"_id",
                    }
                },
                {
                    $addFields:{
                        marqueVoiture:{
                            $arrayElemAt:["$marqueVoiture",0]
                        }
                    }
                }
                 
            ]
        },
        
    },
    {
        $addFields:{
            modelVoiture:{
                $arrayElemAt:["$modelVoiture",0]
            }
        }
    }
];