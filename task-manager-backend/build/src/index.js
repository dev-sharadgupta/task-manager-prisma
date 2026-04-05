import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./modules/auth/routes/auth.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());
// Root Route
app.get("/api", (_req, res) => {
    res.send("Server running ");
});
// Auth Route
app.use("/api/auth", authRoutes);
// Global error handler — must be last middleware
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map