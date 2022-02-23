// Code your solution in this file!
function distanceFromHqInBlocks(num){
    if(num === 42){
        return 0;
    }else if(num > 42){
        return num - 42;
    }else{
        return 42 - num;
    } 
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, end){
    return (end > start) ? (end - start) * 264 : (start - end) * 264;
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);

        if( distance < 400){
            return 0;
        } else if(distance > 400 && distance < 2000){
            return (distance - 400) * 0.02;
        } else if(distance > 2000 && distance < 2500){
            return 25;
        } else{
            return "cannot travel that far";
        }
    
}