function reverseList(str) {
    var listOfChar = str.split("");
    var reversString = listOfChar.reverse().join("");
    return reversString;
}

function pallindromeString(str) {
    var reverse = reverseList(str);
    return str === reverse;
}

function convertToStr(date) {
    var datestr = { day: "", month: "", year: "" };
    if (date.day < 10) {
        datestr.day = "0" + date.day;
    } else {
        datestr.day = String(date.day);
    }

    if (date.month < 10) {
        datestr.month = "0" + date.month;
    } else {
        datestr.month = String(date.month);
    }
    datestr.year = String(date.year);
    return datestr;
}

function getAllDateFormat(date) {
    var dateStr = convertToStr(date);
    debugger;
    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;

    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPallindromeForAllDares(date) {
    var listOfPallindrome = getAllDateFormat(date);
    var isPallindome = 0;

    for (i = 0; i < listOfPallindrome.length; i++) {
        if (pallindromeString(listOfPallindrome[i])) {
            isPallindome = true;
            break;
        }
    }
    return isPallindome;
}

var date = {
    day: 22,
    month: 2,
    year: 2022,
};
console.log(checkPallindromeForAllDares(date));
