import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenDecoded } from "../types";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Middleware authentication");

    if (!req.headers.authorization) {
      return res.status(401).json({
        succes: false,
        message: "Unauthorized",
      });
    }

    const token = req.headers.authorization.split(' ')[1]; //Recupera el token y con split lo tranforma en array, utiliza el elemento en posición 1

    var decoded = jwt.verify(token, process.env.JWT_SECRET as string) as TokenDecoded; // El verify comprueba que el token se ha firmado con la palabra correcta y extrae los datos solicitados (id, email y error). El as TokenDecoded le dice que se comporte como la interface TokenDecoded (ver index.d.ts)

    req.tokenData = {
    id: decoded.id,
    role: decoded.role,
    email: decoded.email
   }

    next();

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unauthorized",
    });
  }
};
