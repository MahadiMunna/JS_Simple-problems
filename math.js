const result = Math.pow(5,2);
console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1-num2);
console.log(gap)

if (gap<5){
    console.log('Friends')
}
else{
    console.log('not friends')
}

const num3 = Math.round (2.51243)
const num4 = Math.round(2.41243)
const num5 = Math.ceil(2.0001)
const num6 = Math.floor(2.900)

console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)

for(let i=0;i<20;i++){
    const random = (Math.random()*6)
    console.log(random);
}

//for more
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math