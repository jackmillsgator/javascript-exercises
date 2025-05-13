const reverseString = function(input)
{

    let stringInput = String(input);
    let stringInputReversed = ""

    for (let i = stringInput.length - 1; i >= 0; i--)
    {

        stringInputReversed = 
            stringInputReversed + stringInput[i];

    }

    return stringInputReversed;

};

// Do not edit below this line
module.exports = reverseString;
