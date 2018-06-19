module.exports = (obj) => {

    let str = obj.str;
    let res = str.match(/[a-z]/ig);
    let splitEqual;
    let arr;

    if (res === null)
        throw new Error("Not valid expression! You do not have any variable.");
    else
        obj.char = res[0];
    
    for (let i = 0; i < res.length; i++)
        if (res[i].toLowerCase() != obj.char.toLowerCase())
            throw new Error("Not valid expression! To many diff variable.");
  
    str = str.replace( /[\+]+/g, "+" );
    str = str.replace( /(\-)+/g, "-" );
    str = str.replace( /(\+\-)+/g, "-" );
    str = str.replace( /(\-\+)+/g, "-" );
    str = str.replace( /(=)+/g, "=" );

    if (str.match(/=/g).length != 1)
        throw new Error("Not valid expression!");

    if (arr = str.match(/(=[+|-]?0)$/)) {
        str = str.replace( /(=0)/g, "=" );
        obj.state = false;
    }

    splitEqual = str.split('='); 

    /* add spliter " " and replace sign in left expresiion on opposite (+ = -)*/
    leftSide = splitEqual[0];
    rightSide = splitEqual[1];
    
    (leftSide[0] === '-' || leftSide[0] === '+') ? 0 : leftSide = "+" + leftSide;
    (rightSide[0] === '-' || rightSide[0] === '+') ? 0 : rightSide = "+" + rightSide;

    leftSide = leftSide.replace(/(\+)/g, " +");
    leftSide = leftSide.replace(/(\-)/g, " -");
    rightSide = rightSide.replace(/(\+)/g, " +");
    rightSide = rightSide.replace(/(\-)/g, " -");

    leftSide = leftSide.trim();
    rightSide = rightSide.trim();
    console.log(leftSide)

    leftSide = leftSide.split(" ");
    rightSide = rightSide.split(" ");
    obj.leftSide = leftSide;
    obj.rightSide = rightSide;
 
}
