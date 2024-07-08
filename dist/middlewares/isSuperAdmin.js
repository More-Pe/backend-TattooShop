"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuperAdmin = void 0;
const isSuperAdmin = (req, res, next) => {
    try {
        if (req.tokenData.role !== "super_admin") {
            return res.status(403).json({
                success: false,
                message: "Unauthorized access",
            });
        }
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "You don't have permissions",
        });
    }
};
exports.isSuperAdmin = isSuperAdmin;
