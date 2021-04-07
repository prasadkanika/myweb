const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const homeButton=document.getElementById('home-btn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')
let shuffledQuestions,currentQuestionIndex
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
currentQuestionIndex++
setNextQuestion()}
)
function startGame(){
    startButton.classList.add('hide')
    homeButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer =>{
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestions.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')

}else{
    startButton.innerText='restart'
    startButton.classList.remove('hide')
    homeButton.classList.remove('hide')
    /*const finish=document.createElement('button')
    finish.innerText='finish'
    finish.classList.add('btn')*/

}

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){element.classList.add('correct')}
    else{element.classList.add('wrong')}
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions=[
    {
    question:'What data structure is used for breadth first traversal of a graph?',
    answers:[
        {text:'queue', correct:true},
        {text:'list', correct:false},
        {text:'tree', correct:false},
        {text:'none of the above', correct:false}
    ]
},
{
question:'Fn = Fn-1 + Fn-2 , This formula will produce?',
answers:[
    {text:'Armstrong Number', correct:false},
    {text:'Fibonacci series', correct:true},
    {text:'Prime Number', correct:false},
    {text:'Euler Number', correct:false}
]
},
{
question:'Binary search tree has best case run-time complexity of Ο(log n). What could the worst case?',
answers:[
    {text:'O(n)', correct:true},
    {text:' Ο(1)', correct:false},
    {text:'O(n*n)', correct:false},
    {text:'O(2n)', correct:false}
]
},
{
question:'In doubly linked lists',
answers:[
    {text:'a pointer is maintained to store both next and previous nodes.', correct:false},
    {text:' a pointer to self is maintained for each node.', correct:false},
    {text:'two pointers are maintained to store next and previous nodes', correct:true},
    {text:'None of the above', correct:false}
]
},
{
question:'Shell short uses',
answers:[
    {text:'merge sort', correct:false},
    {text:'quick sort', correct:false},
    {text:'selection sort', correct:false},
    {text:'insertion sort', correct:true}
]
},
{
question:'A vertex of in-degree zero in a directed graph is called a/an',
answers:[
    {text:'Root vertex', correct:false},
    {text:'Isolated vertex', correct:false},
    {text:'Sink', correct:true},
    {text:'Articulation point', correct:false}
]
},
]
