
function isVowel(str){
    const vowelMap = new Map();
    for(const char of str){
        const vowels = 'aeiou'.includes(char.toLowerCase());
        if(vowels){
           const vowelsCount = vowelMap.get(char) || 0;
            vowelMap.set(char,vowelsCount+1);
        }
    }
    return vowelMap;
}
console.log(isVowel('Nikitha'))