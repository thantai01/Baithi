//Task2.2

let array = [0,1,2,3,9,8,7,6,5,4];

let x = +prompt(" Insert your number?!");
findInt();

function findInt() {
    for (let i = 0; i < array.length; i++) {
        if (x === array[i]) {
            return i;
        }
    }
}

document.write("The number on input has index at " + findInt());