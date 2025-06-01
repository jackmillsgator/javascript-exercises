const fibonacci = function(argNumString)
{

    let fibSum = 1;
    let prevNum1 = 1;
    let prevNum2 = 1;

    argNum = Number(argNumString);

    if (argNum < 0)
    {
        return "OOPS";
    }

    if (argNum === 0)
    {
        return 0;
    }

    switch (argNum)
    {

        case 0:

            return 0;
            break;

        case 1:

            return 1;
            break;

        case 2:
            return 1;
            break;

    }

    for (let i = 2; i < argNum; i++)
    {

        fibSum = prevNum1 + prevNum2;

        prevNum1 = prevNum2;
        prevNum2 = fibSum;

    }

    return fibSum;

};

// Do not edit below this line
module.exports = fibonacci;
