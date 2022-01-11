const hq = 42;
const oneBlock = 264;
let distanceFromHqInBlocks = (pickupLocation) => Math.abs(42-pickupLocation);
function distanceFromHqInFeet(pickupLocation) {
    return Math.abs(distanceFromHqInBlocks(pickupLocation)*oneBlock);
  }
function distanceTravelledInFeet(start, destination) {
    return Math.abs(distanceFromHqInFeet(destination)-distanceFromHqInFeet(start));
  }
function calculatesFarePrice(start, destination) {
    let distanceInFeet = Math.abs(distanceFromHqInFeet(destination)-distanceFromHqInFeet(start));
    if(distanceInFeet <= 400)
    {
        return 0;
    }else if(distanceInFeet >= 401 && distanceInFeet < 2000)
    {
        return (distanceInFeet-400)*0.02;
    }else if(distanceInFeet < 2500 && distanceInFeet > 2001)
    {
        return 25;
    }else{
        return 'cannot travel that far';
    }
  }