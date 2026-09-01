// Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

// Steps:

// runsNeeded = target - scored

// If runsNeeded is 0 or less, the match is already won → return "Won"

// Otherwise, if ballsLeft is 0 or less, there is no ball left to score → return "Lost"

// Otherwise, work out the required run rate:

// requiredRate = (runsNeeded / ballsLeft) * 6
// Pick the verdict from the rate:

// Required rate	Verdict
// 6 or less	"Comfortable"
// more than 6, up to 12	"Tough"
// more than 12	"Almost Impossible"
// Return this exact sentence:

// Need <runsNeeded> runs in <ballsLeft> balls | <verdict></verdict>


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

// console.log(getChaseVerdict(200, 200, 12)); // "Won"
// console.log(getChaseVerdict(200, 190, 0)); // "Lost"
// console.log(getChaseVerdict(100, 90, 12)); // "Need 10 runs in 12 balls | Comfortable"            
// console.log(getChaseVerdict(100, 80, 12)); // "Need 20 runs in 12 balls | Tough"
// console.log(getChaseVerdict(100, 70, 12)); // "Need 30 runs in 12 balls | Almost Impossible"
// console.log(getChaseVerdict(150, 149, 1)); // "Need 1 runs in 1 balls | Comfortable"
