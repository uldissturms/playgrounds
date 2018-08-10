### GHC

  make sure to be using the latest version (8.4.3 at the time of writing)

### Install

##### What is Installed

On Mac OS X, the Haskell Platform is installed in two major pieces: GHC and Haskell Platform. They are installed respectively in:

/Library/Frameworks/GHC.framework
/Library/Haskell

Executables are symlinked in /usr/local/bin and should be available in any shell.

##### Versions & Uninstallation

This and prior versions of GHC and Haskell Platform can be found and then easily removed with the uninstallation command line utility:

/Library/Haskell/bin/uninstall-hs

This release includes an experimental command line utility to switch between multiple installed versions of the platform:

/Library/Haskell/bin/activate-hs

Both utilities are safe to run with no arguments, and will give you more information when you do.

##### Configuring Cabal

The cabal command manages the building and installation of packages, both your own, and those it can fetch from the Hackage repository.

The first time you run cabal, a Mac specific configuration is written into the ~/.cabal directory.

If this is the first time you have ever run cabal, it will be made your active configuration.

If you have run cabal in the past, the new settings are in the file config.platform. You might want to review and incorporate some of the settings into your existing config file, or just replace your config file with it entirely.

The configuration sets up cabal to install packages with the same layout as those installed with the Platform. Packages installed per user (--user, the default) are placed in a parallel tree in ~/Library/Haskell.

N.B. Built executables will be symlink'd into ~/Library/Haskell/bin, you probably want to add that to your $PATH by adding this line to your ~/.bash_profile:

export PATH="$HOME/Library/Haskell/bin:$PATH"

N.B. Built executables by the stack tool will be symlink'd into ~/.local/bin, you probably want to add that to your $PATH by adding this line to your ~/.bash_profile:

export PATH="$HOME/.local/bin:$PATH"

In particular, when you upgrade to a new version of stack via the "stack upgrade" command (and you should consider doing so if the installed stack version is well behind the currently released one), it will be installed into the above directory, and will only be used if that directory is placed appropriately in your path.

### Uninstall

  before installing uninstall any previous versions that you might not need using `uninstall-hs`

```sh
cabal update # update list of packages
cabal install cabal-install # install latest cabal-install - at least 2.2
```
