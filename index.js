const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0, 2)
}
const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(2, 4)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (num) => function(fairMulitplier) {
    return num * fairMulitplier
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);




function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction((driverArray))
} 


