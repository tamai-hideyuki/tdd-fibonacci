import { fibonacci } from '../src/fibonacci';

describe (`fibonacci`, () => {
    test(`最初のフィボナッチ数は1`, ()=> {
        expect(fibonacci(1)).toBe(1);
    });

    test(`２番目のフィボナッチ数は１`, ()=> {
        expect(fibonacci(2)).toBe(1);
    });

    test(`3番目のフィボナッチ数は2`, ()=> {
        expect(fibonacci(3)).toBe(2);
    });

    test(`4番目の数は3`, ()=> {
        expect(fibonacci(4)).toBe(3);
    });

    // test(`5番目の数は5`, ()=> {

    // });
    
    
});
