
function firstLetterName(name) {
    alert(`The name ${name} starts with the letter ${name[0]}`);
}

function divisibleByTwo(number) {
    return number % 2 === 0;
}

function largestNum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

firstLetterName("Ashir");
console.log(divisibleByTwo(8));
console.log(largestNum([3, 8, 2, 10]));

