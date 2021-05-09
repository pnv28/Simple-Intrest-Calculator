const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nSimple Intrest Calculator\nPlease Refrain from using Comma's (,) or any other character other then Numericals, ( . ) may be used for Decimal\nEnter the Intrest in % and Time in Year\nSorry for the Inconvinience\n")
rl.question(`Input the Principal: `,  (p) =>{
    rl.question(`Input the Time: `, (t) =>{
        rl.question(`Input the Rate: `, (r) =>{
            let P = parseFloat(p),T = parseFloat(t),R = parseFloat(r);
            
            let SI = (P*R*T)/100;
            let amount = P + SI;
            console.log(`\n The SI is ${SI}\nThe new Amount is ${amount}\n`);
            rl.close();
        });
    });
});
