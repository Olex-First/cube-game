// var $start = document.querySelector ('#start')
// var $game = document.querySelector('#game')

// // var score = 0

// $start.addEventListener('click', startGame)
// // $game.addEventListener('click', handleBoxClick)


// function startGame() {
//     console.log('Start')
//     $start.classList.add('hide')
//     $game.style.backgroundColor = 'white'


//     renderBox()
// }
// // function handleBoxClick(event) {
// //     if(event.target.dataset.box){
// //         score++
// //         renderBox()
// //     }
// //     // console.log(event.target.dataset)
// // }
// //
// function renderBox() {
//     // $game.innerHTML = ''
//    var box =  document.createElement('div')

//    box.style.height = box.style.width = '50px'
//     box.style.position = 'absolute'
//     box.style.backgroundColor = '#000'
//     box.style.top = '50px'
//     box.style.left = '70px'
//     box.style.cursor = 'pointer'
//     // box.setAttribute('data-box', 'true')
// // вставить div бокс  в div(game)
//     $game.insertAdjacentElement ('afterbegin', box )
// }
// //

var $start = document.querySelector('#start');
var $game = document.querySelector('#game')

var score = 0

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);


function startGame() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')

    renderBox()

}

function handleBoxClick(event) {
    if (event.target.dataset.box) {
        score++
        renderBox()
    } 
    
}

function renderBox() {
    
    $game. innerHTML = ''
    var box = document.createElement('div')
    var boxSize = randomBox(40,100)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize
    var maxLeft = gameSize.width = boxSize
    console.log(gameSize)
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = randomBox(0, maxTop) + "px"
    box.style.left = randomBox(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')

    $game.insertAdjacentElement('afterbegin', box)
}

function randomBox(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
    
}




