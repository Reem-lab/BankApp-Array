/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
//slice method
const arr = ['a', 'b', 'c', 'd','e'];

//from second index to last
console.log(arr.slice(2));
console.log(arr.slice(2,4));// the forth not with us
console.log(arr.slice(-1));//last one
console.log(arr.slice(-2));//last two from the last
console.log(arr.slice());//all array


//splice methos ---------> like slice method but mutate the array
// console.log(arr.splice(2));//from 2 index to last
console.log(arr);//the new arr after splice

//reverse 
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());//reverse the array 
console.log(arr2);

//concat 
const letters  = arr.concat(arr2);
console.log(letters);// with concat methos
console.log([...arr, ...arr2]);// with spread operator we can concat them 


//join 
console.log(letters.join('-')); */


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //we use entries to put number of index
// for(const [i,mov] of movements.entries()){
//     if(mov > 0){
//         console.log(`Movement ${i+1} : you deposite ${mov}`)
//     }else{
//         console.log(`Movement ${i+1} : you withdrew ${Math.abs(mov)}`);// to remove negative sign 
//     }
// }

// console.log('------forEach----')

// //here we put it parameter to function
// movements.forEach(function(mov,i,arr){
//     if(mov > 0){
//         console.log(` Movement ${i+1} : you deposite ${mov}`)
//     }else{
//         console.log(` Movement ${i+1} : you withdrew ${Math.abs(mov)}`)
//     }
// })


//map and set 
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


// currencies.forEach(function(value, key, map){
//     console.log(`${key} : ${value}`);
// });


// creating set here : 
// const currencies2 = new Set(['USD', 'EUR', 'GBP', 'USD','EUR']);

// console.log(currencies2);
// //write the _ to make another value 
// currencies2.forEach(function (value, _ , map) {
//   console.log(`${value} : ${value}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurTo = 1.1
// const transferTo =  movements.map(mov =>  mov * eurTo)

// console.log(movements)
// console.log(transferTo);


// const movDesc = movements.map((mov,i) => {
//   //we can use terbary operator short way (functional programming)
//     `Movement ${i + 1} : you $(mov > 0 ? 'deposited' : 'withdrew') ${Math.abs(mov)}`

//   //here we return not console.log XXX
//         //  if(mov > 0){
//         //      return ` Movement ${i+1} : you deposite ${mov}`
//         // }else{
//         //       return ` Movement ${i+1} : you withdrew ${Math.abs(mov)}`
//         // }
// })

// console.log(movDesc);


//filter method 

// const deposit = movements.filter((mov)=> {
//   return mov > 0 ;
// })

// const withdrawal = movements.filter((mov)=> {
//   return mov < 0 ;
// })

// // //if we use for of 
// // const depositefor = [];
// // for(const mov of movements) {
// //   if (mov > 0)
// //      movements.push(mov);
// // }


// console.log(deposit);
// console.log(withdrawal);
// // console.log(depositefor);


// //reduce method it has two parameters

// const balance = movements.reduce((acc, item) => {
//      return acc = acc + item;
// },0)

// console.log(balance);

// // reduce can get max

// const max = movements.reduce((acc, curr) => {
//        if (acc > curr)
//         return acc
//        else
//        return curr 
// }, movements[0])


// // pipline 
// const eurTo = 1.1
// const totalDisplayUSD = movements
// .filter((mov) => mov > 0 )
// .map((mov) => mov * eurTo)
// .reduce((acc, mov) => acc + mov)

// console.log(totalDisplayUSD);


// //find method

// const accountName = accounts.find((acc) => acc.owner === 'Jessica Davis');
// console.log(accountName);

// //by for of loop
// for(const account of accounts){
//   accounts.find((acc) => acc.owner === 'Jessica Davis' );
//
// }
// console.log(account);

//check if the array include movements
//equality
console.log(movements.includes(-130)); //retur true 

//if we want to check on condidtion
//any positive number any deposite
// console.log(movements.some(mov => mov === -130));

// const anyDeposite = movements.some(mov => mov > 1500) //any one value contain number more than 1500 it true
// console.log(anyDeposite); //reture true


// //sort 
// //ascending
// movements.sort(a,b){
//   if(a > b)
//      return 1 //switch order so we return number more than 0
//   if(b > a)
//      return -1  //keep order so we return number less than 0
// }

// console.log(movements);

// //we can do it in another way
// //movements.sort((a,b) => a - b); //like we say return somthing positive

// //sort
// //descinding
// movements.sort(a,b){
//   if(a > b)
//      return -1
//   if(b > a)
//      return 1 
// }

//movements.sort((a,b) => b - a); //like we say return somthing negative 
console.log(movements);

//creating a new array

console.log([ 1 , 2 , 3 , 4 , 5 , 6 ]);
console.log(new Array( 1 , 2 , 3 , 4 , 5 , 6 ));

//empty array with lenght 7
const x = new Array(7);
console.log(x);

//fill it with num 1 
x.fill(1);
x.fill(4, 2,6)//like splice take 3 parameter the first the number 4 to fill 4 from second index to sixth index
console.log(x);

//array from 
//like fill 
//take lenght and call back fun 
const y = Array.from({length:8}, () => 1);
console.log(y);

//return index 0 + 1 to fill the array 
// we can just put the _ it means not used but it should be as a parameter
const z = Array.from({length:8}, (_, index) => index + 1);
console.log(z);








