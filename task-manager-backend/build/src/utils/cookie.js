const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
};
export const setAuthCookie = (res, token) => {
    res.cookie("token", token, cookieOptions);
};
export const clearAuthCookie = (res) => {
    res.clearCookie("token", cookieOptions);
};
//# sourceMappingURL=cookie.js.map