# Requirements
Emscripten - https://emscripten.org/docs/getting_started/downloads.html

# Build
```
sh ./build.sh
```

# What it does
It use web workers and pthread at the same time.  This way, the browser main thread is not blocked.

Inspired by https://gist.github.com/xaliphostes/6869989fadfb055ea40c2987b1150549