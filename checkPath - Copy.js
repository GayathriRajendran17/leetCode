const obj = {
    a : {
      b : "h",
      c : "k"
    },
    k : "l"
  }
  
  const path = 'k'
  
  const check = (obj, path) => {
   let newObj = obj
   for(let i = 0; i < path.length; i = i+2){
     if(newObj[path[i]]){
       if(i === path.length - 1)
         return newObj[path[i]]
       newObj = newObj[path[i]]
       }
     else 
       return undefined
   }
  }
  
  console.log(check(obj, path))