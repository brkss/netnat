"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const response_1 = require("../utils/response");
const inputs_1 = require("../utils/inputs");
const axios_1 = __importDefault(require("axios"));
let UserResolver = class UserResolver {
    ping() {
        return "pong !";
    }
    async auth(data) {
        if (!data.id || !data.name || !data.email || !data.token)
            return {
                status: false,
                message: "Invalid Data !",
            };
        try {
            const verf = await axios_1.default.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data.token}`);
            if (verf.data.exp < Math.floor(new Date().getTime() / 1000))
                return {
                    status: false,
                    message: "Bad Token ! ",
                };
            if (verf.data.email != data.email || verf.data.sub != data.id)
                return {
                    status: false,
                    message: "Invalid Data !",
                };
            console.log("verfication -> ", verf);
            return {
                status: true,
                message: "Very good",
            };
        }
        catch (e) {
            console.log("Something went wrong [AUTH] : ", e);
            return {
                status: false,
                message: "Something went wrong ! ",
            };
        }
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "ping", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => response_1.AuthResponse),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AuthInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "auth", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map