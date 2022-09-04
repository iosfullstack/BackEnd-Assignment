const prompt = require(`prompt-sync`)({sigint:true})

let isPrime = true

const getPrimeNumbers = () => {
    const number = parseInt(prompt(`Enter a positive number: `))
    if (number === 1) {
        console.log(`1 is not a Prime Number`)
    } else if (number > 1) {
        for (let i = 2; i < number; i++){
            if (number % i == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log(`${number} is a Prime Number`)
        } else {
            console.log(`${number} is not a Prime Number`)
        }
    }
}

getPrimeNumbers()

// **************** OUTPUT *********************
// HP@DESKTOP-TPJC62M MINGW64 ~/document/BackEnd-Assignment/Assignment-2 (master)
// $ node index.js
// Enter a positive number: 1
// 1 is not a Prime Number
// *********************************************
// HP@DESKTOP-TPJC62M MINGW64 ~/document/BackEnd-Assignment/Assignment-2 (master)
// $ node index.js
// Enter a positive number: 5
// 5 is a Prime Number
// *********************************************
// HP@DESKTOP-TPJC62M MINGW64 ~/document/BackEnd-Assignment/Assignment-2 (master)
// $ node index.js
// Enter a positive number: 4
// 4 is not a Prime Number
// *********************************************