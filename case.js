const userName = 'Munna';
const userInput = 'munnA';

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid user');
}
else{
    console.log('Invalid user')
}