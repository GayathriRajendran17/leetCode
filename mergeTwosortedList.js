// 5 jars each 10 pins each 10grams 9grams(contmiatent)

// emptyjars - grams
// 1 jars = empat + 10*10
// 1 10*10 + 10*10 
// 1 each 1 measuring 
// 1 - 1000
// 2 - t0-pre
// 3 - 

// i = 0, j = str.length
// a[i] = [j] ? 
// 

// middle 

// a##bcba
// a##bcba



function palindrome(str) {
  let middle = Math.floor(str.length/2)
  let t = 0
  while(t !== middle) {
    if(str[t] !== str[str.length-1-t])
//       console.log("see", t)
      return "Not a palindrome"
    t = t + 1
  }
//   if(str.length % 2 === 0){
//     if(str[middle] != str[middle-1])
//       return "Not a palindrome"
//   }
  return "palindrome"
}


console.log(palindrome("abccba"))
console.log(palindrome("abcba"))
console.log(palindrome("abcbawrjfuwrgfrgbre"))

let a = "abcba"

let b = Math.floor(a.length/2)

console.log(Math.floor(7/2))
// console.log(a.slice(b+1, a.length))