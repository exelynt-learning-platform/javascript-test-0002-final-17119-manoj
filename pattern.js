let n = 5;

for (let i = n; i >= 1; i--) {

    let row = "";

    // spaces
    for (let s = 0; s < n - i; s++) {
        row += " ";
    }

    let num = 1;

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num = num * (i - j) / j;
    }

    console.log(row);
}
