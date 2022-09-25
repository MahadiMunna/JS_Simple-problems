let fibo= [0,1];
for(let i=2;i<10;i++){
    const element = fibo[i-2]+fibo[i-1];
    fibo.push(element);
}
console.log(fibo);