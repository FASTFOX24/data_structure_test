import { describe, it, expect } from 'vitest';
import { equalityConfirm } from './equalityConfirm.js';

describe('equalityConfirm', () => {
  it('완전히 똑같은 문자열을 넣었을 때, true를 반환', () => {
    expect(equalityConfirm('hello', 'hello')).toBe(true);
    expect(equalityConfirm('test', 'test')).toBe(true);
    expect(equalityConfirm('', '')).toBe(true);
  });

  it('다른 길이의 문자열을 넣었을 때, false를 반환', () => {
    expect(equalityConfirm('hello', 'hell')).toBe(false);
    expect(equalityConfirm('test', 'testing')).toBe(false);
    expect(equalityConfirm('', 'a')).toBe(false);
    expect(equalityConfirm('a', '')).toBe(false);
  });

  it('같은 길이의 문자열을 넣었지만 다른 문자열을 넣었을 때, false를 반환', () => {
    expect(equalityConfirm('hello', 'world')).toBe(false);
    expect(equalityConfirm('test', 'best')).toBe(false);
    expect(equalityConfirm('abc', 'def')).toBe(false);
  });

  it('첫 문자가 다른 문자열을 넣었을 때, false를 반환', () => {
    expect(equalityConfirm('hello', 'jello')).toBe(false);
    expect(equalityConfirm('test', 'west')).toBe(false);
  });

  it('끝 문자가 다른 문자열을 넣었을 때, false를 반환', () => {
    expect(equalityConfirm('hello', 'hellp')).toBe(false);
    expect(equalityConfirm('test', 'tesu')).toBe(false);
  });

  it('중간 문자가 다른 문자열을 넣었을 때, false를 반환', () => {
    expect(equalityConfirm('hello', 'helpo')).toBe(false);
    expect(equalityConfirm('testing', 'testong')).toBe(false);
  });

  it('특수문자가 포함된 문자열 비교 테스트', () => {
    expect(equalityConfirm('!@#$%', '!@#$%')).toBe(true);
    expect(equalityConfirm('!@#$%', '!@#$&')).toBe(false);
  });

  it('숫자가 포함된 문자열을 비교 테스트', () => {
    expect(equalityConfirm('123', '123')).toBe(true);
    expect(equalityConfirm('123', '124')).toBe(false);
  });

  it('공백이 포함된 문자열을 비교 테스트', () => {
    expect(equalityConfirm('hello world', 'hello world')).toBe(true);
    expect(equalityConfirm('hello world', 'hello world ')).toBe(false);
    expect(equalityConfirm('hello world', 'hello  world')).toBe(false);
  });
});
