function timeToWalk(stepsCount, stepsSize, speed) {
    let distance = stepsCount * stepsSize;
    let rests = Math.floor(distance / 500) * 1;
    let hours = distance / 1000 / speed;
    let totalHours = hours + rests / 60;
    let totalMinutes = Math.floor(totalHours * 60);
    let totalSeconds = Math.ceil((totalHours * 3600) % 60);
    console.log(`${String(Math.floor(totalMinutes / 60)).padStart(2, '0')}:${String(totalMinutes % 60).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`);
}


timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);