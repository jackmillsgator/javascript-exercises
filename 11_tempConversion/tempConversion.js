const convertToCelsius = function(num)
{

    let numCels = 0;
    numCels = (num - 32) * (5 / 9);

    if (Number.isInteger(numCels) === false)
    {
        numCels = numCels.toFixed(1);
        numCels = Number(numCels);
    }

    return numCels;

};

const convertToFahrenheit = function(num)
{

    let numFahr = 0;
    numFahr = num * (9 / 5) + 32;

    if (Number.isInteger(numFahr) === false)
    {
        numFahr = numFahr.toFixed(1);
        numFahr = Number(numFahr);
    }

    return numFahr;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
