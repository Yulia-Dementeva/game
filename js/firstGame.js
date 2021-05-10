let answer = Math.floor(Math.random() * 100);
let tryCount = 0;

function write(text) {
    document.getElementById("info").innerHTML = text;
}


function paintNumber(userAnswer) {
    let b = document.querySelectorAll('td')
    for (let i = 0; i < b.length; i++) {
        if (parseInt(b[i].textContent) === answer && userAnswer === answer) {
            b[i].className = 'green'
            console.log(b[i])
        } else if (parseInt(b[i].textContent) === userAnswer) {
            b[i].className = 'red'
        }
    }
}


function guess(selectedAnswer) {
    tryCount++;
    let userAnswer = parseInt(selectedAnswer);
    console.log(userAnswer)
    if (userAnswer == answer) {
        write(`Поздравляю, Вы угадали! <br/>Количество попыток: ${tryCount}`);
        document.getElementById('gif').outerHTML = '<img class="gif" src="https://static.tildacdn.com/tild6237-6230-4163-b938-623839363536/giphy_1.gif">'
        paintNumber(userAnswer)

    } else if (userAnswer > answer) {
        write("Вы выбрали слишком большое число<br> Попробуйте еще раз.");
        paintNumber(userAnswer)


    } else if (userAnswer < answer) {
        write("Вы выбрали слишком маленькое число<br> Попробуйте еще раз.");
        paintNumber(userAnswer)

    }
}

