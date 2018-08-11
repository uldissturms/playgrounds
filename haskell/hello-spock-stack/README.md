### stack

* `stack build --fast --pedantic` - initial build will download and install GHC (will take a while)
* `ghcid -T :main` - run app in watch mode

### issues

need to specify the following in `stack.yaml` to work around Spock install issues (v0.13):

```yaml
extra-deps:
 - Spock-0.13.0.0
 - Spock-core-0.13.0.0
 - reroute-0.5.0.0
```
