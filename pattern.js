const ROWS = 5; // number of rows in pattern

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

for (let i = ROWS - 1; i >= 0; i--) {

    let row = "";

    // spaces
    for (let spaceCount = 0; spaceCount < ROWS - i - 1; spaceCount++) {
        row += " ";
    }

    // numbers
    for (let j = 0; j <= i; j++) {
        row += combination(i, j) + " ";
    }

    console.log(row.trim());
}
