class question {
    constructor (question, correctAnswer, answerA, answerB, answerC, answerD) {
        this.question = question;
        this.correctAnswer = correctAnswer;

        this.answers = {
            A: answerA,
            B: answerB,
            C: answerC,
            D: answerD
        }
    }
}

const Questions = [
    new question (
        'What does CSS stand for?',
        'C',
        'Colorful Style Sheets',
        'Computer Style Sheets',
        'Cascading Style Sheets',
        'Creative Style Sheets'
    ),
    
    new question (
        'What is the correct HTML for referring to an external style sheet?',
        'B',
        'style rel="stylesheet type="text/css" src="style.css"',
        'link rel="stylesheet type="text/css" href="style.css"',
        'link rel="stylesheet type="text/css" src="style.css"',
        'style rel="stylesheet type="text/css" link="style.css"'
    ),
    
    new question (
        'Where in an HTML document is the correct place to refer to an external style sheet?',
        'A',
        'In the head section',
        'In the style section',
        'In the body section',
        'At the end of the document'
    ),
    
    new question (
        'Which HTML tag is used to define an internal style sheet?',
        'C',
        'The head tag',
        'The CSS tag',
        'The style tag',
        'The script tag'
    )
]

const Quiz = () => {
    const form = document.createElement('form')
    let correctAnswerArr = []
    let answerArr = []
    Questions.forEach(question => {
        const div = document.createElement('div')
        const p = document.createElement('p')
       correctAnswerArr.push(question.correctAnswer)
        p.textContent = question.question
        for (letter in question.answers){
            const questionDiv = document.createElement('div')
            const radio = document.createElement("INPUT");
            const label = document.createElement('label')
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", question.question);
            radio.id = letter;
            label.textContent = question.answers[letter]
            questionDiv.append(radio,label)
            div.append(questionDiv)
        }
        form.append(p,div)
    })
    const submit = document.createElement('button')
    submit.textContent = 'SUBMIT'
    submit.addEventListener('click', function() {
        answerArr = []
        form.querySelectorAll('div div input').forEach(x => {
            if (x.checked == true) answerArr.push(x.id)
        })
        score.textContent = `${arraysEqual(correctAnswerArr,answerArr)}/4`
        document.body.append(score)
    })
    const score = document.createElement('h1')
    score.textContent = '0/4'
    document.body.append(form,submit,score)

    function arraysEqual(a1,a2) {
        let correct = 0;
        a1.forEach((x,id) => {
            x == a2[id]? correct++ : null
        })
        return correct
    }
}

Quiz()
