"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
const bcrypt = __importStar(require("bcrypt"));
const User_1 = require("../entity/User");
const token_1 = require("../utils/token");
let UserResolver = class UserResolver {
    ping() {
        return "pong !";
    }
    async auth(data, ctx) {
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
            if ((await User_1.User.find({ where: { email: data.email } })).length > 0) {
                return await this.login(data.email, data.id, ctx.res);
            }
            else {
                return await this.createAccount(data, ctx.res);
            }
        }
        catch (e) {
            console.log("Something went wrong [AUTH] : ", e);
            return {
                status: false,
                message: "Something went wrong ! ",
            };
        }
    }
    async createAccount(data, res) {
        try {
            const user = new User_1.User();
            user.email = data.email;
            user.name = data.name;
            user.auid = await bcrypt.hash(data.id, 5);
            await user.save();
            (0, token_1.sendRefreshToken)(res, (0, token_1.generateRefreshToken)(user.id));
            return {
                status: true,
                message: "Account created successfuly",
                token: (0, token_1.generateAccessToken)(user.id),
            };
        }
        catch (e) {
            console.log("something went wrong creating user account ! e : ", e);
            return {
                status: false,
                message: "Something went wrong !",
            };
        }
    }
    async login(email, aid, res) {
        const user = await User_1.User.findOne({ where: { email: email } });
        if (!user) {
            return {
                status: false,
                message: "User not found !",
            };
        }
        const v = await bcrypt.compare(aid, user.auid);
        if (!v)
            return {
                status: false,
                message: "Invalid Credentials",
            };
        (0, token_1.sendRefreshToken)(res, (0, token_1.generateRefreshToken)(user.id));
        return {
            status: true,
            message: "Logged successfuly",
            token: (0, token_1.generateAccessToken)(user.id),
        };
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
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputs_1.AuthInput, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "auth", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map