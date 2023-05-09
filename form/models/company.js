const mongoose =  require('mongoose');


const CompanySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    companyName:{type:String, required:true},
    socialMediaLink:String,
    companyPhone:String,
    companyWebsite:String,
    contactEmail:String,
    otherContact:String,
    status:{type:String, default: 'Not reached'},
    notes:{type:String, default:''},
    meetingDate:{type:String, default:''},
    meetingTime:{type:String, default:''}

});

module.exports = mongoose.model('Company', CompanySchema);