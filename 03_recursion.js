const countdown = i => {
    console.log(i);
    if (i <= 0) {
        return
    }
    countdown(--i);
}


const factorial = x => x === 1 ? 1 : x * factorial(--x);

console.log(factorial(5))

