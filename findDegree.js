module.exports = (obj) => {

    if (obj.maxDegree === 0) {
        throw new Error("Polinomial degree: 0\nThe solution is ANY real number or NO one.");

    } else if (obj.maxDegree >= 3) {
        throw new Error(`Polinomial degree: ${obj.maxDegree}\nThe polynomial degree is stricly greater than 2, I can't solve.`);

    } else if (obj.maxDegree === 1 || obj.maxDegree === 2) {
        console.log(`Polinomial degree: ${obj.maxDegree}`);

    } else {
        throw new Error(`Polinomial degree: ${obj.maxDegree}\nOops, some error. I don't know :)`);
    }
        
    /* Delete all 0 values in the Map */
    for (let val of obj.myMap) {
        if(val[1] === 0) {
            obj.myMap.delete(val[0]);
        }
    }
}; 