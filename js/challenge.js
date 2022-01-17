//make the minus button count down done 
//make the plus button count up done
//make the time interval go up every 1 second done 
//make the time pause when you the pause button done



//grabbing all the id's that we need 
const getTheMinusButtom = document.getElementById('minus')
const getThePlusButton = document.getElementById('plus')
const getTheCounter = document.getElementById('counter')
const getTheHeartButton = document.getElementById('heart')
const getThePauseButton  = document.getElementById('pause')
const getTheLikesList = document.querySelector('ul.likes')

let isPaused = false
let numberOflikes = 0
let currentTime =  new Date();



const timeIncreaseOverTime = () => {
    if(!isPaused){
        let holdTheValue = getTheCounter.textContent
        holdTheValue++
        let timeNow = currentTime.getSeconds()
        
        getTheCounter.textContent = holdTheValue
        changeStateOfButtons(false)
        return
    }
    if(isPaused){
        changeStateOfButtons(true)
        return
    }
}

const changeStateOfButtons = (state) => {
    getTheMinusButtom.disabled = state
    getThePlusButton.disabled = state
    getTheHeartButton.disabled = state
}

const pauseTheTimer = (e) => {
    //able to pause and unpause
    return isPaused = !isPaused
}


setInterval(timeIncreaseOverTime,1000)



const decreaseTimer = (e) => {
    getTheCounter.innerHTML  = getTheCounter.innerHTML - 1
}

const increaseTimer = (e) => {
    let holdTheValue = getTheCounter.textContent
    holdTheValue++
    getTheCounter.textContent = holdTheValue
    
}



const addHeart = (e) => {
    let timeOfLike = getTheCounter.textContent
    const addToList = document.createElement('li')
    let thisTimeNow = new Date()
    let clickTimeNow = thisTimeNow.getSeconds()
    console.log(`Current Time ${currentTime} and click time ${clickTimeNow}`)

    if(thisTimeNow == clickTimeNow) {
        console.log("this is the same time")
    }else {
        console.log("this is not the same time")
    }
    

    addToList.textContent = `${timeOfLike} has been liked ${numberOflikes} time`

   
    getTheLikesList.append(addToList)

}




getTheMinusButtom.addEventListener('click',decreaseTimer)
getThePlusButton.addEventListener('click',increaseTimer)
getThePauseButton.addEventListener('click',pauseTheTimer)
getTheHeartButton.addEventListener('click',addHeart)