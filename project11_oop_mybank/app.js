class bankAccount {
    balance;
    accountNumber;
    constructor(accountNumber, initialBalance = 100000) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient Funds");
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
const account = new bankAccount("Hammad Nadeem");
console.log(`Account name: ${account.getAccountNumber()} Your balance was: ${account.getBalance()}`);
account.deposit(100000);
console.log(`Account name: ${account.getAccountNumber()} Deposit Amount: 100000`);
console.log(`Account name: ${account.getAccountNumber()} New Balance: ${account.getBalance()}`);
account.withdraw(50000);
console.log(`Account name: ${account.getAccountNumber()} Withdrawn Amount: 50000`);
console.log(`Account name: ${account.getAccountNumber()} New balance: ${account.getBalance()}`);
export {};
