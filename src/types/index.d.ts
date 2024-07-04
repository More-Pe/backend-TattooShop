export interface TokenDecoded {
    id: number,
    role: string,
    email: string
  }
  declare global {
      namespace Express {
          export interface Request {
              // decoded token
              tokenData: TokenDecoded;
          }
      }
  }