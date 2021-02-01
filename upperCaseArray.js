let animals = ["kucing","sapi","AyAm","anJinG"]
let animalsUpperCase = animals.map(upperCase => {
    return upperCase.toUpperCase()
})

console.log(animalsUpperCase);


function swapCase(words){
    let result = [];
    let wordsArr = words.split(' ');
    for(let i = 0 ; i < wordsArr.length ; i++){
        if(i % 2 == 0){
            result.push(wordsArr[i].toUpperCase());
        } else {
            result.push(wordsArr[i]);
        }
    }
    return result.join(' ')
}
console.log(swapCase("halo semua, belajar coding di skilvul yuk"));



