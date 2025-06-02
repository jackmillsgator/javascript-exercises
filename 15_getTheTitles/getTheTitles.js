const getTheTitles = function(arrayArg)
{

    let returnArray = [];

    for (let i = 0; i < arrayArg.length; i++)
    {

        //console.log(`++++++++++++++++++`);
        //console.log(`   ${arrayArg[i].title}`);
        //console.log(`++++++++++++++++++`);

        returnArray.push(arrayArg[i].title);

    }

    return returnArray;

};

// Do not edit below this line
module.exports = getTheTitles;
