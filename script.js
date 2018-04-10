module.exports = {
  difference: function(num1, num2){
    return num1 - num2
  },
  isEqual: function(a, b){
    if(typeof(a) === typeof(b)) {
      return a === b;
    } else {
      return false;
    }
  },
  isEven: function(number){
    return number % 2 === 0
  },
  isDivisible: function(a, b){
    return a % b === 0;
  },
  discountPercentage: function(originalAmount, discount){
    if (discount > 100 || discount < 0) {
      return "please enter a number between 0 and 100"
    } else {
     return originalAmount * (discount / 100);
    }
  },
  isVowel: function(string){
    var vowels = "aeiou".split("");
    return vowels.indexOf(string) > -1;
  },
  celsiusToFahrenheit: function(ctemp){
    return ctemp * 1.8 + 32;
  },
  biggestOfThree: function(num1, num2, num3){
    return Math.max(num1, num2, num3)
  },
  // Bonus
  federalIncomeTaxCalculator: function(){

  }
};
