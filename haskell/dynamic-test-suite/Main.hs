import qualified Data.Text as Text

import PluralizeTest
import Pluralize

main = putStrLn $ Text.unpack . pluralize $ Text.pack "cat"
