const flatTree = [
    { id: 1, children: [2, 3] },
    { id: 2, children: [4, 5, 6] },
    { id: 3, children: [7] },
    { id: 4, children: [] },
    { id: 5, children: [] },
    { id: 6, children: [] },
    { id: 7, children: [8] },
    { id: 8, children: [] },
    { id: 9, children: [] },
]

const newArray = []

const conversion = (arr, func) => {
	const newArray = []
	for(let i = 0; i<arr.length; i++){
  		const value = flatTree.filter((item) => item.id === arr[i])
        value[0].children = func(value[0].children, func)
      newArray.push(value[0])
  }
  return newArray
}


flatTree[0].children = conversion(flatTree[0].children, conversion)

console.log(flatTree[0])