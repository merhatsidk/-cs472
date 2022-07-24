//sum([10,2,3])=>15
// function sum(array) {
//     let sum = 0;
//     for(digit of array){
//         sum+=digit;
//     }
//     return sum;
// }

// console.log(sum([10,2,3]));

// removeDuplicates(["apple","banana","apple"])=> ["apple","banana"]

// function removeDuplicates(arr){
//     let dup = [];
//     for(ele of arr){
//         !dup.includes(ele) ? dup.push(ele) : null;
//     }
//     return dup;
// }

// console.log(removeDuplicates(["apple","banana","apple","banana","merha"]));

//findElement(["apple","banana"],"appdle")=>true

function findElement(arr,str){
    for(let ele of arr){
    return arr.indexOf(str) > -1;
        }
    // for(ele of arr){
    //     if(ele === str){
    //         return true;
    //     }
    // }
    // return false;
}
console.log(findElement(["apple","banana"],"apple"));

// reverseString("abc") => "cba"

// function reverseString(str){
//     let newStr = "";
//     for(let i = str.length - 1; i >= 0; str.length --){
//        newStr = newStr + str.charAt(i);
//     }
//     return newStr;
// }
// console.log(reverseString("abc"));

// changeString("wap")=>wbp




// changeArray([10,20,3,4])=>[4,10,20,3]





