function countVowels(inputString) {
    
    const vow = "aeiouAEIOU";
    let Count = 0;

    for (let char of inputString) {
        if (vow.includes(char)) {
            Count++;
        }
    }
    
    return Count;
}


function filterEvenNumbers(numArray) {
    const evennum = [];

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            evennum.push(numArray[i]);
        }
    }

    return evennum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(numbers);

const result = countVowels("illuminati");
console.log(result); 
console.log(evenNumbers);
