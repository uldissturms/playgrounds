module Hello where

import Data.Text.Titlecase

hello :: String -> String
hello name =
  titlecase $ "hello, " ++ name ++ "!"
