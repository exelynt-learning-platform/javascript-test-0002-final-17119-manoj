let n = 5;

for (let i = n; i >= 1; i--) {
    
    // print spaces
    for (let s = 0; s < n - i; s++) {
        process.stdout.write(" ");
    }

    let num = 1;

    for (let j = 1; j <= i; j++) {
        process.stdout.write(num + " ");
        num = num * (i - j) / j;
    }

    console.log();
}
