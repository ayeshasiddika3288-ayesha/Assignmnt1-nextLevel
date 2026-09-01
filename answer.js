//problem-01:

function describeValue(value) {
    const type = typeof value;
    const truthiness = Boolean(value) ? 'truthy' : 'falsy';
    return `${type} | ${truthiness}`;
}

//problem-02:

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

//problem-03:

function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    else if (username.includes(' ')) {
        return "No Space Allowed";
    }
    else if (username.toLowerCase().includes('admin')) {
        return "Reserved Word";
    }
    return "Available";
}

// problem-04:

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare += (distance - 2) * 15; 
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare *= 1.2;
    }

    return fare;
}

// problem-05:

const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    else if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;    

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    }
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}










