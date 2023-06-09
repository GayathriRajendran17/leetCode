// selecting the minimum and pushing to first places

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j
        }
        if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]] 
    }
    return arr
}

console.log(selectionSort([37, 45, 29, 8]))

// O(n^2)