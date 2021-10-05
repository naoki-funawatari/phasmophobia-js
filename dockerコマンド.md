docker-compose build --no-cache
docker-compose up -d
docker-compose down
docker exec -it phasm /bin/bash
docker exec -it phasm-alpine /bin/bash

apt update
apt install -y nodejs
apt install -y aptitude
aptitude install -y npm
npm install -g npm

```
rm -rf /app/node_modules/*
rm -rf /app/package-lock.json
rm -rf /app/yarn.lock
yarn
```

```
rd /s /q node_modules
del /q package-lock.json
del /q yarn.lock
yarn
```

yarn
npm uninstall yarn
npm audit fix --force
npm install yarn
npm update chokidar@^2 --force

cat package.json

# `docker` について

## コマンド

### イメージのビルド

```
docker build -t phasm . --no-cache
```

- `--no-cache` を付けると前回ビルド時のキャッシュを無視する。
- `Dockerfile` を変更したのに設定が反映されない場合等に使用する。
- 基本付けておく方向でいいんじゃないかと思う。

### コンテナの起動

```
docker run --name phasm -p 41900:3000 -v /c/Projects/organization-chart:/app -itd phasm
```

#### ポートの指定

- `-p 41900:3000`
- `create-react-app` で作成したアプリケーションは、基本 `3000` 番ポートを使う。
- `localhost:41900`にアクセスすることで、コンテナ内で起動しているアプリケーションにアクセスできる。

#### ボリュームの指定

- `-v /c/Projects/organization-chart:/app`
- ローカルのディレクトリとコンテナ内のディレクトリを紐づける。（マウントする、という）
- ローカルとコンテナ内のファイルが常に同期した状態となる。
- `Windows` でいうところの `C:\Projects\organization-chart` にあたるパスを `/app` にマウントしている。

### コンテナの停止

```
docker stop phasm
```

### コンテナに入る（Linux の操作）

```
docker exec -it phasm /bin/sh
```

### `react` アプリケーションを実行

- パッケージのインストール

```
yarn
```

- アプリケーションサーバー起動

```
yarn start
```

# `docker-compose` について

## インストール

参考：[Windows における Compose のインストール](https://docs.docker.jp/compose/install.html#windows-compose)

- `PowerShell` を管理者権限で起動し、以下のコマンドを実行する。

```
Invoke-WebRequest "https://github.com/docker/compose/releases/download/1.16.1/docker-compose-Windows-x86_64.exe" -UseBasicParsing -OutFile $Env:ProgramFiles\docker\docker-compose.exe
```

## コマンド

### イメージのビルド

```
docker-compose build --no-cache
```

- `--no-cache` を付けると前回ビルド時のキャッシュを無視する。
- `yml` を変更したのに設定が反映されない場合等に使用する。
- 基本付けておく方向でいいんじゃないかと思う。

### コンテナの起動

```
docker-compose up -d
```

- `-d` を付けるとバックグラウンドでコンテナが起動される。
- コンテナを起動し、さらに中に入りたいという場合以外は付けておく方向でいいんじゃないかと思う。

### コンテナの停止

```
docker-compose down
```

# 参考

```
FROM node:13.8.0-alpine3.11
WORKDIR /app
RUN apk update && \
npm install -g npm && \
npm install -g vue-cli && \
apk add git
ENV HOST 0.0.0.0
EXPOSE 8080
```

今これだけや  
入ってから初回に`yarn install`  
`yarn serve`は毎回やる

# コマンドまとめ

```
docker-compose build --no-cache
docker-compose up -d
docker exec -it phasm /bin/sh
yarn
yarn start

docker build -t phasm . --no-cache
docker run --name phasm -p 41900:3000 -v /c/Projects/organization-chart:/app -itd phasm
docker exec -it phasm /bin/sh

docker stop phasm
docker rm phasm
docker rmi phasm

yarn
yarn start

docker-compose build --no-cache
docker-compose up -d
docker-compose down
```
