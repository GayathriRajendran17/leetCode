var romanToInt = function(s) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let number = 0
    for(let i = s.length - 1; i >= 0; i--){
            if(symbols[s[i]] < symbols[s[i+1]]) {
                number =  number - symbols[s[i]]
            }
            else {
                number = symbols[s[i]] + number
            }
    }
    return number
};