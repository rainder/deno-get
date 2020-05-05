export function set<T = any>(object: any, path: string, value: T): boolean {
  let result: any = object;
  const parts = path.split('.');
  const last = parts.pop();

  if (!last) {
    return false;
  }

  for (const part of parts) {
    if (typeof result !== 'object' || result === null) {
      return false;
    }

    if (!result.hasOwnProperty(part) || typeof result[part] !== 'object' || result[part] === null) {
      result[part] = {};
    }

    result = result[part];
  }

  if (typeof result !== 'object' || result === null) {
    return false;
  }

  result[last] = value;

  return true;
}