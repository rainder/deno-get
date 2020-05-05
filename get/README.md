# Get

```ts
import { get } from 'https://raw.githubusercontent.com/rainder/deno-get/v1.0.0/get.ts';

const input = {
  a: {
    b: {
      c: 5,
    },
  },
};

get(input, 'a.b.c'); // 5
```