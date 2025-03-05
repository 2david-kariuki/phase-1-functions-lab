// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42)

}



function distanceFromHqInFeet(streetNumber) {
  const hqStreet = 42; 
  const feetPerBlock = 264; 
  return Math.abs(streetNumber - hqStreet) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(start - destination) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
  const feetPerBlock = 264;
  const distance = Math.abs(start - destination) * feetPerBlock;

  if (distance <= 400) {
    return 0; 
  } else if (distance <= 2000) {
    const chargeableDistance = distance - 400;
    return chargeableDistance * 0.02; 
  } else if (distance <= 2500) {
    return 25; 
  } else {
    return "cannot travel that far"; 
  }
}