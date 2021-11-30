const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { ROLE_ADMIN, ROLE_GUEST, ROLE_USER } = require('../../config')
const CompanySchema = new Schema({
  name: String,
  catchPhrase: String,
  bs: String,

});

const GeoSchema = new Schema({
  lat: Number,
  lng: Number,

});

const AddressSchema = new Schema({
  street: String,
  suite: String,
  city: String,
  zipcode: String,
  geo: GeoSchema
});



const UserSchema = new Schema({

  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: String,
  email: {
    type: String, required: true, unique: true
  },
  address: AddressSchema,
  phone: String,
  website: String,
  company: CompanySchema,
  role: {
    type: Number,
    default: ROLE_USER,
  },
  password: {
    type: String,
  },
});
UserSchema.statics = {
  ROLE_ADMIN,
  ROLE_GUEST,
  ROLE_USER,
  hash: function (password) {
    return bcrypt.hashSync(password, saltRounds);
  },
};






const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;