const findLowestCostNode = (costs, processed) => {
    let lowestCost = Infinity;
    let lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

const findLowestCostTable = (graph, costs, parents) => {
    const processed = []
    let node = findLowestCostNode(costs, processed);
    while (node !== null) {
        let cost = costs[node];
        let neighbors = graph[node];
        for (let neighbor of Object.keys(neighbors)) {
            const newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
                parents[neighbor] = node;
            }
        }
        processed.push(node);
        console.log(processed)
        node = findLowestCostNode(costs, processed);
    }
}

const ramaGraph = {
    start: {
        a: 6,
        b: 2
    },
    a: {
        fin: 1
    },
    b: {
        a: 3,
        fin: 5
    },
    fin: {}
}

const ramaCosts = {
    a: 6,
    b: 2,
    fin: Infinity
}

const ramaParents = {
    a: 'start',
    b: 'start',
    fin: null
}

console.log(ramaCosts);
findLowestCostTable(ramaGraph, ramaCosts, ramaParents);
console.log(ramaCosts);

//only 7.1; 7.2 is too obvious, 7.3 is unsuitable for Dijkstra
const taskGraph = {
    start: {
        a: 5,
        d: 2,
    },
    a: {
        c: 4,
        d: 2
    },
    b: {
        a: 8,
        d: 7,
    },
    c: {
        d: 6,
        fin: 3,
    },
    d: {
        fin: 1
    },
    fin: {}
}

const taskCosts = {
    a: 5,
    b: 2,
    c: Infinity,
    d: Infinity,
    fin: Infinity,
}

const taskParents = {
    a: 'start',
    b: 'start',
    c: null,
    d: null,
    fin: null
}

console.log(taskCosts);
findLowestCostTable(taskGraph, taskCosts, taskParents);
console.log(taskCosts);