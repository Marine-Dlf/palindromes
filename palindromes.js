    
    // Is the date valid ?
function isValidDate(stringDate) {
    let separateDate = stringDate.split("/")                          // --> String array
    console.log(separateDate)
    let arrayDateNumber = []
    for (let i = 0; i < separateDate.length; i++) {
        arrayDateNumber.push(Number.parseInt(separateDate[i]))        // --> Number array
        console.log(arrayDateNumber)
    }

    if (arrayDateNumber[2] < 1000 || arrayDateNumber[2] > 9999) {     // Year check
        return false
    }

    if (arrayDateNumber[1] < 1 || arrayDateNumber[1] > 12) {          // Month check
        return false
    }

    if (!maxDaysInMonth(arrayDateNumber[1], arrayDateNumber[0], arrayDateNumber[2])) {          // Day check
        return false
    }

    return true                                                       // Return true if everything is ok
}

console.log(isValidDate("29/02/1988"))


    // Check Max Days In Month
function maxDaysInMonth(mois, jour, annee) {
    if ((mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois === 10 || mois === 12) && (jour > 0 && jour < 32)) {
        return true
    }
    if ((mois === 4 || mois === 6 || mois === 9 || mois === 11) && (jour > 0 && jour < 31)) {
        return true
    }
    if ((mois === 2) && (jour > 0 && jour < 29)) {
        return true
    }
    if ((mois === 2) && (jour === 29) && ((annee % 4 === 0 && annee % 100 > 0) || (annee % 400 === 0))) {       // Leap year management
        return true
    }
    return false
}


function isPalindrome(stringDate) {
    let string = stringDate.split('/').join('')         // Remove '/'
    let stringArray = string.split('')                  // Split a string (into an array)
    let numberArray = []
    for (let i = 0; i < stringArray.length; i++) {
        let number = Number.parseInt(stringArray[i])    // Transforming each string in the stringArray into numbers
        numberArray.push(number)
    }

    for (let i = 0; i < numberArray.length; i++) {                              // At each iteration:
        if (numberArray[i] !== numberArray[numberArray.length - 1 - i]) {       // Check if an element (of the array) is different from the symmetric element
            return false                                                        // If it's different, it's not a palindrome => return false
        }
    }

    return true                                         // If it's a palindrome return true
}

let palindrome = isPalindrome("11/02/2011")
console.log(palindrome)




    // STEP 3 (en cours)


// "Keep" 0 when the month or day are less than 10
function dontForgetZeroBeforeNumber(month, day) {       
    let stringMonth = month.toString()
    let stringDay = day.toString()

    if (month < 10) {
        stringMonth = "0" + stringMonth
    }
    if (day < 10) {
        stringDay = "0" + stringDay
    }
    return {stringMonth, stringDay}
}

// Gets dates in the right format
let date = new Date()
let month = date.getMonth() + 1
let year = date.getFullYear()
let day = date.getDate()

let {stringMonth, stringDay} = dontForgetZeroBeforeNumber(month, day)

let today = `${stringDay}/${stringMonth}/${year}`
console.log(today)


function getNextDates(datesNumber) {
    let arrayFutureDates = []

    for (let i = 0; i < datesNumber; i++) {
        date.setDate(date.getDate() + 1)
        let updateMonth = date.getMonth() + 1
        let updateYear = date.getFullYear()
        let updateDay = date.getDate()

        let {stringMonth, stringDay} = dontForgetZeroBeforeNumber(updateMonth, updateDay)
        let updateDate = `${stringDay}/${stringMonth}/${updateYear}`

        arrayFutureDates.push(updateDate)
    }
    return arrayFutureDates
}

let prochainesDates = getNextDates(10000)


// Get palindromes
function getNextPalindromes(x) {
    let arrayPalindromes = []
    for (let i = 0; i < x.length; i++) {
        if (isPalindrome(x[i])) {
            arrayPalindromes.push(x[i])
        }
    }
    return arrayPalindromes
}

console.log(getNextPalindromes(prochainesDates))