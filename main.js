import chalk from "chalk";
;
// Bank Account Class 
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ;
    // Debit Money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(chalk.bgCyanBright(`\n\tWithdrawal Of $${amount} Successful. Remaining Balance: $${this.balance} 🚀💰\n`));
        }
        else {
            console.log(chalk.bgRed.bold("\n\tInsufficient Balance ❌\n"));
        }
        ;
    }
    ;
    // Credit Money 
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // $1 fee charged if more than $100 is deposited.
        }
        this.balance += amount;
        console.log(chalk.bgGreenBright(`\n\tDeposit Of $${amount} Successful. Remaining Balance: $${this.balance} 💰\n`));
    }
    ;
    // Check Balance 
    checkBalance() {
        console.log(chalk.bgBlackBright(`\n\t Your Current Balance Is: $${this.balance} 💰\n`));
    }
    ;
}
;
// Customer Class 
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
}
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
    this.account = account;
}
// Create Bank Accounts
const accounts = [
    new BankAccount(10001, 1000),
    new BankAccount(10002, 1000),
    new BankAccount(10003, 3000),
];
// Create Customers
const ;
