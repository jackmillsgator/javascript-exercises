const sumAll = function(num1, num2)
{

    let sum = 0;
    let numLarger = 0;
    let numSmaller = 0;

    if (    (num1 < 0) ||
            (num2 < 0) ||
            (Number.isInteger(num1) === false) ||
            (Number.isInteger(num2) === false)
       )
    {
        return "ERROR";
    }

    if (num1 > num2)
    {
        numLarger = num1;
        numSmaller = num2;
    }
    else
    {
        numLarger = num2;
        numSmaller = num1;
    }

    for (let i = numSmaller; i <= numLarger; i++)
    {
        sum = sum + i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
