module Main where

import Hello

main :: IO ()
main =
  case hello "cabal" of
    "Hello, Cabal!" -> return ()
    s               -> fail ("Unexpected result: " ++ s)
