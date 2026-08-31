---
title: NativeFinalizer.callback
description: A landed dart:ffi contribution to the Dart SDK.
pubDate: 2026-08-13
kind: article
tags: [Dart, FFI, Open Source]
---

## Dart SDK · dart:ffi

Added `NativeFinalizer.callback`, an API that returns the finalization callback a `NativeFinalizer` was created with.

The change makes it possible for a native resource wrapper to detach from a finalizer and invoke the original callback without separately retaining it.

- 43 additions across 4 files
- Landed in the Dart SDK on August 13, 2026
- [Commit](https://github.com/dart-lang/sdk/commit/b4778eac604d8ab3c9835ffa40556c770deceb6d)
- [Pull request #64011](https://github.com/dart-lang/sdk/pull/64011)
