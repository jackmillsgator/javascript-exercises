const add = function(argA, argB)
{

    let answerNum = 0;

    answerNum = argA + argB;

    return answerNum;
	
};

const subtract = function(argA, argB)
{

    let answerNum = 0;

    answerNum = argA - argB;

    return answerNum;
	
};

const sum = function(argArray)
{

    let answerNum = 0;

    for (let i = 0; i < argArray.length; i++)
    {
        answerNum = answerNum + argArray[i];
    }

    return answerNum;
	
};

const multiply = function(argArray)
{

    let answerNum = 1;

    for (let i = 0; i < argArray.length; i++)
    {
        answerNum = answerNum * argArray[i];
    }

    return answerNum;

};

const power = function(argA, argB)
{

    let answerNum = 1;

    for (let i = 0; i < argB; i++)
    {
        answerNum = answerNum * argA;
    }

    return answerNum;
	
};

const factorial = function(argA)
{

    let answerNum = 1;

    for (let i = 2; i <= argA; i++)
    {
        answerNum = answerNum * i;
    }

    return answerNum;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
