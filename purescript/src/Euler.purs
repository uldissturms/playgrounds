module Euler where

import Prelude

import Data.List (range, filter)
import Data.Foldable (sum)

ns = range 0 999
multipleOf3Or5 = (\n -> mod n 3 == 0 || mod n 5 == 0)
multiples = filter multipleOf3Or5 ns
answer = sum multiples
