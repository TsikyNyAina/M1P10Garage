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
    },
    {
        $addFields:{
            voiture:{
                $arrayElemAt:["$voiture",0]
            }
        }
    }
];
export const payementRelation=[
    {
        $lookup:{
            from:"payement",
            localField:"_id",
            foreignField:"reparationId",
            as:"payement"
        }
    },
    {
        $addFields:{
            payement:{
                $arrayElemAt:["$payement",0]
            }
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
export const relationMarquePiece=[
    {
        $lookup:{
            from:"marquePiece",
            as:"marquePiece",
            localField:"marquePieceId",
            foreignField:"_id"
        },
    },
    {
        $addFields:{
            marquePiece:{
                $arrayElemAt:["$marquePiece",0]
            }
        }
    }
]
export const  relationResponsable=[
    {
        $lookup:{
            from :"responsable",
            as :"responsable",
            localField:"responsableId",
            foreignField:"_id"
        }
    },
    {
        $addFields:{
            responsable:{
                $arrayElemAt:["$responsable",0]
            }
        }
    }
];

export const depense=[
    {
        $addFields: {
           dateField: { $dateFromString: { dateString: "$datePayement", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
        }
     },{
       $lookup: {
          from: "salaire",
          localField: "datePayement",
          foreignField: "datePayement",
          as: "salaire",
          pipeline:[
                
                {
                    $addFields:{
                        datePayement:{ $dateFromString: { dateString: "$datePayement", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
                    }
                }
                 
            ]
       }
    },
    {
       $lookup: {
          from: "achatPiece",
          localField: "datePayement",
          foreignField: "dateAchat",
          as: "achatPiece",
          pipeline:[
                
                {
                    $addFields:{
                        dateAchat:{ $dateFromString: { dateString: "$dateAchat", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
                    }
                }
                 
            ]
       }
    },
    {
       $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$dateField" } },
          salaire: { $sum: "$salaire.montant" },
          loyer: { $sum: "$montant" },
          achatPiece: { $sum: "$prixUnitaire" }
       }
    }
 ];