```sh
brew install gpg # install gpg
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 # add rvm gpg key
jurl -sSL https://get.rvm.io | bash -s stable # install rvm
# update your PATH to contain $HOME/.rvm/bin
rvm install 2.3 # install ruby - replace 2.3 with the required version
rvm use 2.3 --default # use ruby 2.3 and set it as default
# gem install berkshelf # install berkshelf
gem install bundler # install bundler if not already present
bundle init
# add chef to Gemfile
bundle install # install chef specified in Gemfile
```
