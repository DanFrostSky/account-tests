var assert = require("assert");

class BankAccount
{
    constructor(amount)
    {
        this.balance = amount;
    }

    /*debit( amt )
    {
        if (amt > this.balance){
            return this.balance; 
        }  else if (amt <= 20) {
           this.balance -= amt;
           return this.balance;
        } else {
            amt = amt + 1;
            this.balance -= amt;
            return this.balance;
        }
    }*/
    debit( amt )
    {
        if(amt > 20)//don't need the else statements from my code;
            amt++;  //if this statement isn't true it doesn't execute it

        if(this.balance - amt >= 0)
            this.balance -= amt;//so here if would go negative 
                                //doesn't do the amt change as dependent on that
        return this.balance;
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
        var expectedResult = 19;
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
    it('balance should stay the same if debit>balance', function () {
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

describe('Is object applying debit charge', function() {
    it('debit should have +1 surcharge when >20', function() {
        //arrange
        var cut = new BankAccount(50);
        var expectedResult = 19;
        var debitAmount =30

        //act
        var actualResult = cut.debit(debitAmount);

        //assert
        assert.strictEqual(actualResult, expectedResult, "debit fee applied wrong")
        assert.strictEqual(cut.queryBalance(), expectedResult, "end balance wrong");

    });
});


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

