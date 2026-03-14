const ROWS = 5;

for (let i = ROWS - 1; i >= 0; i--) {

    let line = "";

    // print spaces
    for (let space = 0; space < ROWS - i - 1; space++) {
        line += " ";
    }

    let num = 1;

    for (let j = 0; j <= i; j++) {

        if (j > 0) {
            line += " ";
        }

        line += num;

        num = (num * (i - j)) / (j + 1);
    }

    console.log(line);
}
