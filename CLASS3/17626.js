// Four Squares
const number = +require('fs').readFileSync('/dev/stdin').toString().trim();

const dp = new Array(number+1).fill(0);
dp[1] = 1;

for (let i=2; i<=number; i++) {
    let min = 4;
    for (let j=1; j*j<=i; j++)
        min = Math.min(min, dp[i-j*j]);
        
    dp[i] = min + 1;
}

console.log(dp[number]);