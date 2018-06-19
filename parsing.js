module.exports = (obj) => {
    
    obj.myMap = new Map();     

    let parsingStr = (str, temp) => {

        for (let i = 0; i < str.length; i++) {
            let degree = 0;
            let sign = -1;

            if (arr = str[i].match(/^[+-]([0-9]+(\.[0-9]+)?\*)?[a-z](\^[0-9]{1})?$/i)) { // check for the existance of a variable     
                if (arr = str[i].match(/\^[0-9]$/)) {  // check degree
                    degree = +arr[0][1];
                } else {     
                    degree = 1;  // if no degree write zero(0) degree
                }

                obj.myMap.has(degree) === false ? obj.myMap.set(degree, []) : 0;

                if (arr = str[i].match(/^[+-][0-9]+(\.[0-9]+)?\*/)) {  
                    arr = +arr[0].slice(0, arr[0].length - 1);  // write coefficient

                } else if (arr = str[i].match(/^[+-][a-z]/i)) {  
                    arr = +(arr[0][0] + '1');  // if dont have coefficient write coef = 1
                }

                temp === false ?  obj.myMap.get(degree).push(arr * sign) : obj.myMap.get(degree).push(arr); // if thi is rightSide sing * (-1)

            } else  if (arr = str[i].match(/^[+-][0-9]+(\.[0-9]+)?$/)) {   // only digit 
                arr = +arr[0];
                degree = 0;
                obj.myMap.has(degree) === false ? obj.myMap.set(degree, []) : 0;
                temp === false ?  obj.myMap.get(degree).push(arr * sign) : obj.myMap.get(degree).push(arr);
            } else {
                console.log(str)
                throw new Error("Sorry! Not valid expression!");
            }  
        } 
    }
    
parsingStr(obj.leftSide, true);
obj.state === true ? (check =  parsingStr(obj.rightSide, false)) : 0; // have we rightSide (stete = true/false)
   
};