import { set } from "./mod.ts";
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

const { test } = Deno;

test('returns false if input is undefined', () => {
  const r = set(undefined, 'key', 'value');
  assertEquals(r, false);
});

test('returns false if input is null', () => {
  const r = set(null, 'key', 'value');
  assertEquals(r, false);
});

test('returns true when trying to set 1st lvl property on empty object', () => {
  const input = {};
  const r = set(input, 'a', 5);
  assertEquals(r, true);
  assertEquals(input, { a: 5 });
});

test('returns true when trying to set 2st lvl property on empty object', () => {
  const input = {};
  const r = set(input, 'a.b', 5);
  assertEquals(r, true);
  assertEquals(input, { a: { b: 5 } });
});

test('returns true when trying to set 2st lvl property on existing child property', () => {
  const input = { a: null };
  const r = set(input, 'a.b', 5);
  assertEquals(r, true);
  assertEquals(input, { a: { b: 5 } });
});
test('returns true when trying to set array element', () => {
  const input = { a: [1, 2, 3] };
  const r = set(input, 'a.1', 4);
  assertEquals(r, true);
  assertEquals(input, { a: [1, 4, 3] });
});
