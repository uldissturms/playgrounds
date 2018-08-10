module Main where

import System.Environment
import Hello

main = mapM_ (putStrLn . hello) =<< getArgs
