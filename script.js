// 1. PRINT ALL NUMBERS BETWEEN -10 AND 19


console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19")

for (var i = -10; i <= 19; i++) {
    console.log(i);
}


// 2. PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40


console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40")

for (var i = 10; i <= 40; i+= 2) {
    console.log(i);
}


// 3. PRINT ALL EVEN NUMBERS BETWEEN 300 AND 333


console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333")

for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// 4. PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 2 AND 50


console.log("PRINT ALL NUMBER DIVISIBLE BY 5 AND 3 BETWEEN 2 AND 50")

for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
    }
}