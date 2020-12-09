const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  img: {type: String},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  hostedWorkshops: [{type: Schema.Types.ObjectId, ref: "Workshop"}],
  attendedWorkshops: [{type: Schema.Types.ObjectId, ref: "Workshop"}],
  wallet: {type: Number, default: 30}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;