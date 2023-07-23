
function distanceFromHqInBlocks(location) {
    const scuberLocation = 42;
    if (location >= scuberLocation) {
        return location - scuberLocation;
    } else {
        return scuberLocation - location;
    }
}
function distanceFromHqInFeet(location) {
    const scuberLocation = 42;
    if (location >= scuberLocation) {
        return (location - scuberLocation) * 264;
    } else {
        return (scuberLocation - location) * 264;
    }
}

function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }
}


function calculatesFarePrice(start, destination) {
    if (destination >= start) {
        const feets = (destination - start) * 264;
        if (feets <= 400) {
            return 0;
        } else if (feets > 400 && feets <= 2000) {
            return 2.56;
        } else if (feets > 2000 && feets <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }
    else {
        const feets = (start - destination) * 264;
        if (feets <= 400) {
            return 0;
        } else if (feets > 400 && feets <= 2000) {
            return 2.56;
        } else if (feets > 2000 && feets <= 2500) {
            return 25;
        } else {
            return "cannot travel that far";
        }
    }
}