# Bun Documentation

> Bun is a fast all-in-one JavaScript runtime & toolkit designed for speed, complete with a bundler, test runner, and Node.js-compatible package manager.

This documentation covers all aspects of using Bun, from installation to advanced usage.

## Documentation Sections


### Intro

- [What is Bun?](https://bun.sh/docs/index?llms=1): Bun is an all-in-one runtime for JavaScript and TypeScript apps. Build, run, and test apps with one fast tool.
- [Installation](https://bun.sh/docs/installation?llms=1): Install Bun with npm, Homebrew, Docker, or the official install script.
- [Quickstart](https://bun.sh/docs/quickstart?llms=1): Get started with Bun by building and running a simple HTTP server in 6 lines of TypeScript.
- [TypeScript](https://bun.sh/docs/typescript?llms=1): Install and configure type declarations for Bun's APIs

### Templating

- [`bun init`](https://bun.sh/docs/cli/init?llms=1): Scaffold an empty Bun project.
- [`bun create`](https://bun.sh/docs/cli/bun-create?llms=1): Scaffold a new Bun project from an official template or GitHub repo.

### Runtime

- [`bun run`](https://bun.sh/docs/cli/run?llms=1): Use `bun run` to execute JavaScript/TypeScript files and package.json scripts.
- [File types](https://bun.sh/docs/runtime/loaders?llms=1): Bun's runtime supports JavaScript/TypeScript files, JSX syntax, Wasm, JSON/TOML imports, and more.
- [TypeScript](https://bun.sh/docs/runtime/typescript?llms=1): Bun can directly execute TypeScript files without additional configuration.
- [JSX](https://bun.sh/docs/runtime/jsx?llms=1): Bun can directly execute TypeScript files without additional configuration.
- [Environment variables](https://bun.sh/docs/runtime/env?llms=1): How to read and set environment variables, plus how to use them to configure Bun
- [Bun APIs](https://bun.sh/docs/runtime/bun-apis?llms=1): Bun provides a set of highly optimized native APIs for performing common tasks.
- [Web APIs](https://bun.sh/docs/runtime/web-apis?llms=1): Bun implements an array of Web-standard APIs like fetch, URL, and WebSocket.
- [Node.js compatibility](https://bun.sh/docs/runtime/nodejs-apis?llms=1): Bun aims for full Node.js compatibility. This page tracks the current compatibility status.
- [Single-file executable](https://bun.sh/docs/bundler/executables?llms=1): Compile a TypeScript or JavaScript file to a standalone executable
- [Plugins](https://bun.sh/docs/runtime/plugins?llms=1): Implement custom loaders and module resolution logic with Bun's plugin system.
- [Watch mode](https://bun.sh/docs/runtime/hot?llms=1): Reload your application & tests automatically.
- [Module resolution](https://bun.sh/docs/runtime/modules?llms=1): Bun uses ESM and implements an extended version of the Node.js module resolution algorithm.
- [Auto-install](https://bun.sh/docs/runtime/autoimport?llms=1): Never use node_modules again. Bun can optionally auto-install your dependencies on the fly.
- [bunfig.toml](https://bun.sh/docs/runtime/bunfig?llms=1): Bun's runtime is configurable with environment variables and the bunfig.toml config file.
- [Debugger](https://bun.sh/docs/runtime/debugger?llms=1): Debug your code with Bun's web-based debugger or VS Code extension

### Package manager

- [`bun install`](https://bun.sh/docs/cli/install?llms=1): Install all dependencies with `bun install`, or manage dependencies with `bun add` and `bun remove`.
- [`bun add`](https://bun.sh/docs/cli/add?llms=1): Add dependencies to your project.
- [`bun remove`](https://bun.sh/docs/cli/remove?llms=1): Remove dependencies from your project.
- [`bun update`](https://bun.sh/docs/cli/update?llms=1): Update your project's dependencies.
- [`bun publish`](https://bun.sh/docs/cli/publish?llms=1): Publish your package to an npm registry.
- [`bun outdated`](https://bun.sh/docs/cli/outdated?llms=1): Check for outdated dependencies.
- [`bun link`](https://bun.sh/docs/cli/link?llms=1): Install local packages as dependencies in your project.
- [`bun pm`](https://bun.sh/docs/cli/pm?llms=1): Utilities relating to package management with Bun.
- [Global cache](https://bun.sh/docs/install/cache?llms=1): Bun's package manager installs all packages into a shared global cache to avoid redundant re-downloads.
- [Workspaces](https://bun.sh/docs/install/workspaces?llms=1): Bun's package manager supports workspaces and monorepo development workflows.
- [Lifecycle scripts](https://bun.sh/docs/install/lifecycle?llms=1): How Bun handles package lifecycle scripts with trustedDependencies
- [Filter](https://bun.sh/docs/cli/filter?llms=1): Run scripts in multiple packages in parallel
- [Lockfile](https://bun.sh/docs/install/lockfile?llms=1): Bun's lockfile `bun.lock` tracks your resolved dependency tree, making future installs fast and repeatable.
- [Scopes and registries](https://bun.sh/docs/install/registries?llms=1): How to configure private scopes, custom package registries, authenticating with npm token, and more.
- [Overrides and resolutions](https://bun.sh/docs/install/overrides?llms=1): Specify version ranges for nested dependencies
- [Patch dependencies](https://bun.sh/docs/install/patch?llms=1): Patch dependencies in your project to fix bugs or add features without vendoring the entire package.
- [.npmrc support](https://bun.sh/docs/install/npmrc?llms=1): Bun supports loading some configuration options from .npmrc

### Bundler

- [`Bun.build`](https://bun.sh/docs/bundler?llms=1): Bundle code for consumption in the browser with Bun's native bundler.
- [Bundle frontend & static sites](https://bun.sh/docs/bundler/html?llms=1): Zero-config HTML bundler for single-page apps and multi-page apps. Automatic bundling, TailwindCSS plugins, TypeScript, JSX, React support, and incredibly fast builds
- [Fullstack Dev Server](https://bun.sh/docs/bundler/fullstack?llms=1): Serve your frontend and backend from the same app with Bun's dev server.
- [Loaders](https://bun.sh/docs/bundler/loaders?llms=1): Bun's built-in loaders for the bundler and runtime
- [Plugins](https://bun.sh/docs/bundler/plugins?llms=1): Implement custom loaders and module resolution logic with Bun's plugin system.
- [Macros](https://bun.sh/docs/bundler/macros?llms=1): Run JavaScript functions at bundle-time and inline the results into your bundle
- [vs esbuild](https://bun.sh/docs/bundler/vs-esbuild?llms=1): Guides for migrating from other bundlers to Bun.

### Test runner

- [`bun test`](https://bun.sh/docs/cli/test?llms=1): Bun's test runner uses Jest-compatible syntax but runs 100x faster.
- [Writing tests](https://bun.sh/docs/test/writing?llms=1): Write your tests using Jest-like expect matchers, plus setup/teardown hooks, snapshot testing, and more
- [Watch mode](https://bun.sh/docs/test/hot?llms=1): Reload your tests automatically on change.
- [Lifecycle hooks](https://bun.sh/docs/test/lifecycle?llms=1): Add lifecycle hooks to your tests that run before/after each test or test run
- [Mocks](https://bun.sh/docs/test/mocks?llms=1): Mocks functions and track method calls
- [Snapshots](https://bun.sh/docs/test/snapshots?llms=1): Add lifecycle hooks to your tests that run before/after each test or test run
- [Dates and times](https://bun.sh/docs/test/time?llms=1): Control the date & time in your tests for more reliable and deterministic tests
- [DOM testing](https://bun.sh/docs/test/dom?llms=1): Write headless tests for UI and React/Vue/Svelte/Lit components with happy-dom
- [Code coverage](https://bun.sh/docs/test/coverage?llms=1): Generate code coverage reports with `bun test --coverage`

### Package runner

- [`bunx`](https://bun.sh/docs/cli/bunx?llms=1): Use `bunx` to auto-install and run executable packages from npm.

### API

- [HTTP server](https://bun.sh/docs/api/http?llms=1): Bun implements a fast HTTP server built on Request/Response objects, along with supporting node:http APIs.
- [HTTP client](https://bun.sh/docs/api/fetch?llms=1): Bun implements Web-standard fetch with some Bun-native extensions.
- [WebSockets](https://bun.sh/docs/api/websockets?llms=1): Bun supports server-side WebSockets with on-the-fly compression, TLS support, and a Bun-native pubsub API.
- [Workers](https://bun.sh/docs/api/workers?llms=1): Run code in a separate thread with Bun's native Worker API.
- [Binary data](https://bun.sh/docs/api/binary-data?llms=1): How to represent and manipulate binary data in Bun.
- [Streams](https://bun.sh/docs/api/streams?llms=1): Reading, writing, and manipulating streams of data in Bun.
- [SQL](https://bun.sh/docs/api/sql?llms=1): Bun provides fast, native bindings for interacting with PostgreSQL databases.
- [S3 Object Storage](https://bun.sh/docs/api/s3?llms=1): Bun provides fast, native bindings for interacting with S3-compatible object storage services.
- [File I/O](https://bun.sh/docs/api/file-io?llms=1): Read and write files fast with Bun's heavily optimized file system API.
- [import.meta](https://bun.sh/docs/api/import-meta?llms=1): Module-scoped metadata and utilities
- [SQLite](https://bun.sh/docs/api/sqlite?llms=1): The fastest SQLite driver for JavaScript is baked directly into Bun.
- [FileSystemRouter](https://bun.sh/docs/api/file-system-router?llms=1): Resolve incoming HTTP requests against a local file system directory with Bun's fast, Next.js-compatible router.
- [TCP sockets](https://bun.sh/docs/api/tcp?llms=1): Bun's native API implements Web-standard TCP Sockets, plus a Bun-native API for building fast TCP servers.
- [UDP sockets](https://bun.sh/docs/api/udp?llms=1): Bun's native API implements fast and flexible UDP sockets.
- [Globals](https://bun.sh/docs/api/globals?llms=1): Bun implements a range of Web APIs, Node.js APIs, and Bun-native APIs that are available in the global scope.
- [$ Shell](https://bun.sh/docs/runtime/shell?llms=1): Bun's cross-platform shell-scripting API makes shell scripting with JavaScript fun
- [Child processes](https://bun.sh/docs/api/spawn?llms=1): Spawn sync and async child processes with easily configurable input and output streams.
- [Transpiler](https://bun.sh/docs/api/transpiler?llms=1): Bun exposes its internal transpiler as a pluggable API.
- [Hashing](https://bun.sh/docs/api/hashing?llms=1): Native support for a range of fast hashing algorithms.
- [Console](https://bun.sh/docs/api/console?llms=1): Bun implements a Node.js-compatible `console` object with colorized output and deep pretty-printing.
- [FFI](https://bun.sh/docs/api/ffi?llms=1): Call native code from JavaScript with Bun's foreign function interface (FFI) API.
- [C Compiler](https://bun.sh/docs/api/cc?llms=1): Build & run native C from JavaScript with Bun's native C compiler API
- [HTMLRewriter](https://bun.sh/docs/api/html-rewriter?llms=1): Parse and transform HTML with Bun's native HTMLRewriter API, inspired by Cloudflare Workers.
- [Testing](https://bun.sh/docs/api/test?llms=1): Bun's built-in test runner is fast and uses Jest-compatible syntax.
- [Utils](https://bun.sh/docs/api/utils?llms=1): Bun implements a set of utilities that are commonly required by developers.
- [Node-API](https://bun.sh/docs/api/node-api?llms=1): Bun implements the Node-API spec for building native addons.
- [Glob](https://bun.sh/docs/api/glob?llms=1): Bun includes a fast native Glob implementation for matching file paths.
- [DNS](https://bun.sh/docs/api/dns?llms=1): Resolve domain names to IP addresses.
- [Semver](https://bun.sh/docs/api/semver?llms=1): Bun's native Semver implementation is 20x faster than the popular `node-semver` package.
- [Color](https://bun.sh/docs/api/color?llms=1): Bun's color function leverages Bun's CSS parser for parsing, normalizing, and converting colors from user input to a variety of output formats.

### Project

- [Roadmap](https://bun.sh/docs/project/roadmap?llms=1): Track Bun's near-term and long-term goals.
- [Benchmarking](https://bun.sh/docs/project/benchmarking?llms=1): Bun is designed for performance. Learn how to benchmark Bun yourself.
- [Contributing](https://bun.sh/docs/project/contributing?llms=1): Learn how to contribute to Bun and get your local development environment up and running.
- [Building Windows](https://bun.sh/docs/project/building-windows?llms=1): Learn how to setup a development environment for contributing to the Windows build of Bun.
- [Bindgen](https://bun.sh/docs/project/bindgen?llms=1): About the bindgen code generator
- [License](https://bun.sh/docs/project/licensing?llms=1): Bun is a MIT-licensed project with a large number of statically-linked dependencies with various licenses.

## Guides

### Guides: Ecosystem

- [Add Sentry to a Bun app](https://bun.sh/guides/ecosystem/sentry?llms=1)
- [Build a frontend using Vite and Bun](https://bun.sh/guides/ecosystem/vite?llms=1)
- [Build an app with Astro and Bun](https://bun.sh/guides/ecosystem/astro?llms=1)
- [Build an app with Next.js and Bun](https://bun.sh/guides/ecosystem/nextjs?llms=1)
- [Build an app with Nuxt and Bun](https://bun.sh/guides/ecosystem/nuxt?llms=1)
- [Build an app with Qwik and Bun](https://bun.sh/guides/ecosystem/qwik?llms=1)
- [Build an app with Remix and Bun](https://bun.sh/guides/ecosystem/remix?llms=1)
- [Build an app with SolidStart and Bun](https://bun.sh/guides/ecosystem/solidstart?llms=1)
- [Build an app with SvelteKit and Bun](https://bun.sh/guides/ecosystem/sveltekit?llms=1)
- [Build an HTTP server using Elysia and Bun](https://bun.sh/guides/ecosystem/elysia?llms=1)
- [Build an HTTP server using Express and Bun](https://bun.sh/guides/ecosystem/express?llms=1)
- [Build an HTTP server using Hono and Bun](https://bun.sh/guides/ecosystem/hono?llms=1)
- [Build an HTTP server using StricJS and Bun](https://bun.sh/guides/ecosystem/stric?llms=1)
- [Containerize a Bun application with Docker](https://bun.sh/guides/ecosystem/docker?llms=1)
- [Create a Discord bot](https://bun.sh/guides/ecosystem/discordjs?llms=1)
- [Deploy a Bun application on Render](https://bun.sh/guides/ecosystem/render?llms=1)
- [Read and write data to MongoDB using Mongoose and Bun](https://bun.sh/guides/ecosystem/mongoose?llms=1)
- [Run Bun as a daemon with PM2](https://bun.sh/guides/ecosystem/pm2?llms=1)
- [Run Bun as a daemon with systemd](https://bun.sh/guides/ecosystem/systemd?llms=1)
- [Server-side render (SSR) a React component](https://bun.sh/guides/ecosystem/ssr-react?llms=1)
- [Use Drizzle ORM with Bun](https://bun.sh/guides/ecosystem/drizzle?llms=1)
- [Use EdgeDB with Bun](https://bun.sh/guides/ecosystem/edgedb?llms=1)
- [Use Neon Postgres through Drizzle ORM](https://bun.sh/guides/ecosystem/neon-drizzle?llms=1)
- [Use Neon's Serverless Postgres with Bun](https://bun.sh/guides/ecosystem/neon-serverless-postgres?llms=1)
- [Use Prisma with Bun](https://bun.sh/guides/ecosystem/prisma?llms=1)
- [Use React and JSX](https://bun.sh/guides/ecosystem/react?llms=1)

### Guides: WebSocket

- [Build a publish-subscribe WebSocket server](https://bun.sh/guides/websocket/pubsub?llms=1)
- [Build a simple WebSocket server](https://bun.sh/guides/websocket/simple?llms=1)
- [Enable compression for WebSocket messages](https://bun.sh/guides/websocket/compression?llms=1)
- [Set per-socket contextual data on a WebSocket](https://bun.sh/guides/websocket/context?llms=1)

### Guides: Package manager

- [Add a dependency](https://bun.sh/guides/install/add?llms=1)
- [Add a development dependency](https://bun.sh/guides/install/add-dev?llms=1)
- [Add a Git dependency](https://bun.sh/guides/install/add-git?llms=1)
- [Add a peer dependency](https://bun.sh/guides/install/add-peer?llms=1)
- [Add a tarball dependency](https://bun.sh/guides/install/add-tarball?llms=1)
- [Add a trusted dependency](https://bun.sh/guides/install/trusted?llms=1)
- [Add an optional dependency](https://bun.sh/guides/install/add-optional?llms=1)
- [Configure a private registry for an organization scope with bun install](https://bun.sh/guides/install/registry-scope?llms=1)
- [Configure git to diff Bun's lockb lockfile](https://bun.sh/guides/install/git-diff-bun-lockfile?llms=1)
- [Configuring a monorepo using workspaces](https://bun.sh/guides/install/workspaces?llms=1)
- [Generate a yarn-compatible lockfile](https://bun.sh/guides/install/yarnlock?llms=1)
- [Install a package under a different name](https://bun.sh/guides/install/npm-alias?llms=1)
- [Install dependencies with Bun in GitHub Actions](https://bun.sh/guides/install/cicd?llms=1)
- [Migrate from npm install to bun install](https://bun.sh/guides/install/from-npm-install-to-bun-install?llms=1)
- [Override the default npm registry for bun install](https://bun.sh/guides/install/custom-registry?llms=1)
- [Using bun install with an Azure Artifacts npm registry](https://bun.sh/guides/install/azure-artifacts?llms=1)
- [Using bun install with Artifactory](https://bun.sh/guides/install/jfrog-artifactory?llms=1)

### Guides: Test runner

- [Bail early with the Bun test runner](https://bun.sh/guides/test/bail?llms=1)
- [Generate code coverage reports with the Bun test runner](https://bun.sh/guides/test/coverage?llms=1)
- [import, require, and test Svelte components with bun test](https://bun.sh/guides/test/svelte-test?llms=1)
- [Mark a test as a "todo" with the Bun test runner](https://bun.sh/guides/test/todo-tests?llms=1)
- [Migrate from Jest to Bun's test runner](https://bun.sh/guides/test/migrate-from-jest?llms=1)
- [Mock functions in `bun test`](https://bun.sh/guides/test/mock-functions?llms=1)
- [Re-run tests multiple times with the Bun test runner](https://bun.sh/guides/test/rerun-each?llms=1)
- [Run tests in watch mode with Bun](https://bun.sh/guides/test/watch-mode?llms=1)
- [Run your tests with the Bun test runner](https://bun.sh/guides/test/run-tests?llms=1)
- [Set a code coverage threshold with the Bun test runner](https://bun.sh/guides/test/coverage-threshold?llms=1)
- [Set a per-test timeout with the Bun test runner](https://bun.sh/guides/test/timeout?llms=1)
- [Set the system time in Bun's test runner](https://bun.sh/guides/test/mock-clock?llms=1)
- [Skip tests with the Bun test runner](https://bun.sh/guides/test/skip-tests?llms=1)
- [Spy on methods in `bun test`](https://bun.sh/guides/test/spy-on?llms=1)
- [Update snapshots in `bun test`](https://bun.sh/guides/test/update-snapshots?llms=1)
- [Use snapshot testing in `bun test`](https://bun.sh/guides/test/snapshot?llms=1)
- [Using Testing Library with Bun](https://bun.sh/guides/test/testing-library?llms=1)
- [Write browser DOM tests with Bun and happy-dom](https://bun.sh/guides/test/happy-dom?llms=1)

### Guides: Utilities

- [Check if the current file is the entrypoint](https://bun.sh/guides/util/entrypoint?llms=1)
- [Check if two objects are deeply equal](https://bun.sh/guides/util/deep-equals?llms=1)
- [Compress and decompress data with DEFLATE](https://bun.sh/guides/util/deflate?llms=1)
- [Compress and decompress data with gzip](https://bun.sh/guides/util/gzip?llms=1)
- [Convert a file URL to an absolute path](https://bun.sh/guides/util/file-url-to-path?llms=1)
- [Convert an absolute path to a file URL](https://bun.sh/guides/util/path-to-file-url?llms=1)
- [Detect when code is executed with Bun](https://bun.sh/guides/util/detect-bun?llms=1)
- [Encode and decode base64 strings](https://bun.sh/guides/util/base64?llms=1)
- [Escape an HTML string](https://bun.sh/guides/util/escape-html?llms=1)
- [Get the absolute path of the current file](https://bun.sh/guides/util/import-meta-path?llms=1)
- [Get the absolute path to the current entrypoint](https://bun.sh/guides/util/main?llms=1)
- [Get the current Bun version](https://bun.sh/guides/util/version?llms=1)
- [Get the directory of the current file](https://bun.sh/guides/util/import-meta-dir?llms=1)
- [Get the file name of the current file](https://bun.sh/guides/util/import-meta-file?llms=1)
- [Get the path to an executable bin file](https://bun.sh/guides/util/which-path-to-executable-bin?llms=1)
- [Hash a password](https://bun.sh/guides/util/hash-a-password?llms=1)
- [Sleep for a fixed number of milliseconds](https://bun.sh/guides/util/sleep?llms=1)

### Guides: Reading files

- [Check if a file exists](https://bun.sh/guides/read-file/exists?llms=1)
- [Get the MIME type of a file](https://bun.sh/guides/read-file/mime?llms=1)
- [Read a file as a ReadableStream](https://bun.sh/guides/read-file/stream?llms=1)
- [Read a file as a string](https://bun.sh/guides/read-file/string?llms=1)
- [Read a file to a Buffer](https://bun.sh/guides/read-file/buffer?llms=1)
- [Read a file to a Uint8Array](https://bun.sh/guides/read-file/uint8array?llms=1)
- [Read a file to an ArrayBuffer](https://bun.sh/guides/read-file/arraybuffer?llms=1)
- [Read a JSON file](https://bun.sh/guides/read-file/json?llms=1)
- [Watch a directory for changes](https://bun.sh/guides/read-file/watch?llms=1)

### Guides: Streams

- [Convert a Node.js Readable to a Blob](https://bun.sh/guides/streams/node-readable-to-blob?llms=1)
- [Convert a Node.js Readable to a string](https://bun.sh/guides/streams/node-readable-to-string?llms=1)
- [Convert a Node.js Readable to an ArrayBuffer](https://bun.sh/guides/streams/node-readable-to-arraybuffer?llms=1)
- [Convert a Node.js Readable to an Uint8Array](https://bun.sh/guides/streams/node-readable-to-uint8array?llms=1)
- [Convert a Node.js Readable to JSON](https://bun.sh/guides/streams/node-readable-to-json?llms=1)
- [Convert a ReadableStream to a Blob](https://bun.sh/guides/streams/to-blob?llms=1)
- [Convert a ReadableStream to a Buffer](https://bun.sh/guides/streams/to-buffer?llms=1)
- [Convert a ReadableStream to a string](https://bun.sh/guides/streams/to-string?llms=1)
- [Convert a ReadableStream to a Uint8Array](https://bun.sh/guides/streams/to-typedarray?llms=1)
- [Convert a ReadableStream to an array of chunks](https://bun.sh/guides/streams/to-array?llms=1)
- [Convert a ReadableStream to an ArrayBuffer](https://bun.sh/guides/streams/to-arraybuffer?llms=1)
- [Convert a ReadableStream to JSON](https://bun.sh/guides/streams/to-json?llms=1)

### Guides: Runtime

- [Debugging Bun with the VS Code extension](https://bun.sh/guides/runtime/vscode-debugger?llms=1)
- [Debugging Bun with the web debugger](https://bun.sh/guides/runtime/web-debugger?llms=1)
- [Define and replace static globals & constants](https://bun.sh/guides/runtime/define-constant?llms=1)
- [Delete directories](https://bun.sh/guides/runtime/delete-directory?llms=1)
- [Delete files](https://bun.sh/guides/runtime/delete-file?llms=1)
- [Import a HTML file as text](https://bun.sh/guides/runtime/import-html?llms=1)
- [Import a JSON file](https://bun.sh/guides/runtime/import-json?llms=1)
- [Import a TOML file](https://bun.sh/guides/runtime/import-toml?llms=1)
- [Inspect memory usage using V8 heap snapshots](https://bun.sh/guides/runtime/heap-snapshot?llms=1)
- [Install and run Bun in GitHub Actions](https://bun.sh/guides/runtime/cicd?llms=1)
- [Install TypeScript declarations for Bun](https://bun.sh/guides/runtime/typescript?llms=1)
- [Re-map import paths](https://bun.sh/guides/runtime/tsconfig-paths?llms=1)
- [Read environment variables](https://bun.sh/guides/runtime/read-env?llms=1)
- [Run a Shell Command](https://bun.sh/guides/runtime/shell?llms=1)
- [Set a time zone in Bun](https://bun.sh/guides/runtime/timezone?llms=1)
- [Set environment variables](https://bun.sh/guides/runtime/set-env?llms=1)

### Guides: Writing files

- [Append content to a file](https://bun.sh/guides/write-file/append?llms=1)
- [Copy a file to another location](https://bun.sh/guides/write-file/file-cp?llms=1)
- [Delete a file](https://bun.sh/guides/write-file/unlink?llms=1)
- [Write a Blob to a file](https://bun.sh/guides/write-file/blob?llms=1)
- [Write a file incrementally](https://bun.sh/guides/write-file/filesink?llms=1)
- [Write a file to stdout](https://bun.sh/guides/write-file/cat?llms=1)
- [Write a ReadableStream to a file](https://bun.sh/guides/write-file/stream?llms=1)
- [Write a Response to a file](https://bun.sh/guides/write-file/response?llms=1)
- [Write a string to a file](https://bun.sh/guides/write-file/basic?llms=1)
- [Write to stdout](https://bun.sh/guides/write-file/stdout?llms=1)

### Guides: HTTP

- [Common HTTP server usage](https://bun.sh/guides/http/server?llms=1)
- [Configure TLS on an HTTP server](https://bun.sh/guides/http/tls?llms=1)
- [fetch with unix domain sockets in Bun](https://bun.sh/guides/http/fetch-unix?llms=1)
- [Hot reload an HTTP server](https://bun.sh/guides/http/hot?llms=1)
- [Proxy HTTP requests using fetch()](https://bun.sh/guides/http/proxy?llms=1)
- [Send an HTTP request using fetch](https://bun.sh/guides/http/fetch?llms=1)
- [Start a cluster of HTTP servers](https://bun.sh/guides/http/cluster?llms=1): Run multiple HTTP servers concurrently via the "reusePort" option to share the same port across multiple processes
- [Stream a file as an HTTP Response](https://bun.sh/guides/http/stream-file?llms=1)
- [Streaming HTTP Server with Async Iterators](https://bun.sh/guides/http/stream-iterator?llms=1)
- [Streaming HTTP Server with Node.js Streams](https://bun.sh/guides/http/stream-node-streams-in-bun?llms=1)
- [Upload files via HTTP using FormData](https://bun.sh/guides/http/file-uploads?llms=1)
- [Write a simple HTTP server](https://bun.sh/guides/http/simple?llms=1)

### Guides: Binary data

- [Convert a Blob to a DataView](https://bun.sh/guides/binary/blob-to-dataview?llms=1)
- [Convert a Blob to a ReadableStream](https://bun.sh/guides/binary/blob-to-stream?llms=1)
- [Convert a Blob to a string](https://bun.sh/guides/binary/blob-to-string?llms=1)
- [Convert a Blob to a Uint8Array](https://bun.sh/guides/binary/blob-to-typedarray?llms=1)
- [Convert a Blob to an ArrayBuffer](https://bun.sh/guides/binary/blob-to-arraybuffer?llms=1)
- [Convert a Buffer to a blob](https://bun.sh/guides/binary/buffer-to-blob?llms=1)
- [Convert a Buffer to a ReadableStream](https://bun.sh/guides/binary/buffer-to-readablestream?llms=1)
- [Convert a Buffer to a string](https://bun.sh/guides/binary/buffer-to-string?llms=1)
- [Convert a Buffer to a Uint8Array](https://bun.sh/guides/binary/buffer-to-typedarray?llms=1)
- [Convert a Buffer to an ArrayBuffer](https://bun.sh/guides/binary/buffer-to-arraybuffer?llms=1)
- [Convert a DataView to a string](https://bun.sh/guides/binary/dataview-to-string?llms=1)
- [Convert a Uint8Array to a Blob](https://bun.sh/guides/binary/typedarray-to-blob?llms=1)
- [Convert a Uint8Array to a Buffer](https://bun.sh/guides/binary/typedarray-to-buffer?llms=1)
- [Convert a Uint8Array to a DataView](https://bun.sh/guides/binary/typedarray-to-dataview?llms=1)
- [Convert a Uint8Array to a ReadableStream](https://bun.sh/guides/binary/typedarray-to-readablestream?llms=1)
- [Convert a Uint8Array to a string](https://bun.sh/guides/binary/typedarray-to-string?llms=1)
- [Convert a Uint8Array to an ArrayBuffer](https://bun.sh/guides/binary/typedarray-to-arraybuffer?llms=1)
- [Convert an ArrayBuffer to a Blob](https://bun.sh/guides/binary/arraybuffer-to-blob?llms=1)
- [Convert an ArrayBuffer to a Buffer](https://bun.sh/guides/binary/arraybuffer-to-buffer?llms=1)
- [Convert an ArrayBuffer to a string](https://bun.sh/guides/binary/arraybuffer-to-string?llms=1)
- [Convert an ArrayBuffer to a Uint8Array](https://bun.sh/guides/binary/arraybuffer-to-typedarray?llms=1)
- [Convert an ArrayBuffer to an array of numbers](https://bun.sh/guides/binary/arraybuffer-to-array?llms=1)

### Guides: Processes

- [Get the process uptime in nanoseconds](https://bun.sh/guides/process/nanoseconds?llms=1)
- [Listen for CTRL+C](https://bun.sh/guides/process/ctrl-c?llms=1)
- [Listen to OS signals](https://bun.sh/guides/process/os-signals?llms=1)
- [Parse command-line arguments](https://bun.sh/guides/process/argv?llms=1)
- [Read from stdin](https://bun.sh/guides/process/stdin?llms=1)
- [Read stderr from a child process](https://bun.sh/guides/process/spawn-stderr?llms=1)
- [Read stdout from a child process](https://bun.sh/guides/process/spawn-stdout?llms=1)
- [Spawn a child process](https://bun.sh/guides/process/spawn?llms=1)
- [Spawn a child process and communicate using IPC](https://bun.sh/guides/process/ipc?llms=1)

