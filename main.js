#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Bank Account Class 
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ;
    // Debit Money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(chalk.bgMagentaBright(`\n\tWithdrawal Of $${amount} Successful. Remaining Balance: $${this.balance} 🚀💰\n`));
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
        console.log(chalk.bgBlueBright.bold(`\n\tDeposit Of $${amount} Successful. Remaining Balance: $${this.balance} 💰\n`));
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
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
    ;
}
;
// Create Bank Accounts
const accounts = [
    new BankAccount(10001, 1000),
    new BankAccount(10002, 2000),
    new BankAccount(10003, 3000),
];
// Create Customers
const Customes = [
    new Customer("Aqsa", "Shaikh", "Female", 18, 1234567890, accounts[0]),
    new Customer("Bilal", "Shaikh", "Male", 20, 9876543210, accounts[1]),
    new Customer("Hassan", "Shaikh", "Male", 17, 1122334455, accounts[2]),
];
// Function To Interact With Bank Account
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt({
            name: "accountNumber",
            type: "number",
            message: "Enter Your Account Number:"
        });
        const Customer = Customes.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (Customer) {
            console.log(chalk.bgGreenBright.bold.italic(`\n\tWelcome, ${Customer.firstName} ${Customer.lastName}!⚡🎈\n`));
            const ans = await inquirer.prompt([{
                    name: "Select",
                    type: "list",
                    message: "Select An Operation",
                    choices: ["Deposit", "Withdraw", "Check Balance", "Exit"],
                }]);
            switch (ans.Select) {
                case "Deposit":
                    const depositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter The Amount To Deposit:"
                    });
                    Customer.account.deposit(depositAmount.amount);
                    break;
                case "Withdraw":
                    const WithdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter The Amount To Withdraw:"
                    });
                    Customer.account.withdraw(WithdrawAmount.amount);
                    break;
                case "Check Balance":
                    Customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log(chalk.bgRed.bold("\n\tExiting The Application...🤔\n"));
                    console.log(chalk.bgBlue.bold("\n\tThank You For Using Our Bank Services. Have A Great Day!\n"));
                    return;
            }
            ;
        }
        else {
            console.log(chalk.bgRedBright.bold("\n\tInvalid Account Number. Please Try Again!🙁\n"));
        }
        ;
    } while (true);
}
;
service();
