var assert = require("assert");

class BankAccount
{
    constructor(amount)
    {
        this.balance = amount;
    }

    debit( amt )
    {
        if (amt <= this.balance){
            this.balance -= amt;
            return this.balance;
        }  else {
            return this.balance;
        }
    }

    credit( amt )
    {
        this.balance += amt;

        return this.balance;
    }

    queryBalance()
    {
        return this.balance;
    }
}


describe('Is object constructed properly', function() {
    it('Balance should be same as init value', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;

        // act...
        var actualResult = cut.queryBalance();

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
  });

describe('Is object debited properly', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 20;
        var debitAmount = 30;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object credited properly', function() {
    it('balance shoule be increased', function() {
        //arrange
        var cut = new BankAccount(50);
        var expectedResult = 100;
        var creditAmount = 50;

        //act
        var actualResult = cut.credit(creditAmount);

        //assert
        assert.strictEqual(actualResult, expectedResult, "Credit check fails");
        assert.strictEqual(cut.queryBalance(), expectedResult, "Query Balance fails");

    });
});

describe('Is object going overdrawn prevented', function() {
    it('overdraft should be prevented', function () {
        //arrange
        var cut = new BankAccount(50);
        var expectedResult = 50;
        var debitAmount = 60;

        //act
        var actualResult = cut.debit(debitAmount);

        //assert
        assert.strictEqual(cut.queryBalance(), expectedResult, "Overdraft Happened");
    });
})


/*describe('Is object credited properly', function() {
    it('Balance should be increased', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 80;
        var creditAmount = 30;

        // act...
        var actualResult = cut.credit(creditAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult, "credit() failed");
        assert.strictEqual(cut.queryBalance(), expectedResult+1, "queryBalance() failed");
    });
});*/

