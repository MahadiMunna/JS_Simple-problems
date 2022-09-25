function maxInArray(numbers){
    let largest = numbers[0];
    for(let i=0;i<numbers.length;i++){
        const element = numbers[i];
        if(element>largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167,168,170,154,187];
const tallest = maxInArray(heights);
console.log('tallest person is : ',tallest);