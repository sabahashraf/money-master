




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
//error checking
if(totalExpenseAmount > incomeAmount){
    document.getElementById('notify-error').style.display ='block';
    document.getElementById('balance-display').style.display = 'none';
}
//calculating Balance
let balanceAmount = incomeAmount - totalExpenseAmount;
balance.innerText = balanceAmount;

//error handling for income food rent clothes input
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

//second part
function savings(){
    const income = document.getElementById('income');
    let incomeValue = income.value;
    let incomeAmount = parseFloat(income.value);
    const save = document.getElementById('save');
    let saveValue = save.value;
    let saveAmount =parseFloat(save.value);
    if(isNaN(saveAmount) || saveAmount < 0){
        document.getElementById('save-error').style.display = 'block';
        document.getElementById('remaining-display').style.display ='none';
        document.getElementById('saving-display').style.display ='none';
        
    }
    const balance = document.getElementById('balance');
    let balanceValue = balance.innerText;




const savingAmount= document.getElementById('savings');
const remainingAmount = document.getElementById('rest');


savingAmount.innerText = (incomeAmount * saveAmount )/100;
let savingAmountValue =savingAmount.innerText;

//error handling
if(savingAmountValue > balanceValue){
    document.getElementById('notify-error2').style.display ='block';
    document.getElementById('remaining-display').style.display ='none';
    document.getElementById('saving-display').style.display ='none';
}


remainingAmount.innerText = balanceValue- savingAmountValue;



}


