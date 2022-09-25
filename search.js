const lyrics= "jano ki tumi monEr kache durotto kichu noy";
const searchString = 'Moner';

//for ignor case
lowerLyrics = lyrics.toLowerCase();
lowerSearchString = searchString.toLowerCase();

//search in this string
doesExist = lowerLyrics.includes(lowerSearchString);

console.log(doesExist);

console.log(lyrics.indexOf('ki'));
console.log(lyrics[5]);

if(lyrics.indexOf('kaila')!=-1){
    console.log('exits')
}
else{
    console.log('Doesn\'t exist')
}

// startswith
console.log(lyrics.startsWith('tmi'))

//endswith
const filename='mybiodata.pdf';

console.log(filename.endsWith('.pdf'))


