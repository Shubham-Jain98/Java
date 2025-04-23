const AccountID = 14453
let Accountemail = "jshubhamm2004@gmail.com"
var AccountPass = "12345"
AccountCity = "Jaipur"
let AccounteState;
// AccountID = 2 // not allowed
Accountemail = "lc@lc.com"
AccountPass = "69699"
AccountCity = "Bangalore"

/*
Prefer not using var 
Due to block scope and functional scope
*/
console.log(AccountID);
console.table([AccountID, AccountPass,Accountemail, AccountCity, AccounteState])