export function fibonacci(n: number): number {
    if (n === 1) return 1;
    if (n === 2) return 1;
    
    let prev = 1;
    let current = 1;

    for (let i = 3; i <= n; i++) {
        const next = prev + current;
        prev = current;
        current = next;
    }
    return current;
}
