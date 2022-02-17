
const save = document.getElementById('save');




const savingAmount= document.getElementById('savings');
const remainingAmount = document.getElementById('rest');
console.log(save);


function balance(){
 

    //Getting income value
    const income = document.getElementById('income');
    let incomeValue = income.value;
    let incomeAmount = parseFloat(income.value);
//Getting food value
const food = document .getElementById('food');
let foodValue = food.value;
let foodExpense = parseFloat(food.value);
//Getting rent value
const rent = document.getElementById('rent');
let rentValue = rent.value;
let rentExpense = parseFloat(rent.value);
//getting clothes value
const clothes = document.getElementById('clothes');
let clothesValue = clothes.value;
let clothesExpense = parseFloat(clothes.value);
// expense and balance 
const totalExpense = document.getElementById('total-exp');
const balance = document.getElementById('balance');
 
//calculating Total expenses
let totalExpenseAmount= foodExpense + rentExpense + clothesExpense;
totalExpense.innerText = totalExpenseAmount;
//calculating Balance
let balanceAmount = incomeAmount - totalExpenseAmount;
balance.innerText = balanceAmount;
if( isNaN(incomeAmount) || incomeAmount< 0){
    document.getElementById('income-error').style.display='block';
    totalExpense.innerText='';
    balance.innerText='';
} 
if( isNaN(foodExpense) || foodExpense< 0){
    document.getElementById('food-error').style.display='block';
    totalExpense.innerText='';
    balance.innerText='';
}  
if( isNaN(rentExpense) || rentExpense< 0){
    document.getElementById('rent-error').style.display='block';
    totalExpense.innerText='';
    balance.innerText='';
} 
if( isNaN(clothesExpense) || clothesExpense< 0){
    document.getElementById('clothes-error').style.display='block';
    totalExpense.innerText='';
    balance.innerText='';
} 






}


