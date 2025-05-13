function removeNum(arrayArg, num)
{

    if (num !== null)
    {

        let repeat = false;

        for (let i = 0; i < arrayArg.length; i++)
        {

            if (arrayArg[i] === num)
            {
                arrayArg.splice(i, 1);
                repeat = true
            }

            if (repeat === true)
            {
                i--;
                repeat = false;
            }

        }

    }

    return arrayArg;

}

const removeFromArray = function(arrayArg, num1 = null, 
                                            num2 = null,
                                            num3 = null,
                                            num4 = null)
{

    //console.log("*******************");
    //console.log(`arrayArg: ${arrayArg}`);
    //console.log(`num1: ${num1}`);
    //console.log(`num2: ${num2}`);
    //console.log(`num3: ${num3}`);
    //console.log(`num4: ${num4}`);
    //console.log("*******************");

    arrayArg = removeNum(arrayArg, num1);

    //console.log("*******************");
    //console.log(`arrayArg: ${arrayArg}`);
    //console.log(`num1: ${num1}`);
    //console.log(`num2: ${num2}`);
    //console.log(`num3: ${num3}`);
    //console.log(`num4: ${num4}`);
    //console.log("*******************");

    arrayArg = removeNum(arrayArg, num2);

    //console.log("*******************");
    //console.log(`arrayArg: ${arrayArg}`);
    //console.log(`num1: ${num1}`);
    //console.log(`num2: ${num2}`);
    //console.log(`num3: ${num3}`);
    //console.log(`num4: ${num4}`);
    //console.log("*******************");

    arrayArg = removeNum(arrayArg, num3);

    //console.log("*******************");
    //console.log(`arrayArg: ${arrayArg}`);
    //console.log(`num1: ${num1}`);
    //console.log(`num2: ${num2}`);
    //console.log(`num3: ${num3}`);
    //console.log(`num4: ${num4}`);
    //console.log("*******************");

    arrayArg = removeNum(arrayArg, num4);

    //console.log("*******************");
    //console.log(`arrayArg: ${arrayArg}`);
    //console.log(`num1: ${num1}`);
    //console.log(`num2: ${num2}`);
    //console.log(`num3: ${num3}`);
    //console.log(`num4: ${num4}`);
    //console.log("*******************");

    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //console.log("               END         ");
    //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

    return arrayArg;

};

// Do not edit below this line
module.exports = removeFromArray;
