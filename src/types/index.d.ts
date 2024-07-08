export interface TokenDecoded {
  id: number;
  role: string;
  email: string;
} //Esto es para añadir una nueva propiedad o tipo "tokenData"
declare global {
  namespace Express {
    export interface Request {
      // decoded token
      tokenData: TokenDecoded;
    }
  }
}
