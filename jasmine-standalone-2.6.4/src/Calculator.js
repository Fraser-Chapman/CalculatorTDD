function Calculator(){

}

Calculator.prototype = {
    add: function(number1, number2){
        return number1 + number2;
    },
    subtract: function(number1, number2){
        return number1 - number2;
    },
    divide: function(number1, number2){
        return number1 / number2;
    },
    multiply: function(number1, number2){
        return number1 * number2;
    },
    toThePowerOf: function(number1, number2){
        return number1 ** number2;
    },
    findSquareRootOf: function(number1){
        for(i = 1; i < number1; i++){
            if (i * i == number1){
                return i;
            }
            
        }
    }
}