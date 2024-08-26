// pages/api/readGuidelines.ts
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const guidelinesPath = path.resolve(process.cwd(), 'gpt-guidelines.md');
  const guidelinesContent = fs.readFileSync(guidelinesPath, 'utf-8');
  res.status(200).json({ content: guidelinesContent });
}