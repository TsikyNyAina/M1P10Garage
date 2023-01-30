"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.depense = exports.relationResponsable = exports.relationMarquePiece = exports.modelVoitureRelation = exports.reparationRelation2 = exports.clientRelation = exports.relation = exports.payementRelation = exports.detailReparationRelation = exports.reparationRelation1 = exports.marqueRelation = exports.modelVoiture = exports.relationPiece = exports.modelVoitureMarquePieceRelation = exports.reparationRelation = exports.relationVoiture = void 0;
exports.relationVoiture = {
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
exports.reparationRelation = [
    {
        // relation voiture.clientId =client.id
        $lookup: {
            from: "reparation",
            let: { r: `$_reparationId` },
            as: "reparation",
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq: [`$id`, "$$r"]
                        }
                    }
                }
            ],
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields: {
            reparation: {
                $arrayElemAt: ["$reparation", 0]
            }
        }
    }
];
exports.modelVoitureMarquePieceRelation = [
    {
        $lookup: {
            from: "marquePieceModelVoiture",
            as: "modelVoiture",
            localField: "_id",
            foreignField: "marquePieceId",
            pipeline: [
                {
                    $lookup: {
                        from: "modelVoiture",
                        as: "modelVoiture",
                        localField: "modelVoitureId",
                        foreignField: "_id",
                        pipeline: [
                            {
                                $lookup: {
                                    from: "marqueVoiture",
                                    as: "marqueVoiture",
                                    localField: "marqueVoitureId",
                                    foreignField: "_id",
                                }
                            },
                            {
                                $addFields: {
                                    marqueVoiture: {
                                        $arrayElemAt: ["$marqueVoiture", 0]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    $addFields: {
                        modelVoiture: {
                            $arrayElemAt: ["$modelVoiture", 0]
                        }
                    }
                }
            ]
        }
    },
    {
        $addFields: {
            modelVoiture: "$modelVoiture.modelVoiture"
        }
    }
];
exports.relationPiece = [
    {
        $lookup: {
            from: "marquePiece",
            as: "marquePiece",
            localField: "marquePieceId",
            foreignField: "_id"
        }
    },
    {
        $addFields: {
            marquePiece: {
                $arrayElemAt: ["$marquePiece", 0]
            }
        }
    }
];
exports.modelVoiture = [
    {
        $lookup: {
            from: "modelVoiture",
            as: "modelVoiture",
            localField: "modelVoitureId",
            foreignField: "_id"
        }
    },
    {
        $addFields: {
            modelVoiture: {
                $arrayElemAt: ["$modelVoiture", 0]
            }
        }
    }
];
exports.marqueRelation = [
    {
        // relation voiture.clientId =client.id
        $lookup: {
            from: "marqueVoiture",
            localField: "marqueVoitureId",
            foreignField: "_id",
            as: "marqueVoiture"
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields: {
            marqueVoiture: {
                $arrayElemAt: ["$marqueVoiture", 0]
            }
        }
    }
];
exports.reparationRelation1 = [
    {
        $lookup: {
            from: "reparation",
            as: "reparation",
            localField: "reparationId",
            foreignField: "_id",
            pipeline: [
                {
                    $lookup: {
                        from: "reparationDetail",
                        as: "reparationDetail",
                        localField: "_id",
                        foreignField: "reparationId",
                        pipeline: [
                            {
                                $lookup: {
                                    from: "marquePiece",
                                    as: "marquePiece",
                                    localField: "marquePieceId",
                                    foreignField: "_id"
                                }
                            },
                            {
                                $addFields: {
                                    marquePiece: {
                                        $arrayElemAt: ["$marquePiece", 0]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "voiture",
                        as: "voiture",
                        localField: "voitureId",
                        foreignField: "_id"
                    }
                }
            ]
        }
    }
];
exports.detailReparationRelation = [
    {
        $lookup: {
            from: "reparationDetail",
            as: "reparationDetail",
            localField: "_id",
            foreignField: "reparationId",
            pipeline: [
                {
                    $lookup: {
                        from: "marquePiece",
                        as: "marquePiece",
                        localField: "marquePieceId",
                        foreignField: "_id"
                    }
                },
                {
                    $addFields: {
                        marquePiece: {
                            $arrayElemAt: ["$marquePiece", 0]
                        }
                    }
                }
            ]
        }
    },
    {
        $lookup: {
            from: "voiture",
            as: "voiture",
            localField: "voitureId",
            foreignField: "_id"
        }
    },
    {
        $addFields: {
            voiture: {
                $arrayElemAt: ["$voiture", 0]
            }
        }
    }
];
exports.payementRelation = [
    {
        $lookup: {
            from: "payement",
            localField: "_id",
            foreignField: "reparationId",
            as: "payement"
        }
    },
    {
        $addFields: {
            payement: {
                $arrayElemAt: ["$payement", 0]
            }
        }
    }
];
exports.relation = {
    $lookup: {
        from: "activity",
        let: { r: `$_id` },
        as: "activity",
        pipeline: [
            {
                $match: {
                    $expr: {
                        $eq: [`$resourceId`, "$$r"]
                    }
                }
            }
        ],
    },
};
exports.clientRelation = [
    {
        // relation voiture.clientId =client.id
        $lookup: {
            from: "client",
            localField: "clientId",
            foreignField: "_id",
            as: "client",
        },
    },
    {
        // alaina ny indice 0 satria tableau no averiny vao tsy asina an'ito
        $addFields: {
            client: {
                $arrayElemAt: ["$client", 0]
            }
        }
    }
];
exports.reparationRelation2 = [
    {
        // relation voiture.id =Reparation.voitureId
        $lookup: {
            from: "reparation",
            localField: "_id",
            as: "reparation",
            foreignField: "voitureId",
            pipeline: [
                {
                    $lookup: {
                        from: "reparationDetail",
                        as: "reparationDetail",
                        localField: "_id",
                        foreignField: "reparationId",
                        pipeline: [
                            {
                                $lookup: {
                                    from: "marquePiece",
                                    as: "marquePiece",
                                    localField: "marquePieceId",
                                    foreignField: "_id"
                                }
                            },
                            {
                                $addFields: {
                                    marquePiece: {
                                        $arrayElemAt: ["$marquePiece", 0]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    $lookup: {
                        from: "voiture",
                        as: "voiture",
                        localField: "voitureId",
                        foreignField: "_id"
                    }
                }
            ]
        },
    },
];
exports.modelVoitureRelation = [
    {
        $lookup: {
            from: "modelVoiture",
            localField: "modelVoitureId",
            as: "modelVoiture",
            foreignField: "_id",
            pipeline: [
                {
                    $lookup: {
                        from: "marqueVoiture",
                        as: "marqueVoiture",
                        localField: "marqueVoitureId",
                        foreignField: "_id",
                    }
                },
                {
                    $addFields: {
                        marqueVoiture: {
                            $arrayElemAt: ["$marqueVoiture", 0]
                        }
                    }
                }
            ]
        },
    },
    {
        $addFields: {
            modelVoiture: {
                $arrayElemAt: ["$modelVoiture", 0]
            }
        }
    }
];
exports.relationMarquePiece = [
    {
        $lookup: {
            from: "marquePiece",
            as: "marquePiece",
            localField: "marquePieceId",
            foreignField: "_id"
        },
    },
    {
        $addFields: {
            marquePiece: {
                $arrayElemAt: ["$marquePiece", 0]
            }
        }
    }
];
exports.relationResponsable = [
    {
        $lookup: {
            from: "responsable",
            as: "responsable",
            localField: "responsableId",
            foreignField: "_id"
        }
    },
    {
        $addFields: {
            responsable: {
                $arrayElemAt: ["$responsable", 0]
            }
        }
    }
];
exports.depense = [
    {
        $addFields: {
            dateField: { $dateFromString: { dateString: "$datePayement", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
        }
    }, {
        $lookup: {
            from: "salaire",
            localField: "datePayement",
            foreignField: "datePayement",
            as: "salaire",
            pipeline: [
                {
                    $addFields: {
                        datePayement: { $dateFromString: { dateString: "$datePayement", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
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
            pipeline: [
                {
                    $addFields: {
                        dateAchat: { $dateFromString: { dateString: "$dateAchat", format: "%Y-%m-%dT%H:%M:%S.%LZ" } }
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
