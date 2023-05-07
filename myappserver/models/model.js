const mongoose =  require('mongoose')
const Schema = mongoose.Schema;



// transactions  => field => ['name', 'type', 'amount', 'date']
const user_model = new Schema({
    name: { type : String, default:"Anonymous"},
    date: { type : Date, default : Date.now}
})

const User = mongoose.model('user', user_model);

exports.default = User;
module.exports = {
    User
}
