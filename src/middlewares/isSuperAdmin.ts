import { NextFunction, Request, Response } from "express";

export const isSuperAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.tokenData)
    if (req.tokenData.role_id !== 1) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "You don't have permissions",
    });
  }
};
