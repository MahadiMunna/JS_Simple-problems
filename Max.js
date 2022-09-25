function max(jim,dela,chinku){
    const max = Math.max(jim,dela,chinku);
    return max;
}


const jim =84;
const dela = 75;
const chinku = 65;

// if(jim>dela && jim>chinku){
//     console.log('Jim will get the cake')
// }
// else if(dela>jim && dela>chinku){
//     console.log('Dela will get the cake')
// }
// else{
//     console.log('Chinku will get the cake')
// }

const maxNum = max(jim,dela,chinku);
console.log(maxNum + ' will get the cake');