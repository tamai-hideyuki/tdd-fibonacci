export function fibonacci(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fibonacci(n -1) + fibonacci(n -2);
}

// export function fibonacci(n: number): number {
//     if (n === 1) return 1;
//     if (n === 2) return 1;
//     if (n === 3) return 2;
//     return 3;

    // if (n === 1) return 1;
    // if (n === 2) return 1;


// export function validateInput(n: number): void {
//     if (n <= 0) {
//         throw new Error(`負の値は無効な値です`);
//     }
//     if (n % 1 !== 0) {
//         throw new Error(`少数派は無効な値です`);
//     }
    
//     let prev = 1;
//     let current = 1;

//     for (let i = 3; i <= n; i++) {
//         const next = prev + current;
//         prev = current;
//         current = next;
//     }    
// }
