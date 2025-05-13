const leapYears = function(yearArg)
{

    let isLeapYear = false;

    if (yearArg % 4 === 0)
    {

        if (yearArg % 100 === 0)
        {

            if (yearArg % 400 === 0)
            {
                isLeapYear = true;
            }

        }
        else
        {
            isLeapYear = true;
        }

    }

    return isLeapYear;

};

// Do not edit below this line
module.exports = leapYears;
