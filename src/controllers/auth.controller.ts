import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../database/models/User";
import jwt from 'jsonwebtoken';

//CREATE
export const register = async (req: Request, res: Response) => {
  try {
    // 1. Recuperar la info
    const email = req.body.email
    const password_hash = req.body.password_hash

    // 2. Validar la info
    if(!email || !password_hash) {
      return res.json(400).json(
        {
          success: false,
          message: "Email and password are required"
        }
      )
    }

    // TODO validar formato email

    if(password_hash.length < 8  || password_hash.length > 12) {
      return res.status(400).json(
        {
          success: false,
          message: "Password is not valid, 8 to 12 charachters must be needed"
        }
      )
    }

    // 3. Tratar la info si hace falta

    // TODO encriptar password
    const hashedPassword = bcrypt.hashSync(password_hash, 10);

    // 4. Guardar en DB
    const newUser = await User.create(
      {
        email: email,
        password_hash: hashedPassword
      }
    ).save()

    // 5. Responder
    res.status(201).json(
      {
        success: true,
        message: "User registered succesfully",
        data: newUser
      }
    )
  } catch (error) {
    res.status(500).json(
      {
        success: false,
        message: "User cannot be registered",
        error: error
      }
    )
  }
}

//LOG IN

export const login = async (req: Request, res: Response) => {
    try {
      //1. Obtener info
      const { email, password_hash } = req.body;
  
      //2. Validar info
      if (!email || !password_hash) {
        return res.status(400).json({
          succes: false,
          message: "Email and password are needed",
        });
      }
  
      //3. Comprobar si el usuario existe

      const user = await User.findOne({
        where: { email: email },
      });
  
      if (!user) {
        return res.status(400).json({
          succes: false,
          message: "Email or password not valid",
        });
      }
  
      //4. Comprobar la contraseña
      const isPasswordValid = bcrypt.compareSync(password_hash, user.password_hash);
  
      if (isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: "Email or password not valid",
        });
      }

      //5. Creación del token
      const token = jwt.sign(
      {
        id: user.id,
        role: user.role_id,
        email: user.email,
      },
      'secreto',
      {
        expiresIn: "2h",
      })
  
      res.status(200).json({
        success: true,
        message: "User logged",
        token: token,
      });
  
      console.log(user);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "User cannot be logged in",
        error: error,
      });
    }
  };
  