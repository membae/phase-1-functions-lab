function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Assuming Scuber's headquarters is at block 42
    return Math.abs(pickupLocation - hqLocation);
}

// Example usage
const pickupLocation = 50;
const distance = distanceFromHqInBlocks(pickupLocation);
console.log(`The number of blocks from Scuber's headquarters to the pickup location is ${distance}.`);


function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Assuming Scuber's headquarters is at block 42
    return Math.abs(pickupLocation - hqLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

// Example usage
const pickupLocationi = 50;
const distanceInFeet = distanceFromHqInFeet(pickupLocation);
console.log(`The number of feet from Scuber's headquarters to the pickup location is ${distanceInFeet}.`);


function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(end - start);
    return blocksTravelled * feetPerBlock;
}

// Example usage
const startBlock = 34;
const endBlock = 42;
const distances = distanceTravelledInFeet(startBlock, endBlock);
console.log(`The number of feet travelled is ${distance}.`);


function distanceTravelledInFeet(start, end) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(end - start);
    return blocksTravelled * feetPerBlock;
}

function calculatesFarePrice(start, end) {
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400) {
        return 0; // The first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
}

// Example usage
const startBlocks = 34;
const endBlocks = 42;
const fare = calculatesFarePrice(startBlock, endBlock);
console.log(`The fare for the trip is ${fare}.`);
