import { Request, Response } from 'express';
import path from 'path';

export const getValue = (req: Request, res: Response) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.json({ value: randomNumber });
};

export const uploadFile = (req: Request, res: Response): any => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  
  const fileUrl = `/public/uploads/${req.file.filename}`;
  res.json({ 
    message: 'File uploaded successfully',
    url: fileUrl
  });
};