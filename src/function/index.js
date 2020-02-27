export function getToday() {

    let today = new Date(); // get todays timestamp
    let dd = String(today.getDate()).padStart(2, '0'); // get day
    let mm = String(today.getMonth() + 1).padStart(2, '0'); // get month
    let yyyy = today.getFullYear(); // // get year

    today = yyyy + "-" + mm + "-" + dd  ; // join vars together to create todays timestamp

    return today;
};

export function reverseString(str) {

    let splitStr = str.split(""); // return array
    let reverseStr = splitStr.reverse(); // reverse order of array
    let joinStr = reverseStr.join(""); // join array back together in a reverse string ;)

    return joinStr;
}

export function addDays(date, days) {
    let newDate = date.setDate(date.getDate() + days);
    return new Date(newDate);
}