import { get } from "./get.ts";
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

const { test } = Deno;

test('returns undefined if input is undefined', () => {
  const r = get(undefined, 'anything');
  assertEquals(r, undefined);
});

test('returns 1st lvl property', () => {
  const r = get({
    hi: 5,
  }, 'hi');
  assertEquals(r, 5);
});

test('returns 2nd lvl property', () => {
  const r = get({
    one: {
      hi: 5,
    }
  }, 'one.hi');
  assertEquals(r, 5);
});

test('handles arrays', () => {
  const r = get({
    one: [{
      hi: 5,
    }],
  }, 'one.0.hi');
  assertEquals(r, 5);
});

test('handles null', () => {
  const r = get(null, 'hi');
  assertEquals(r, undefined);
});