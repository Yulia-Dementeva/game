let score = 0

let tasks = [
    'Каким было первое число?',
    'Каким было второе число?',
    'Каким было третье число?',
    'Каким было четвертое число?',
    'Каким было последнее число?'
]

let task

let numbers = []
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 100))

}
console.log(numbers)

document.getElementById('task').innerHTML = `Запомните числа и их порядок: ${numbers}`


function finishGame() {
    let result = ''
    if (score === 5){
        result = 'Вы набрали 5 очков из 5. Мы считаем, что Вы прирожденный гений! '
    }else if(score < 5 && score > 2){
        result = `Вы набрали ${score} очка из 5. Неплохо, но мы рекомендуем потренироваться еще. Вы все сможете! :)`
    }else if(score < 3 && score > 0){
        result = `Вы набрали ${score} из 5. Это, конечно, не ноль, но и не максимум... Так что мы советуем вам еще потренироваться! :)`
    }else {
        result = `Вы набрали 0 очков. Как хорошо, что в эту игру можно играть бесконечно, так что играй и прокачивайся :)`
    }
    document.getElementById('task').innerHTML = result
    document.getElementById('newArea').outerHTML = '<button>ok</button>'
}

function showTask() {
    task = Math.floor(Math.random() * tasks.length)
    document.getElementById('task').innerHTML = tasks[task]
    tasks.splice([task], 1)
    return task
}

function checkAnswer(task) {
    let answer = document.getElementById('userAnswer').value
    if (parseInt(answer) === numbers[task]) {
        document.getElementById('resultsArea').innerHTML = 'Верно';
        score++
    } else {
        document.getElementById('resultsArea').innerHTML = 'Неверно! Правильный ответ: ' + numbers[task]
    }
    document.getElementById('userAnswer').value = ''
    numbers.splice([task], 1)

    if (tasks.length > 0) {
        showTask()
    } else{
        finishGame()

    }
}


function startGame() {
    document.getElementById('startGameButton').outerHTML =
        '<div id="newArea">' +
        '<input id="userAnswer" class="userAnswer">' +
        '<br>' +
        '<br>' +
        '<button onclick="checkAnswer(task)" id="checkButton" class="checkButton"><span class="front">Ответить</span></button>' +
        '</div>';
        showTask()
}































