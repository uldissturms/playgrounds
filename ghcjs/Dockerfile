FROM haskell

ENV PATH /root/.cabal/bin:$PATH
WORKDIR /opt

RUN apt-get update
RUN apt-get install -y git make cpp libtinfo-dev curl dh-autoreconf

RUN cabal update
RUN cabal install cabal-install

RUN git clone https://github.com/ghcjs/ghcjs-prim.git
RUN git clone https://github.com/ghcjs/ghcjs.git
RUN cabal install --reorder-goals ./ghcjs ./ghcjs-prim

RUN ghcjs-boot --dev

CMD sleep infinity
