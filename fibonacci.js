function generateFibonacciSequence(n) {
    let sequence = [];
    if (n === 1) {
        sequence = [0];
    } else if (n === 2) {
        sequence = [0, 1];
    } else {
        sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }
    return sequence;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacciSequence(numberOfTerms);
console.log("Fibonacci Sequence:", fibonacciSequence);
