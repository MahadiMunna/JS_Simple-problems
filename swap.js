let first = 2;
let second = 1;

console.log(first,second);


// approch 1
let temp = first;
first=second;
second=temp;

console.log(first,second);

//approch 2----Destructuring

[first,second]=[second,first]
console.log(first,second);

