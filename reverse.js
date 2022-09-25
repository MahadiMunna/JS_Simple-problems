function reverseString(text){
    let reverse = '';
    for(let i=text.length-1;i>=0;i--){
        const element = text[i];
        reverse = reverse + element; 
    }
    return reverse;
}
function reverseWords(line){
    let reverse = [];
    const words = line.split(' ');
    for(let i=words.length-1;i>=0;i--){
        const element = words[i];
        reverse.push(element);
    }
    return reverse;
}
const str = 'I am a bad boy';
const revLine = reverseString(str);
const revWords = reverseWords(str);
console.log(str);
console.log(revWords.join(' '));
console.log(revLine);