const getMultiples = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(`${i}/3: fizz`)
        }
        else if (i % 5 == 0) {
            console.log(`${i}/5: buzz`)
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i}/3: fizzbuzz and ${i}/5: fizzbuzz`)
        }
    }
}
getMultiples()

//****************************** OUTPUT ***********************
// HP@DESKTOP-TPJC62M MINGW64 ~/Backend-Classes/Task-2 (master) 
// $ node index.js
// 3/3: fizz
// 5/5: buzz
// 6/3: fizz
// 9/3: fizz
// 10/5: buzz
// 12/3: fizz
// 15/3: fizz
// 15/5: buzz
// 15/3: fizzbuzz and 15/5: fizzbuzz
// 18/3: fizz
// 20/5: buzz
// 21/3: fizz
// 24/3: fizz
// 25/5: buzz
// 27/3: fizz
// 30/3: fizz
// 30/5: buzz
// 30/3: fizzbuzz and 30/5: fizzbuzz
// 33/3: fizz
// 35/5: buzz
// 36/3: fizz
// 39/3: fizz
// 40/5: buzz
// 42/3: fizz
// 45/3: fizz
// 45/5: buzz
// 45/3: fizzbuzz and 45/5: fizzbuzz
// 48/3: fizz
// 50/5: buzz
// 51/3: fizz
// 54/3: fizz
// 55/5: buzz
// 57/3: fizz
// 60/3: fizz
// 60/5: buzz
// 60/3: fizzbuzz and 60/5: fizzbuzz
// 63/3: fizz
// 65/5: buzz
// 66/3: fizz
// 69/3: fizz
// 70/5: buzz
// 72/3: fizz
// 75/3: fizz
// 75/5: buzz
// 75/3: fizzbuzz and 75/5: fizzbuzz
// 78/3: fizz
// 80/5: buzz
// 81/3: fizz
// 84/3: fizz
// 85/5: buzz
// 87/3: fizz
// 90/3: fizz
// 90/5: buzz
// 90/3: fizzbuzz and 90/5: fizzbuzz
// 93/3: fizz
// 95/5: buzz
// 96/3: fizz
// 99/3: fizz
// 100/5: buzz