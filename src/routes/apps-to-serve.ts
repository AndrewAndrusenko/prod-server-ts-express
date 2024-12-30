import express, { Request, Response } from 'express';
import { APPS_CONFIG } from '../env/apps-configs';
export const router = express.Router();

/* GET users listing. */
router.all('/ssngrx/*', function(req, res) { 
  res.sendFile(APPS_CONFIG.get('ssngrx')?.bootstrapPath+'index.html'); 
});
router.all('/rtq/*', function(req, res) { 
  res.sendFile(APPS_CONFIG.get('rtq')?.bootstrapPath+'index.html'); 
});