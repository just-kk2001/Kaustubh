function factorial(num) {
    
    if (num < 0) {
        console.log("Factorial is not defined for negative numbers");
    }
    
    else if (num === 0) {
        console.log("1") ;
    }
    
    else {
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log("Factorial of no",fact);
         
    }
}
const fac=new factorial(12)