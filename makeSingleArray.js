const arr = [[1, 2], [3, [4, [5, 50]]], [6, 7], [8, 9]]

const newArray = []
const singleArray = (a, func) => {
    for(let i = 0; i < a.length; i++){
        if(Array.isArray(a[i]))
            func(a[i], func)
        else
            newArray.push(a[i])
    }
    return newArray
}

console.log(singleArray(arr, singleArray))