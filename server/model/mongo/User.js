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
   
    name: {
         type: String, required: true
    },
    username: String,
    email:{
        type: String, required:true, unique:true
    } ,
    address:AddressSchema,
    phone: String,
    website:String,
    company:CompanySchema
});






const model = mongoose.model('User', UserSchema, 'users');

module.exports = model;