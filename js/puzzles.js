let score = 0
let answer = ''

let puzzles = [
    {text: 'Какое слово начинается с трех букв «Г» и заканчивается тремя буквами «Я»?', rightAnswer: ['тригонометрия']},
    {text: 'Что может в одно и то же время: стоять и ходить, висеть и стоять, ходить и лежать?', rightAnswer: ['часы']},
    {text: 'Без рук, без топоренка, построена избенка.', rightAnswer: ['гнездо']},
    {text: 'Раскаленная стрела дуб свалила у села.', rightAnswer: ['молния']},
    {text: 'Зимой и летом одним цветом.', rightAnswer: ['ёлка', 'елка', 'ель']},
    {text: 'Огненные гномики живут в картонном домике', rightAnswer: ['спички']},

]

function showPuzzle() {
    if (puzzles.length !== 0) {
        let randomPuzzle = Math.floor(Math.random() * puzzles.length)
        document.getElementById('puzzleText').innerHTML = puzzles[randomPuzzle].text
        answer = puzzles[randomPuzzle].rightAnswer
        puzzles.splice(randomPuzzle, 1)
    } else {
        finishGame()
    }
}

showPuzzle()


function getAnswer(puzzleAnswer) {
    let userAnswerFromUser = document.getElementById('answer').value
    console.log(userAnswerFromUser)
    userAnswerFromUser = userAnswerFromUser.toLowerCase()
    document.getElementById('answer').innerHTML = 'Попробуй угадать!'

    for (let i = 0; i < answer.length; i++) {
        if (puzzleAnswer[i] === userAnswerFromUser) {
            score++
            showPuzzle()
            document.getElementById('textArea').innerHTML = 'Верно! Попробуй угадать следующую загадку!'

        } else {
            document.getElementById('textArea').innerHTML = 'Неверно, попробуйте еще раз'

        }
    }
    clear('answer')
}


function clear(id) {
    document.getElementById(id).value = ''
}

function finishGame() {
    console.log('Угадано загадок: ' + score)
    document.getElementById('box').innerHTML = `Благодарим за игру! <br/> Ответ на последнюю загадку: ${answer[0]} <br/> Угадано загадок: ${score} <br/> 
<img class="gif" src="https://i.pinimg.com/originals/8e/31/25/8e3125d9854de3850f9da66282705dce.gif">
         `
}


