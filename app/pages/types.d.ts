import { IncomingForm } from 'formidable';
import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    file?: Express.Multer.File;
  }
}
