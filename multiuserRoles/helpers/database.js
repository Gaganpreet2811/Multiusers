var mongoose = require('mongoose')

exports.connection = function() {
  mongoose.connect(
    'mongodb://localhost:27017/MultiUsers',
    { useNewUrlParser: true,useCreateIndex: true },
    function(err) {
      if(!err) {
        console.log('DB Connected!')
      } else {
        console.log(err)
      }
    }
  )
}
