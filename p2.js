
//Write a function getDayType that takes a day name and returns:

// Input day	Returns
// Friday, Saturday	"Weekend"
// Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
// anything else	"Invalid Day"






function getDayType(day) {
    
    day = day.toLowerCase();

    
    switch (day) {
        case 'friday':
        case 'saturday':
            return "Weekend";
        case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return "Working Day";
        default:
            return "Invalid Day";
    }
}


// console.log(getDayType("Friday")); // "Weekend"
// console.log(getDayType("friday")); // "Weekend"
// console.log(getDayType("MONDAY")); // "Working Day"
// console.log(getDayType("Bandarban"));    // "Invalid Day"
// console.log(getDayType("Wednesday")); // "Working Day"
// console.log(getDayType("Funday")); // "Invalid Day"     