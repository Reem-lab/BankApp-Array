

const checkDogsAges = function (dogsKate, dogsjulia){

    const dogsjuliaCorrected = dogsjulia.slice();   
    dogsjuliaCorrected.splice(0,1);
    dogsjuliaCorrected.splice(-2);
    console.log(dogsjuliaCorrected);

    //we have to concat them then forEach 

         const dogs =  dogsKate.concat(dogsjulia);
         console.log(dogs);
    dogs.forEach(function(age,i){
        if(age >= 3){
          console.log(`dog number ${i+1} and is an adult and is ${age} years old!`);
         } else{
        console.log(`dog number ${i+1} and is still a pupy 🐕‍🦺`);
         }
    })
    
}

checkDogsAges(['3','5','2','12','7'], ['4','1','15','8','3'])


const calcAverageHumanAge = (dogs) => {
        dogs.map((dogAge) => (dogAge <= 2 ?  2 * dogAge : 16 + dogAge * 4))
         .filter((age) => age >= 18)
         .reduce((acc, curr,i, arr) => {
         acc + curr / arr.length;
        },0)

        // return average;
} 

const avg1 = calcAverageHumanAge([5, 2 , 4 , 1  , 15 , 8 , 3]);
const avg2 = calcAverageHumanAge([16, 6 , 10 ,  5 , 6 , 1 , 4]);
console.log(avg1,avg2);





