-- Credits: https://haskell-at-work.com/episodes/2018-01-13-dynamic-test-suites-in-haskell-using-hspec-and-tasty.html

{-# LANGUAGE OverloadedStrings #-}

module PluralizeTest where

import Control.Monad
import Data.Semigroup
import Data.Text (Text)
import qualified Data.Text as Text
import qualified Data.Text.IO as Text
import Text.Printf

import Pluralize

import Test.Tasty.Hspec

readExamples :: IO [(Text, Text)]
readExamples =
  mapM asPair =<< Text.lines <$> Text.readFile "plurals.csv"
    where
      asPair line =
        case Text.splitOn "," line of
          [input, expected] -> pure (input, expected)
          _ -> fail ("Invalid example line: " <> Text.unpack line)

spec_pluralize :: Spec
spec_pluralize = do
  examples <- runIO readExamples
  forM_ examples $ \(input, expected) ->
    it (printf "pluralizes '%s' to '%s'" input expected) $
      pluralize input `shouldBe` expected
