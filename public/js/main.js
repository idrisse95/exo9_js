let un =0
for (let index = 1; index < 11; index++) {
    console.log(index);
    
}

console.log('');
console.log('While');

let sum = 10;
while(sum>0){
    console.log(sum);
    sum--;
}

console.log('');
console.log('Do Wdhile');

let j = 2
do {
    console.log(j);
    j=j+2;
} while (j<22);

console.log('');
console.log('For of');

let tab = [2,3,4,5,6,4,"idriss"]

for (const iterator of tab) {
    console.log(iterator);
}

// console.log('');
// console.log('For Deux');


// for (let sum = 0; sum < 10; sum++) {
//     console.log(sum);
//     sum=sum+sum;
    
// }

// let nb = +prompt('entre un nb pos')
// if (nb<0) {
 
//            prompt('entre positif')
      
// }
// else{
//     alert('c bon')
// }

for (let nbD = 0; nbD < 10;nbD++) {
 
    console.log(nbD);

switch (true) {
    case nbD==5:
        alert('stop')
        break;

    default:
        break;
}}