"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = void 0;
const sendRefreshToken = (res, _token) => {
    res.cookie("ujid", _token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    });
};
exports.sendRefreshToken = sendRefreshToken;
//# sourceMappingURL=cookie.js.map