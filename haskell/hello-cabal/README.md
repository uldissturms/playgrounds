# https://cabal.readthedocs.io/en/latest/

### standard commands

* `cabal init` - create new project
* `cabal build` - build project
* `cabal repl` - try out library

### [new commands](https://cabal.readthedocs.io/en/latest/nix-local-build-overview.html)

* `cabal new-build` - builds in a nix way - sandboxed (automatically resolves dependecies and installs them)
* `cabal new-repl` - uses dependencies installed by command above
* `cabal new-run` - runs build executable
* `cabal new-test` - runs tests
