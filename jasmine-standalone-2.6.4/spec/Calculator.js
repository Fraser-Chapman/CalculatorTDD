describe("Calculator", function(){
    let number1;
    let number2;
    let calculator;

    beforeEach(function(){
        calculator = new Calculator();
        number1 = 0;
        number2 = 0;
    });
    it("adds two numbers", function(){
        number1 = 5;
        number2 = 2;

        expect(calculator.add(number1, number2)).toBe(7);

    });
    it("subtracts two numbers", function(){
        number1 = 10;
        number2 = 8;

        expect(calculator.subtract(number1, number2)).toBe(2);
    });
    it("divides two numbers", function(){
        number1 = 50;
        number2 = 5;

        expect(calculator.divide(number1, number2)).toBe(10);
    });
    it("multiplies two numbers", function(){
        number1 = 10;
        number2 = 5;

        expect(calculator.multiply(number1, number2)).toBe(50);
    })
});