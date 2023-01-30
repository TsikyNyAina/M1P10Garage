"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller = __importStar(require("./controller"));
const cast = __importStar(require("./strict/cast"));
const rest = __importStar(require("./strict/rest"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const swagger_json_1 = __importDefault(require("./strict/swagger.json"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const datasource_1 = __importDefault(require("./datasource"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
for (let v of Object.values(cast))
    v();
for (let v of Object.values(rest))
    v();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.raw());
app.use('/documentation', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, { explorer: true }));
app.use((0, cors_1.default)());
for (let c of Object.values(controller))
    new c().rest(app);
const port = process.env.port || 3000;
app.use(express_1.default.static(__dirname + '/public'));
app.get("", (req, res) => res.sendFile(path_1.default.join(__dirname, './public', 'index.html')));
app.listen(port, () => console.log(`http://localhost:${port}`));
(0, datasource_1.default)().then((client) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = client.currentDb.collection("payement");
    const rep = yield collection.aggregate([
        {
            $addFields: {
                datePayement: {
                    $toDate: "$datePayement"
                }
            }
        },
        {
            $addFields: {
                jour: {
                    $dateDiff: {
                        startDate: "$datePayement",
                        endDate: "$$NOW",
                        unit: "day"
                    }
                }
            }
        },
        {
            $addFields: {
                jour: {
                    $divide: ["$jour", 3]
                },
            }
        },
        {
            $addFields: {
                jour: {
                    $toInt: "$jour"
                },
            }
        },
        {
            $addFields: {
                jour: {
                    $multiply: ["$jour", 3]
                },
            }
        }
    ]).toArray();
    // console.log(rep);
    client.close();
})).catch(console.log);
