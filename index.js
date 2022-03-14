const returnFirstTwoDrivers = function (names) {
    const ft = [names[0], names[1]];
    return ft;
}

const returnLastTwoDrivers = function (names) {
    const lt = [names[2], names[3]]
    return lt;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function (fare) {
        return fare * x;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
arr = ['z','x','c','v',];

function selectDifferentDrivers(x,y) {
    return y(x);
}
console.log(selectDifferentDrivers(arr,returnFirstTwoDrivers));