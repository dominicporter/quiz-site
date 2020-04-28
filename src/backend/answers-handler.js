const quiz = require('./quiz.json');
module.exports = (req, res) => {
    const correctAnswers = {}
    quiz.forEach((q, i) => {
        correctAnswers[i] = q.answer
    })

    // console.log(correctAnswers);

    const response = {
        fullmarks: JSON.stringify(req.body) === JSON.stringify(correctAnswers),
    }
    res.send(response)
}