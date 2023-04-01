const anagrams = (str1, str2) => {
    if(str1.length !== str2.length)
        return false

    let countStr1 = {}
    let countStr2 = {}
    for(let val of str1){
        countStr1[val] = (countStr1[val] || 0) + 1
    }
    for(let val of str2) {
        countStr2[val] = (countStr2[val] || 0) + 1
    }
    for(let key in countStr1){
        if(countStr1[key] !== countStr2[key]) {
            return false
        }
    }
    return true
}

console.log(anagrams("", ""))
console.log(anagrams("aaz", "zza"))
console.log(anagrams("anagram", "nagaram"))
console.log(anagrams("rat", "cat"))
console.log(anagrams("awesome", "awesom"))
console.log(anagrams("qwerty", "qeywrt"))
console.log(anagrams("texttwisttime", "timetwisttext"))