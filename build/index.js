"use strict";
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
const express_1 = __importDefault(require("express"));
const fetchSlack_1 = require("./fetchSlack");
let app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json({
    type: ["application/json", "text/plain"],
}));
app.post("/form", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let msg = `Name: ${req.body.name} \nEmail: ${req.body.email} \nMessage: ${req.body.message}`;
        try {
            yield fetchSlack_1.fetchSlack(msg);
        }
        catch (e) {
            return res.status(500).send("An error occured");
        }
        console.log(req.body);
    });
});
app.listen(Number(process.env.PORT) || 3000, "0.0.0.0", () => console.log("Server running"));
