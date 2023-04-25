// Create a function that filters out negative numbers
// In this challenge, you’ll have a function that takes an array as input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

var numbers = [-3,-2,-1,0,1,2,3];
 numbers = numbers.filter (function(x){
 return x > 0  
}
)
console.log(numbers);