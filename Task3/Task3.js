


addArr();
countNegInt();

function addArr() {
    let a = document.getElementById('input').value;
    arr.push(a);
    displayArr();
}


function displayArr() {
    console.log(arr);
    document.getElementById('display').innerHTML = arr;
}


function countNegInt() {
    if(checkNegInt()) {
        count+=1;
        document.getElementById('result').innerHTML = " So cac ki tu nguyen am = " + count;
    } else {
        document.getElementById('result').innerHTML = " Khong co ky tu nguyen am nao "
    }
}


