const repeatString = function(string, num)
{

    if (num >= 0)
    {

        let outputString = "";

        for (let i = 0; i < num; i++)
        {
            outputString = outputString + String(string);
        }

        return outputString;

    }
    else
    {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = repeatString;
