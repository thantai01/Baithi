//Task2.1
let array1 = [1,2,3,7,8,9];
function findIndex(a) {
    for (let i = 0; i < array1.length; i++) {
        if (a === array1[i]) {
            return i;
        }
    }
}
findIndex(3);
document.write('Phan tu nam o vi tri thu ' + findIndex(3));



