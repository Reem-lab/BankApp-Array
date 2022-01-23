'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//function to display the loans 
const displayMovments = function(movements, sort = false){
   containerMovements.innerHTML = ''; //firstly  want to make container is empty 

   //to sort our movements slice to copy the array and ascending
   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements ;

//check if it is minus to be withdrwals or positive to be deposite 
//we put movs to check the sorted
 movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : "withdrawal";
  
    //insert html tag
    const html =
    ` <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${mov}€</div>
      </div>`

      //to insert them from the top
      //insert adjacentHtml call two parametrs 
      containerMovements.insertAdjacentHTML('afterbegin',html);
 });

}


//display balance 
const displayBalance = function(acc){
   acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0)
     labelBalance.textContent = `${acc.balance}€`;
}

//create incomes 

const displaySummary = function (acc){
  //sum of deposites
    const totalInCome = acc.movements
    .filter( mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
    //related with dom
    labelSumIn.textContent = `${totalInCome} €`;

    //sum of withdrawls 
    const totalOutCome = acc.movements
    .filter( mov => mov < 0)
    .reduce((acc, mov) => acc + mov ,0);
    labelSumOut.textContent = `${Math.abs(totalOutCome)} €`

    //sum of interst bannk give each elemnt 1.2% just deposites
    const interst = acc.movements
    .filter(mov => mov > 0)
    .map((item) => (item * acc.interestRate) /100)
    .filter((inter , i , arr) => {
      //here just we use interst 1 or more 
      return inter >= 1
    })
    .reduce((acc, inter) => acc + inter ,0);
    labelSumInterest.textContent = `${interst}€`;
};


//createUser names for accounts

const createUserName = function(accs){
   
  accs.forEach((acc) => {
     //we want to take the first letter from the account name
//convert it to lower case then split to take fl then join the string
//here just we create a new property user name then equal it to the owner then make the string by map

acc.username = acc.owner
 .toLowerCase()
 .split(' ')
 .map(name => name[0])
 .join('')
  })
}

createUserName(accounts);


const UpdateApi = function(acc){
      //call display movments
      displayMovments(acc.movements);

      //call the displayBalance
      displayBalance(acc);
  
      //call the displaysummary
      displaySummary(currentAccount);
  
      }




let currentAccount ;
btnLogin.addEventListener('click', function(e){
  e.preventDefault();

    currentAccount = accounts.find((acc) => acc.username === inputLoginUsername.value);
     // welcome message    
    if(currentAccount?.pin === Number(inputLoginPin.value)){
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split('')[0]}`
    //show our app
    containerApp.style.opacity = 100;

    inputLoginUsername.value =" ";
    inputLoginPin.value =" ";
    inputLoginPin.blur();

    UpdateApi(currentAccount);

    }

})

//transfer money operation 
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const trasferTo = accounts.find((acc) => acc.username === inputTransferTo.value);

  inputTransferTo.value = inputTransferAmount.value = ' ';

  if(amount > 0 && currentAccount.balance >=amount  && trasferTo.username !== currentAccount ){
   // we can push to recive and take from the another
   currentAccount.movements.push(-amount);
   trasferTo.movements.push(amount);

   //change the api itself 
   UpdateApi(currentAccount);
    
  }
})

//take loan 

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
        const amount = Number(inputLoanAmount.value);

        if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1 )){
          currentAccount.movements.push(amount);

          UpdateApi(currentAccount);
        }
        inputLoanAmount.value = '';
})


//close method 
btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)){
     
    const index = accounts.findIndex((acc) => acc.username === currentAccount.username);
    
    //delete account
    accounts.splice(index, 1) //take the index and number of elemnts 
    //hide Ui
    containerApp.style.opacity = 100 ;
  }

  inputCloseUsername.value = inputClosePin.value = " ";
})


let sorted = false;
btnSort.addEventListener('click',(e) => {
  e.preventDefault();

  displayMovments(currentAccount.movements, !sorted)
  sorted = !sorted;
})


// call the movement as an array by array from then query selctor all
//when you press on the balance label
labelBalance.addEventListener('click', () => {
  const dataMovs = Array.from(document.querySelectorAll('.movements__value'), (el) => Number(el.textContent.replace('€', '') )
   );
   console.log(dataMovs);
});


