import { describe, it, expect } from 'vitest';
import { insertionSort } from './insertionSort.js';

describe('insertionSort', () => {
  it('배열 오름차순 정렬', () => {
    const result = insertionSort();
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('입력 배열의 길이와 동일한 길이의 배열을 반환', () => {
    const result = insertionSort();
    expect(result).toHaveLength(9);
  });

  it('should return a sorted array where first element is smallest', () => {
    const result = insertionSort();
    expect(result[0]).toBe(1);
  });

  it('should return a sorted array where last element is largest', () => {
    const result = insertionSort();
    expect(result[result.length - 1]).toBe(9);
  });

  it('should maintain all original elements', () => {
    const result = insertionSort();
    const originalElements = [3, 1, 5, 2, 8, 6, 4, 9, 7];
    
    // 모든 원본 요소가 결과에 포함되어 있는지 확인
    originalElements.forEach(element => {
      expect(result).toContain(element);
    });
    
    // 결과 배열의 길이가 원본과 같은지 확인
    expect(result).toHaveLength(originalElements.length);
  });

  it('should return a properly sorted array', () => {
    const result = insertionSort();
    
    // 배열이 오름차순으로 정렬되어 있는지 확인
    for (let i = 0; i < result.length - 1; i++) {
      expect(result[i]).toBeLessThanOrEqual(result[i + 1]);
    }
  });

  it('should handle the specific test case correctly', () => {
    const result = insertionSort();
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    expect(result).toEqual(expected);
  });
});
