const palindromes = function (argString)
{

    let lowerCaseString = argString.toLowerCase();

    let intermediatString1 = lowerCaseString.replaceAll(" ", "");
    let intermediatString2 = intermediatString1.replaceAll(".", "");
    let intermediatString3 = intermediatString2.replaceAll("!", "");
    let intermediatString4 = intermediatString3.replaceAll("?", "");
    let adjustedString = intermediatString4.replaceAll(",", "");

    let argStringArray = adjustedString.split("");
    let argStringArrayReversed = argStringArray.reverse();
    let finalStringReversed = argStringArrayReversed.join("");

    if (adjustedString === finalStringReversed)
    {
        return true;
    }
    else
    {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
