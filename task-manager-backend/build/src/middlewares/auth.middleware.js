import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
export const authenticateJWT = (req, res, next) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Authorization token missing",
        });
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.userId;
        next();
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Token expired",
            });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: "Invalid token"
            });
        }
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: "Authentication failed",
        });
    }
};
//# sourceMappingURL=auth.middleware.js.map