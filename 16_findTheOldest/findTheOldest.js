const findTheOldest = function(arrayOfObjects)
{

    let oldestAge = 0;
    let oldestName = "";

    for (let i = 0; i < arrayOfObjects.length; i++)
    {


        let tempAge = 0;

        if ("yearOfDeath" in arrayOfObjects[i])
        {

            if (arrayOfObjects[i].yearOfDeath !== undefined)
            {
                tempAge = Number(arrayOfObjects[i].yearOfDeath)
                            - Number(arrayOfObjects[i].yearOfBirth);
            }

        }
        else
        {
            tempAge = 2025
                        - Number(arrayOfObjects[i].yearOfBirth);
        }

        if (tempAge > oldestAge)
        {
            oldestAge = tempAge;
            oldestName = arrayOfObjects[i].name;
        }

    }

    let returnedObject = 
    {

        age: oldestAge,
        name: oldestName,

    }

    return returnedObject;

};

// Do not edit below this line
module.exports = findTheOldest;
