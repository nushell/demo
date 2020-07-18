function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function random(start, end) {
    return getRandomInt(end) + start;
}
