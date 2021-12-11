"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = require("../../entity/User");
const cookie_1 = require("./cookie");
const gen_1 = require("./gen");
const refreshToken = async (req, res) => {
    const _token = req.cookies.ujid;
    if (!_token)
        return res.send({
            status: false,
            message: "token not found",
        });
    let payload = null;
    try {
        payload = (0, jsonwebtoken_1.verify)(_token, process.env.REFRESH_SECRET);
    }
    catch (e) {
        console.log("something went wrong while parsing token => ", e);
        return res.send({
            status: false,
            message: "bad token !",
        });
    }
    const user = await User_1.User.findOne({ where: { id: payload.id } });
    if (!user) {
        return res.send({
            status: false,
            token: "",
            message: "User not found !",
        });
    }
    (0, cookie_1.sendRefreshToken)(res, (0, gen_1.generateRefreshToken)(user.id));
    return res.send({
        status: true,
        message: "si",
        token: (0, gen_1.generateAccessToken)(user.id),
    });
};
exports.refreshToken = refreshToken;
//# sourceMappingURL=refresh.js.map