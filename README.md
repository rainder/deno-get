# Get

```ts
import { get } from 'https://raw.githubusercontent.com/rainder/deno-get/master/get.ts';

const input = {
  a: {
    b: {
      c: 5,
    },
  },
};

get(input, 'a.b.c'); // 5
```