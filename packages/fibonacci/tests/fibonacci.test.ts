import { fibonacci } from '../src/fibonacci';

describe (`フィボナッチ数列`, () => {
    // test(`最初のフィボナッチ数は1`, ()=> {
    //     expect(fibonacci(1)).toBe(1);
    // });

    // test(`２番目のフィボナッチ数は１`, ()=> {
    //     expect(fibonacci(2)).toBe(1);
    // });

    // test(`3番目のフィボナッチ数は2`, ()=> {
    //     expect(fibonacci(3)).toBe(2);
    // });

    // test(`4番目のフィボナッチ数は3`, ()=> {
    //     expect(fibonacci(4)).toBe(3);
    // });

    // test(`5番目のフィボナッチ数は5`, ()=> {
    //     expect(fibonacci(5)).toBe(5);
    // });

    // test(`6番目のフィボナッチ数は8`, ()=> {
    //     expect(fibonacci(6)).toBe(8);
    // });

    // test(`7番目のフィボナッチ数は13`, ()=> {
    //     expect(fibonacci(7)).toBe(13);
    // });

    // test(`8番目のフィボナッチ数は21`, ()=> {
    //     expect(fibonacci(8)).toBe(21);
    // }); 
    
    // test(`フィボナッチ数列のテストケース`, () => {
       test.each([
            [1, 1],
            [2, 1],
            [3, 2],
            [4, 3],
            [5, 5],
            [6, 8],
            [7, 13],
            [10, 55]
        ])(`fibonacci(%i)は %i を返す`, (input, expected) => {
        expect(fibonacci(input)).toBe(expected);
    });
});
// });

describe(`エッジケース`, () => {
    test(`負の値は無効な値としてエラーをスローする`, () =>{
        expect(() => fibonacci(-1)).toThrow(`負の値は無効な値です`);
    });
    
    test(`少数は無効な値としてエラーをスローする`, () =>{
        expect(() => fibonacci(1.5)).toThrow(`整数のみ有効な値です`);
    });

    test(`0は無効な値としてエラーをスローする`, () =>{
        expect(() => fibonacci(0)).toThrow(`負の値は無効な値です`);
    });
});
