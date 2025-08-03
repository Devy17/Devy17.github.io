---
title: "Node.js 설치"
date: "2025-08-03"
description: "OS별 Node.js 설치 방법"
categories:
  - "Javascript"
tags:
  - "develop"
image: node-js.webp
---

본문의 버전은 2025년 8월 3일 기준으로 작성되었으며,  
이후 버전 업데이트에 따라 설치 방법이 변경될 수 있습니다.

## Windows

### npm 기준

```powershell
# Chocolatey 설치
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

# Node.js 설치
choco install nodejs --version="22.18.0"

# Node.js 버전 확인
node -v # Should print "v22.18.0".

# npm 버전 확인
npm -v # Should print "10.9.3".

```

### yarn 기준

```powershell
# Chocolatey 설치
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"

# Node.js 설치
choco install nodejs-lts --version="22"

# Node.js 버전 확인
node -v # "v22.18.0"

# Yarn 설치
corepack enable yarn

# Yarn 버전 확인
yarn -v
```

---

## Mac, Linux

### npm 기준

```bash
# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# shell 재시작
\. "$HOME/.nvm/nvm.sh"

# Node.js 설치
nvm install 22

# Node.js 버전 확인
node -v # "v22.18.0".
nvm current # "v22.18.0".

# npm 버전 확인
npm -v # "10.9.3".
```

### yarn 기준

```bash
# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# Node.js 설치
nvm install 22

# Node.js 버전 확인
node -v # "v22.18.0"
nvm current # "v22.18.0"

# Yarn 설치
corepack enable yarn

# Yarn 버전 확인
yarn -v
```

> ## npm, yarn
>
> **npm**은 Node.js의 기본 패키지 관리자로, 자바스크립트 패키지의 설치, 업데이트, 삭제 등을 관리합니다.  
> **yarn**은 npm의 대안으로 나온 패키지 관리자로, 빠른 설치 속도와 안정적인 버전 관리가 특징입니다.

## 참고

- [Node.js 공식 사이트](https://nodejs.org/)
- [Chocolatey 공식 사이트](https://chocolatey.org/)
- [nvm Github 레포지토리](https://github.com/nvm-sh/nvm)
- [npm 공식 사이트](https://www.npmjs.com/)
- [Yarn 공식 사이트](https://classic.yarnpkg.com/)
