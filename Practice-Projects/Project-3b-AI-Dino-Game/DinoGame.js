//Before game start
//- Listen for keyboard action
//- Start the game

//After game start
//- Jump dino when space key is pressed
//- Listen for collision between dino and cactus
//- If there is a collision, make the game end.
//- If there is no collision, update the score and generate obstacle

//Game ends (game over)'
let RootElem = document.querySelector(":root");
let GameElem = document.querySelector('#game');
let DinoElem = GameElem.querySelector(".dino");
let ScoreElem = GameElem.querySelector(".score")
let GroundElem = GameElem.querySelector(".ground")
let CactusElem = GroundElem.querySelector(".cactus")

let GameSpeed = 4000;
let JumpSpeed = (GameSpeed / 10) * 2;
// let JumpSpeed = 600;
let MaxJump = 250;
let SpeedScale = 1;

let Score = 0;
let GameStarted = false;
let GameOver = false;

//
let selfPlayMode = false;

function setCustomProperty(elem, prop, value) {
    elem.style.setProperty(prop, value);
}

function handleJump(e){
    if (e.code !== "Space") return;
    let audio = document.querySelector(".jump-audio")
    audio.play();
    DinoElem.classList.add("jump")
    Jumping = true;
    DinoElem.addEventListener("animationend", function (){
        Jumping = false;
        DinoElem.classList.remove("jump")
    })
}
///////
function shouldJump() {
    let minGap = 250;
    let cactusXPos = CactusElem.getBoundingClientRect().x

    if (cactusXPos <= 0 || Jumping) return false; 
    if (cactusXPos < minGap) {
        return true;
    }    
        return false;
}
////////

let GameID; 
function startGame() {
    GameStarted = true;
    GameElem.classList.add("game-started")
    document.addEventListener("keydown", handleJump)
    //SetInterval is ok but window.requestAnimationFrame() is better
//     GameID = setInterval(() => {
//         updateGame()
//     }, 100);
    window.requestAnimationFrame(updateGame);
}

function endGame() {
    GameOver = true;
    let audio = document.querySelector(".die-audio")
    audio.play();
    GameElem.classList.add("game-over");
    document.removeEventListener("keydown", handleJump)
    clearInterval(GameID);
}

//Updates game as long as it is running, this function is called
function updateGame() {
    setCustomProperty(RootElem, "--game-speed", GameSpeed)
    setCustomProperty(RootElem, "--jump-speed", JumpSpeed)
    setCustomProperty(RootElem, "--max-jump", MaxJump)
    setCustomProperty(RootElem, "--speed-scale", SpeedScale)
    if(selfPlayMode ) {
        if(shouldJump()) {
            handleJump({code: "Space"}); //Simulate a jump
        }
    }
    //Update Score
    UpdateScore()
    //Update Cactus
    UpdateCactus()
    //Check if game is over
    if (checkGameOver()) {
        endGame();
        return; //Won't recurse
    }
    window.requestAnimationFrame(updateGame);
}

function isCollision(dinoRect, cactusRect) {
    //AABB Axis Aligned Bounding Box
    return (
        dinoRect.x < cactusRect.x + cactusRect.width &&
        dinoRect.x + dinoRect.width > cactusRect.x &&
        dinoRect.y < cactusRect.y + cactusRect.height &&
        dinoRect.y + dinoRect.height > cactusRect.y
    ) 
    
}

function checkGameOver() {
    if (GameOver) return true;
    let dinoRect = DinoElem.getBoundingClientRect()
    let cactusRect = CactusElem.getBoundingClientRect()
    if (isCollision(dinoRect, cactusRect)) {
        return true;
    }
    return false;
}
////////////
let scoreInterval = 10;
let currentScoreInterval = 0;
/////////////
//Update Score
function UpdateScore() {
    currentScoreInterval += 1
    if (currentScoreInterval % scoreInterval !== 0) {
        return;
    } 
    Score += 1;
    //or
    // if (currentScoreInterval % scoreInterval === 0) {
    //     Score += 1;
    // } else {
    //     return;
    // }
    
    if(Score === 0) return;
    if (Score % 100 === 0) {
        let audio = document.querySelector(".point-audio")
    audio.play();
        GameSpeed -= SpeedScale;
        JumpSpeed = (GameSpeed / 10) *2
    }

    let currentScoreElem = ScoreElem.querySelector(".current-score")
    currentScoreElem.innerText = Score.toString().padStart(5, "0")
}

//Update Cactus
function UpdateCactus() {
    let cactusXpos = CactusElem.getBoundingClientRect().x 
    let isOffScreen = cactusXpos > window.innerWidth;
    if (isOffScreen === false) return;

    let cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3"]
    let randomNum = Math.floor(Math.random() * cacti.length)
    let cactus = cacti[randomNum];
    CactusElem.classList.remove(
        "cactus-small-1",
        "cactus-small-2",
        "cactus-small-3"
    );
    CactusElem.classList.add(cactus)
}
//Check if Game over


function fitScreen() {
    let width = window.innerWidth
    let height = window.innerHeight / 2;
    GameElem.style.width = width + "px";
    GameElem.style.height = height + "px";
    GameElem.style.zoom = 1.5;
}

window.addEventListener("load", function() {
    fitScreen();

    window.addEventListener("resize", fitScreen)
    let SelfPlayElem = this.document.querySelector("#selfplay")
    SelfPlayElem.addEventListener("change", function() {
        selfPlayMode =  SelfPlayElem.checked;
    })
    document.addEventListener("keydown", startGame, {once:true})
})