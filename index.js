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
var $time = document.querySelector('#time')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')

let colors = [
  "#ff00ff",
  "#778899",
  "blue",
  "yellow",
  "#9370db	",
  "#00fa9a",
  "#f0f8ff",
];
var score = 0
let isGameStarted = false

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameStart)



function show($el) {
  $el.classList.remove("hide");
}
function hide($el) {
  $el.classList.add("hide");
}


function startGame() {
    score = 0
    setGameStart()
    $gameTime.setAttribute('disabled', 'true')

    isGameStarted = true
    $game.style.backgroundColor = '#fff'
    hide($start)

    let interval = setInterval(() => {
        let time = parseFloat($time.textContent)

        if (time <= 0 ) {
            //end game
            clearInterval(interval)
            endGame()
        } else {
            $time.textContent = (time - 0.1). toFixed(1)
        }


    }, 100);

    renderBox()

}

function setGameStart() {
    var time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader);
    hide($resultHeader);
    
}


function setGameScore() {
    $result.textContent = score.toString();
}



function endGame() {
    isGameStarted = false
    setGameScore()
    $gameTime.removeAttribute('disabled')
    show($start)
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    hide($timeHeader)
    show($resultHeader)
}

function handleBoxClick(event) {

    if (!isGameStarted) {
        return 
        
    }


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
    let randomColorIndex = randomBox(0, colors.length)
    console.log(colors.length)

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = colors[randomColorIndex]
    box.style.top = randomBox(0, maxTop) + "px"
    box.style.left = randomBox(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')


    $game.insertAdjacentElement('afterbegin', box)
}

function randomBox(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
    
}




