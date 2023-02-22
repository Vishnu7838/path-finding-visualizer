function startClock() {
    var startTime = new Date();
    return startTime;
}

function stopClock(startTime) {
    var elapsedTime = new Date() - startTime;
    return elapsedTime / 1000 + "ms";
}