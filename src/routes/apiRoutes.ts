import express from 'express';
import { getValue, uploadFile } from '../controllers/apiController';
import { upload } from '../middleware/upload';

const router = express.Router();

router.get('/get-value', getValue);
router.post('/upload', upload.single('file'), uploadFile);

export default router;