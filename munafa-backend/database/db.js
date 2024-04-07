
const mongoose = require('mongoose');


const mongoURI =  'mongodb+srv://ritwik:ritwik3856@cluster0.whsucgh.mongodb.net/munafa';


module.exports.con=mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true,
});










