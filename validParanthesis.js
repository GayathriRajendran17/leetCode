var isValid = function(s) {
    if(s === "")
        return true
    if(s.length < 2)
        return false
    const symbol = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    
    const res = []
    
    for(let i = 0; i < s.length; i++){
        if(symbol[s[i]])
            res.push(s[i])
        else{
            let chBr = res.pop()
            if(symbol[chBr] !== s[i])
                return false
        } 
    }
    if(res.length > 0)
        return false
    return true
};

isValid("((")

// these is only for the parathesis

var isValid = function(s) {
    const symbol = {
        "(": ")"
    }
    if(s === "")
        return false
    const openParams = 0
    const closeParams = 0
    for(let i = 0; i < s.length; i++){
        if(symbol[s[i]])
            openParams = openParams + 1
        else {
            if(closeParams > openParams)
                return false
            closeParams = closeParams + 1
        }
    }
    if(openParams !== closeParams)
        return false
    return true
}