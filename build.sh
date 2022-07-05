#!/bin/bash

emcc -std=c++17 \
  -O3 --bind \
  -s SINGLE_FILE=1 \
  -s PTHREAD_POOL_SIZE=4 \
  -s USE_PTHREADS=1 \
  -s ASSERTIONS=1 \
  -s EXPORT_NAME=LibModule \
  -s WASM=1 \
  -s MODULARIZE=1 \
  -s ALLOW_MEMORY_GROWTH=1 \
  -o app.js \
  main.cpp
