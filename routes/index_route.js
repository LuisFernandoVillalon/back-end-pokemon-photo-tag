import express from 'express';
import { getRecords, createRecord, deleteRecord } from '../controllers/recordController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('You reached the api');
});

// GET
router.get('/records', getRecords);

// POST
router.post('/records', createRecord);

// DELETE
router.delete('/records/:recordid', deleteRecord);

export default router;
