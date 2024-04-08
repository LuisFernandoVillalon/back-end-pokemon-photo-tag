import { body } from 'express-validator';
import recordModel from '../models/record.js';

export async function getRecords(req, res) {
  try {
    const record = await recordModel.find();

    res.status(200).json(record);
  } catch (err) {
    console.log('GET RECORDS: Error while trying to retrieve all records');
    console.log(err);
    res.status(500).json({
      message: 'GET RECORDS: Error while trying to retrieve all records',
      errors: err.errors,
    });
  }
}

export const createRecord = [
  body('username')
    .isLength({ min: 3, max: 3 })
    .trim()
    .escape()
    .withMessage('Username cannot be empty'),
  body('time')
    .trim()
    .escape(),
  body('level')
    .trim()
    .escape(),
  async function (req, res, next) {
    try {
      const { username, time, level } = req.body;
      const newRecord = new recordModel({
        username,
        time,
        level,
      });
      const result = await newRecord.save();
      res.status(200).json({
        message: 'CREATE RECORD: Record created successfully',
        comment: result,
      });
    } catch (err) {
      console.log('CREATE RECORD: Error while trying to create a record');
      console.log(err);
      res.status(500).json({
        message: 'CREATE RECORD: Error while trying to create a record',
        errors: err.errors,
      });
    }
  },
];

export async function deleteRecord(req, res, next) {
  try {
    const { recordid } = req.params;
    const deletedRecord = await recordModel.findByIdAndDelete(recordid);

    res.status(200).json(deletedRecord);
  } catch (err) {
    console.log('DELETE POST: Error while trying to delete record');
    console.log(err);
    res.status(500).json({
      message: 'DELETE POST: Error while trying to delete record',
      errors: err.errors,
    });
  }
}
