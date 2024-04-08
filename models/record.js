import mongoose from 'mongoose';

const { Schema } = mongoose;

const RecordSchema = new Schema({
  username: {
    type: String,
    maxLength: 3,
    minLength: 3,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },

});

const recordModel = mongoose.model('Record', RecordSchema);

export default recordModel;
