const accountId = 456321;
let accountEmail = "Prateek@gmail.com";
var accountPassword = "4589621";
accountCity = "Jaipur";
let accountState;


// accountId = 45687125; not allowed

accountCity = "Bengaluru";
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Prefer not use var 
because of issue in block scope and functional scope
*/ 
// in javascript if only declare the variable and not assign any value then it show undefined