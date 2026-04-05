import { StatusCodes } from "http-status-codes";
export function validateData(schema, type = "body") {
    return (req, res, next) => {
        const result = schema.safeParse(req[type]);
        if (!result.success) {
            const errors = result.error.issues.map((issue) => {
                const path = issue.path.join(".");
                return path ? `${path}: ${issue.message}` : issue.message;
            });
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: StatusCodes.BAD_REQUEST,
                errors,
            });
        }
        // attach validated data (optional but recommended)
        req[type] = result.data;
        next();
    };
}
//# sourceMappingURL=validation.middleware.js.map