/*Easy 1*/

num = [2, 5, 7, 8, 10, 11, 15, 16, 19]
function findOdd(array){
    var even = []
    var odd = []
    for(var i=0; i < array.length; i++){
        if ((array [i] % 2) != 1){even.push(array[i])}
        else {odd.push(array[i])}
  
    
    
    }
    var returnObject = {even,odd}; return returnObject;
}

findOdd([2, 5, 7, 8, 10, 11, 15, 16, 19]);
console.log (findOdd([2, 5, 7, 8, 10, 11, 15, 16, 19]))

/* Easy 2 */

num = [1,2,3,4,5,6,7,8,9,10]
function findPrime(num){
    for(var i=0; i < num; i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2) {
        if ( findPrime(i)){
            arr.push(i);
        }
    }
    console.log(arr); //use arr result on your own//}

     display(7)
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

/* Medium 1 */

function vowelChecker(x) {
    var firstChar = x.toLowerCase();

    if (firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u") {
        console.log("Letter is a vowel!");
    } else {
        console.log("Letter is a NOT a vowel. ");
    }
}
vowelChecker("a");

/* Medium 2 */

function areAnagram(str1, str2) {

    let n1 = str1.length;
    let n2 = str2.length;


    if (n1 != n2)
        return false;


    str1.sort();
    str2.sort()


    for (let i = 0; i < n1; i++)
        if (str1[i] != str2[i])
            return false;

    return true;
}


let str1 = ['t', 'e', 's', 't'];
let str2 = ['t', 't', 'e', 'w'];


if (areAnagram(str1, str2)){
   console.log(false) 
}else{
   console.log(true)}

   
   
   /* Medium 3 */
   
   
   function findMod(x,y){
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(findMod(12,13))*/

/* Medium 4 */


let car = {
    make: "Jeep",
    model: "Patriot",
    year: 2008,
    milage: 184000,
    color: "Black",

    driveToWork: function () {
        let calcDTW = this.milage + 33
        console.log(`old milage ${this.milage} | new milage ${calcDTW}`);
        return calcDTW
    },
    driveAroundTheWorld: function(){
let calcATW = this.milage + 24000;
console.log(`old milage ${this.milage} | new milage ${calcATW}`)
    },
    runErrands: function(){
let calcErr = this.milage + 30;
console.log(`old milage ${this.milage} | new milage ${calcErr}`)
    }
};

console.log(car.driveToWork());
console.log(car.driveAroundTheWorld());
console.log(car.runErrands());

/* Hard */

function matchingBrackets(string){
    if (string === "[" && "]" || string === "{" && "}" ||"(" && ")"){
        string = true
    }else if (string === "{" && "[" || "(") {
        string = false
    }
    return string
}

console.log(matchingBrackets("{hello world}"))

