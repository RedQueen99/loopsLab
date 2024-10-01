//Loop through all numbers from 1 to 100.//
for (let i = 1; i < 100; i++){
    if (i % 3 ===0 && i % 5 ===0){
        console.log("FIZZ BUZZ" )
    } else if (i % 3 ===0){
        console.log("FIZZ")

        }else if (i % 5 ===0){
            console.log("BUZZ")
        }else {
            console.log(i)
        }

}

// 2nd problem//
let n=4;
for ( let i=n;i<=6;i++){
    let prime = i > 1;
    for (let j=2;j <= Math.sqrt(i); j++ ){
        if (i % j===0){
            prime = false
        }
 }if (prime){
    console.log(i,"is a prime number")
 }
}

const string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
let cell = "";

for (const ch of string){
    cell += ch; 
    if(ch===","){
        continue;
    }
    if( ch ==="\\n"){
        break;
    }
}

console.log(cell)