module.exports = (obj) => { 

    /*DEGREE = 1*/
    if (obj.maxDegree === 1) {

        if (obj.myMap.size === 2) {

            let temp = obj.myMap.get(1);
            let temp2 = obj.myMap.get(0);

            if (temp === 1) {
                return (console.log(`The solution is:\n${-temp2}`));

            } else if (temp === -1) {
                return (console.log(`The solution is:\n${temp2}`));

            } else {
                obj.reducedForm += `${temp}*${obj.char} = ${-temp2}`;
                console.log(`Reduced form: ${obj.reducedForm}`);
                return (console.log(`The solution is:\n${-temp2/temp}`));
            }

        } else if (obj.myMap.size === 1) {
            return (console.log("The solution is:\n0"));
        }
    /*DEGREE = 2*/
    } else if (obj.maxDegree === 2) {
        let D;
        let a, b, c;
        let x1, x2;

        a = obj.myMap.has(2) ? obj.myMap.get(2) : 0;
        b = obj.myMap.has(1) ? obj.myMap.get(1) : 0;
        c = obj.myMap.has(0) ? obj.myMap.get(0) : 0;

        D = (b * b) - (4 * a * c);
        
        if (D > 0) {
            console.log(`Discriminant is strictly positive (${D}), the two solutions are:`);
            x1 = ((-b) - Math.sqrt(D)) / (2 * a);
            x2 = ((-b) + Math.sqrt(D)) / (2 * a);
            return (console.log(`The solution is:\n${x1}\n${x2}`));

        } else if (D === 0) {
            console.log(`Discriminant is null (${D}), the equation has only one solution:`);
            x1 = -b / (2 * a);
            return (console.log(`The solution is:\n${x1}`));

        } else {
            console.log(`Discriminant is strictly negative  (${D}), the two complex solutions are:`);
            x1 = Math.sqrt(-D);
            console.log("The solution is:");
            console.log(`(${-b} + i * ${x1}) / ${2*a}`);
            console.log(`(${-b} - i * ${x1}) / ${2*a}`);
        }
    }
};