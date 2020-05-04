export function get<T = any>(object: any, path: string): T | undefined {
  let result: any = object;

  for (const part of path.split('.')) {
    if (typeof result !== 'object' || result === null || !result.hasOwnProperty(part)) {
      return;
    }

    result = result[part];
  }

  return result;
}