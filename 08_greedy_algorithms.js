const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az']),
}


const findBestStations = (stations, statesNeedToCover) => {
    let statesNeeded = new Set([...statesNeedToCover]);
    const finalStations = new Set([]);
    while (statesNeeded.size) {
        let bestStation = null;
        let statesCovered = new Set([]);
        for (const station in stations) {
            let states = stations[station];
            let covered = new Set([...statesNeeded].filter((state) => states.has(state)));
            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }
        statesNeeded = new Set([...statesNeeded].filter((state) => !statesCovered.has(state)))
        finalStations.add(bestStation);
    }
    return finalStations;
}

console.log(findBestStations(stations, statesNeeded));