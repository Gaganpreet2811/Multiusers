require('./helpers/database').connection()
const User=require('./models/User')
User.findOne({username:'tester'})
.then(user=>{
  user.role='tester'
  user.save().then(()=>console.log('user saved'))
})
