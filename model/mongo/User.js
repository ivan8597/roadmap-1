const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    geo:GeoSchema
});


const UserSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    email: String,
    address:AddressSchema,
    phone: String,
    website:String,
    company:CompanySchema
});






const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;