import { describe, it, expect } from 'vitest';
import { linearScan } from './linearScan.js';

describe('linearScan', () => {
    it('배열에서 존재하는 값을 찾으면 해당 인덱스를 반환해야 한다', () => {
        const array = [1, 2, 3, 4, 5];
        expect(linearScan(array, 3)).toBe(2);
    });

    it('배열에서 존재하지 않는 값을 찾으면 -1을 반환해야 한다', () => {
        const array = [1, 2, 3, 4, 5];
        expect(linearScan(array, 6)).toBe(-1);
    });

    it('빈 배열에서 값을 찾으면 -1을 반환해야 한다', () => {
        const array = [];
        expect(linearScan(array, 1)).toBe(-1);
    });

    it('배열의 첫 번째 요소를 찾을 수 있어야 한다', () => {
        const array = [10, 20, 30, 40, 50];
        expect(linearScan(array, 10)).toBe(0);
    });

    it('배열의 마지막 요소를 찾을 수 있어야 한다', () => {
        const array = [10, 20, 30, 40, 50];
        expect(linearScan(array, 50)).toBe(4);
    });

    it('중복된 값이 있을 때 첫 번째로 발견되는 인덱스를 반환해야 한다', () => {
        const array = [1, 2, 2, 3, 2, 4];
        expect(linearScan(array, 2)).toBe(1);
    });

    it('문자열 배열에서도 작동해야 한다', () => {
        const array = ['apple', 'banana', 'cherry', 'date'];
        expect(linearScan(array, 'cherry')).toBe(2);
    });

    it('혼합 타입 배열에서도 작동해야 한다', () => {
        const array = [1, 'hello', true, null, undefined];
        expect(linearScan(array, 'hello')).toBe(1);
        expect(linearScan(array, true)).toBe(2);
        expect(linearScan(array, null)).toBe(3);
    });

    it('객체 배열에서도 작동해야 한다', () => {
        const obj1 = { id: 1, name: 'Alice' };
        const obj2 = { id: 2, name: 'Bob' };
        const obj3 = { id: 3, name: 'Charlie' };
        const array = [obj1, obj2, obj3];
        
        expect(linearScan(array, obj2)).toBe(1);
    });

    it('배열에 하나의 요소만 있을 때도 작동해야 한다', () => {
        const array = [42];
        expect(linearScan(array, 42)).toBe(0);
        expect(linearScan(array, 100)).toBe(-1);
    });

    it('음수 값을 포함한 배열에서도 작동해야 한다', () => {
        const array = [-5, -3, 0, 3, 5];
        expect(linearScan(array, -3)).toBe(1);
        expect(linearScan(array, 0)).toBe(2);
        expect(linearScan(array, 5)).toBe(4);
    });
}); 