const countUniqueValues = (arr) => {
    let i = 0
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j])
            i = i + 1
    }
    return i
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 5,]))