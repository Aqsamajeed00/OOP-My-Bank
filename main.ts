import inquirer from "inquirer";
import chalk from "chalk";

// Bank Account interface
interface BankAccount{
    accountNumber: number;
    balance: number;
    withdraw(amount: number): void
    deposit(amount: number): void
    checkBalance(): void      //kuch return nh krta
};

// Bank Account Class 
class BankAccount implements BankAccount{
    accountNumber: number;
    balance: number;

    constructor(accountNumber: number, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    };

// Debit Money
withdraw(amount: number): void {
    if(this.balance >= amount){
        this.balance -= amount;
        console.log(chalk.bgCyanBright(`\n\tWithdrawal Of $${amount} Successful. Remaining Balance: $${this.balance} 🚀💰\n`));
    }
    else {
        console.log(chalk.bgRed.bold("\n\tInsufficient Balance ❌\n"));
    };
};

// Credit Money 
deposit(amount: number): void {
    if(amount > 100){
        amount -= 1;  // $1 fee charged if more than $100 is deposited.
    } this.balance += amount;
    console.log(chalk.bgGreenBright(`\n\tDeposit Of $${amount} Successful. Remaining Balance: $${this.balance} 💰\n`));
};

// Check Balance 
checkBalance(): void {
    console.log(chalk.bgBlackBright(`\n\t Your Current Balance Is: $${this.balance} 💰\n`));
};
};

// Customer Class 
class Customer{
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNumber: number;
    account: BankAccount;

    constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: number, account: BankAccount);
    {
        this.firstName = firstName;
        this.lastName =  lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account
    }
}

// Create Bank Accounts
const accounts: BankAccount[] =[
    new BankAccount (10001, 1000),
    new BankAccount (10002, 1000),
    new BankAccount (10003, 3000),
];

// Create Customers
const 