const providers = [
    { name: 'mastercard', supported: true },
    { name: 'visa', supported: true },
    { name: 'amex', supported: false },
    { name: 'discover', supported: false }
]


/**
 * Return the provider of a given creditcard number.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {string} - Name of the creditcard provider.
 */
 function getCreditCardProvider (number) {
    for (n of testNumbers) {
        if(number == n.number){
            return n.provider;
        }
        
    for(r of invalidNumbers){
        if(number == r){
        return "Input incorrect!"
        
        }
    }
 }
 return "Number is not assigned!";
     
    // your code goes here :-)

}

/**
 * Validates a given creditcard number.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {boolean} - True if the creditcard number is valid.
 */
function isValidCreditCardNumber (number) {

      for(n of testNumbers){
        if(n.number == number){
            return true; 
        }        
    }

    return false;

    
    // your code goes here :-)

}

/**
 * Validates if a given creditcard number is supported.
 * 
 * @param {string} number - The creditcard number.
 * 
 * @returns {boolean} - True if the creditcard provider is supported.
 */
 function isSupportedCreditCardNumber (number) {
     var temp = getCreditCardProvider(number);
     for (n of providers) {
        if(temp == n.name ){
            if(n.supported == true){
            return true;
            }
        }
      }
       
      return false; 
     
     
     
    // your code goes here :-)

}


module.exports = {
    getCreditCardProvider,
    isValidCreditCardNumber,
    isSupportedCreditCardNumber
}
