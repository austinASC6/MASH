function mash(){
      return " You will live in a " + getHome() + ", and you will have "+ getChildrenCount() +" kids!";

}

console.log(mash());


function randomizer(range){//ghghghghgh
    randNumber = Math.random() * range;//It multiples it from 0-3
    randFloor = Math.floor(randNumber);// Removes the decimal of our umber
    return randFloor; // returns it to the whole scope
}

// ^ creats the random number function

//this funcb labl
function getHome(){
  let Houses = ["Mansion","Apartment", "Shack","House"];
  let ranIndex = randomizer(Houses.length);
  let userHouse = process.argv[2];
  Houses.push(userHouse);
    //console.log(Houses);
return Houses[ranIndex];
}

console.log(getHome());


function getChildrenCount(){
let zeroHundred = 200;
let decimal = Math.random() * zeroHundred;
let sumFloor = Math.floor(decimal);

if(sumFloor>100){
  userNumber = process.argv[3];
  return userNumber;
}

return sumFloor;

}
console.log(getChildrenCount())

function getCar(){
let Cars = ["Lambo","Convertible","Box with wheels"];
let carsIndex = randomizer(Cars.length);
return carsIndex

}



