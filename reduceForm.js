module.exports = (obj) => {

    /*  Sum coefficients */
    for (let val of obj.myMap) {
        let arr = val[1];
        let sum = 0;
            for (let i = 0; i < val[1].length; i++){
                sum += val[1][i];
            }
        obj.myMap.set(val[0], sum);
    }
    /* Find max degree*/
    for (let val of obj.myMap)
        obj.maxDegree = (obj.maxDegree < val[0] && val[1] !== 0) ? val[0] : obj.maxDegree;
 
    let degree =  obj.maxDegree;

    for(;degree !== -1; degree--) {
        for (let val of obj.myMap) {
            let key = val[0];
          
            if (key === degree) {  
                console.log(val)
                if (degree  > 0 && val[1] !== 0) {                       
                    if (val[1] === -1) {
                        if (degree === 1){
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? "-" + obj.char : " - " + obj.char;
                        } else {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? "-" + obj.char + "^" + degree : " - " + obj.char + "^" + degree;
                        }
                        
                    } else if (val[1] === 1) {
                        if (degree === 1) {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? obj.char : " + " + obj.char;
                        } else {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? obj.char + "^" + degree : " + " + obj.char + "^" + degree;
                        }

                    } else if (val[1] < 0) {
                        if (degree === 1) {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? val[1] + "*" + obj.char : " - " + (-val[1]) + "*" + obj.char;
                        } else {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? val[1] + "*" + obj.char + "^" + degree : " - " + (-val[1]) + "*" + obj.char + "^" + degree;                         
                        }
                        
                    } else if (val[1] > 0) {
                        if (degree === 1) {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? val[1] + "*" + obj.char : " + " + val[1] + "*" + obj.char;
                        } else {
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? val[1] + "*" + obj.char + "^" + degree : " + " + val[1] + "*" + obj.char + "^" + degree;                         
                        }

                    } else {
                        throw new Error('Something wrong! Sorry, I dont know what (^-^)');
                    }  

                } else if (degree === 0 && val[1] !== 0) {
                    if (obj.myMap.size > 1) {           
                        if (val[1] > 0) {  
                            obj.reducedForm += (obj.reducedForm[0] === undefined) ? val[1] : " + " + val[1];                           
                        } else if (val[1] < 0) {
                            obj.reducedForm +=  (obj.reducedForm[0] === undefined) ? val[1] : " - " + (-val[1]); 
                        }
                    } else {
                        throw new Error('Oops!The equation dont have any solution:(');
                    }

                } else if (degree >= 0 && val[1] === 0) {
                    obj.reducedForm += (obj.reducedForm[0] === undefined) ? "0" : ""; 
                }
            }
        }
    }   
    obj.reducedForm[0] === undefined ? obj.reducedForm = "0 = 0" : obj.reducedForm += " = 0";
    console.log(`Reduced form: ${obj.reducedForm}`);
}