const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj','peggy'],
    alice: ['peggy'],
    claire: ['thom','jonny'],
    anuj: [],
    peggy: [],
    thom: [],
    jonny: []
}

const personIsSeller = (name) => {
    return name.endsWith('m');
}

const mangoSearch = (graph, name) => {
    const deque = [...graph[name]];
    const searched = [];
    while (deque.length) {
        let person = deque.shift();
        if (!searched.includes(person)){
            if (personIsSeller(person)){
                console.log(person + ' is a mango seller!');
                return true;
            }
        }
        deque.push(...graph[person]);
        searched.push(person);
        console.log(deque);
        console.log(searched);
    }
    return false;
}

mangoSearch(graph, "you");