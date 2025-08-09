import { describe, it, expect } from 'vitest';
import { equalityConfirm } from './equalityConfirm.js';

describe('equalityConfirm', () => {
  it('should return true for identical strings', () => {
    expect(equalityConfirm('hello', 'hello')).toBe(true);
    expect(equalityConfirm('test', 'test')).toBe(true);
    expect(equalityConfirm('', '')).toBe(true);
  });

  it('should return false for strings with different lengths', () => {
    expect(equalityConfirm('hello', 'hell')).toBe(false);
    expect(equalityConfirm('test', 'testing')).toBe(false);
    expect(equalityConfirm('', 'a')).toBe(false);
    expect(equalityConfirm('a', '')).toBe(false);
  });

  it('should return false for strings with same length but different characters', () => {
    expect(equalityConfirm('hello', 'world')).toBe(false);
    expect(equalityConfirm('test', 'best')).toBe(false);
    expect(equalityConfirm('abc', 'def')).toBe(false);
  });

  it('should return false for strings that differ at the beginning', () => {
    expect(equalityConfirm('hello', 'jello')).toBe(false);
    expect(equalityConfirm('test', 'west')).toBe(false);
  });

  it('should return false for strings that differ at the end', () => {
    expect(equalityConfirm('hello', 'hellp')).toBe(false);
    expect(equalityConfirm('test', 'tesu')).toBe(false);
  });

  it('should return false for strings that differ in the middle', () => {
    expect(equalityConfirm('hello', 'helpo')).toBe(false);
    expect(equalityConfirm('testing', 'testong')).toBe(false);
  });

  it('should handle special characters', () => {
    expect(equalityConfirm('!@#$%', '!@#$%')).toBe(true);
    expect(equalityConfirm('!@#$%', '!@#$&')).toBe(false);
  });

  it('should handle numbers as strings', () => {
    expect(equalityConfirm('123', '123')).toBe(true);
    expect(equalityConfirm('123', '124')).toBe(false);
  });

  it('should handle spaces', () => {
    expect(equalityConfirm('hello world', 'hello world')).toBe(true);
    expect(equalityConfirm('hello world', 'hello world ')).toBe(false);
    expect(equalityConfirm('hello world', 'hello  world')).toBe(false);
  });
});
