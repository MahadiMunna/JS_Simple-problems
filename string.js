const lyrics = 'Ami tmr moner vitor ekbar ghure aste cai';
const words = lyrics.split(' ');
const sentence= lyrics.split('.');
const charecter=lyrics.split('');

console.log(words);
console.log(sentence);
console.log(charecter);

const partial= lyrics.slice(4,19);
const partial2=lyrics.substring(4,19)
console.log(partial);
console.log(partial2);

const lines =['ami tomar moner vitor','Ekbar ghure aste cai','amay kotota valobasho','sei kotha ta jante cai'];
const newLines = lines.join('\n');
console.log(newLines);
//for more
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


