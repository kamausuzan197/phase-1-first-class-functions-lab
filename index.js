// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    //return drivers.slice(0,2); //this is another option
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function (drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
        return (fare * integer);
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction(driverArray);
}