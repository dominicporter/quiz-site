const quiz = require('./quiz.json');
module.exports = (req,res)=>{
    res.json(quiz.map(({question, options}) => ({question, options}) ))
}