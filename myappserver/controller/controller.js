const model = require('../models/model');


//  post: http://localhost:8080/api/transaction
async function create_user(req, res){
    if(!req.body) return res.status(400).json("Post HTTP Data not Provided");
    let { name } = req.body;

    const create = await new model.User(
        {
            name,
            date: new Date()
        }
    );

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({ message : `Erro while creating user ${err}`});
    });

}

//  get: http://localhost:8080/api/transaction
async function get_user(req, res){
    let data = await model.User.find({});
    return res.json(data);
}




module.exports = {
    create_user,
    get_user,
}