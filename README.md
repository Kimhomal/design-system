<h1 align="center">IUI</h1>

<div align="center">

Insurparts React Components Library

[Insurparts UI](https://www.chromatic.com/library?appId=62fdf76586470e80b0a42114&groupPrefix=Components%2FINPUTS)

</div>

- [설치](#설치)
- [실행](#실행)
- [테스트](#테스트)
- [QA](#qa)
- [번들링](#번들링)
- [배포](#배포)
  - [버전 관리](#버전-관리)
  - [패키지 업로드](#패키지-업로드)
- [📦 사용](#-사용)
  - [최신 버전](#최신-버전)
  - [특정 버전](#특정-버전)
- [트러블슈팅](#트러블슈팅)
  - [패키지 사용 또는 배포를 위한 권한 취득](#패키지-사용-또는-배포를-위한-권한-취득)
- [참고](#참고)



## 설치

```sh
npm install
```

## 실행

[Storybook](https://storybook.js.org/)을 실행해 개발 중인 컴포넌트를 확인할 수 있습니다.

```sh
npm run storybook

# http://localhost:6006
```

## 테스트

개발 과정에서 컴포넌트 테스트 코드 작성 시 [Jest](https://jestjs.io)를 사용합니다.

```sh
npm run test
```

## QA

개발이 완료되면 [Chromatic](https://www.chromatic.com)을 통해 QA 서버를 배포합니다.

배포가 완료되면 터미널에 뜨는 주소를 복사해 디자인팀에 공유하고 피드백을 요청합니다.

```sh
npm run chromatic

# https://www.chromatic.com/build?appId=62fdf76586470e80b0a42114&number=41
```

## 번들링

배포 준비를 위해 [Rollup](https://rollupjs.org/)으로 소스 코드를 번들링합니다.

```sh
npm run rollup
```

## 배포

번들링이 완료되면 아래 순서에 따라 배포를 진행합니다.

이때, 배포 중 오류가 발생할 경우 [패키지에 대한 권한을 부여 받았는지](#패키지-사용-또는-배포를-위한-권한-취득) 확인합니다.

### 버전 관리

운영 환경 버전을 올릴 때, 변경 사항에 따라 major/minor/patch 중 하나의 옵션을 선택합니다.

- major: 1.0.0 → 2.0.0
- minor: 1.0.0 → 1.1.0
- patch: 1.0.0 → 1.0.1

```sh
# 운영 환경
npm version major|minor|patch
```

개발 환경 버전을 올릴 때, prerelease 옵션을 사용합니다. preid는 최초 한 번만 설정하면 됩니다.

```sh
# 개발 환경 (rc)
npm version prerelease --preid="rc"
```

### 패키지 업로드

운영 환경으로 배포할 때, 자동으로 latest 태그가 지정됩니다.

```sh
# 운영 환경 (latest)
npm publish
```

개발 환경으로 배포할 때, 태그를 next로 지정해주어야 합니다.

```sh
# 개발 환경 (next)
npm publish --tag next
```

## 📦 사용

### 최신 버전

```sh
# 운영 환경
npm install @insurparts-team/ui
npm upgrade @insurparts-team/ui@latest

# 개발 환경
npm install|upgrade @insurparts-team/ui@next
```

### 특정 버전

```sh
# 운영 환경
npm install|upgrade @insurparts-team/ui@0.0.32

# 개발 환경
npm install|upgrade @insurparts-team/ui@0.0.33-rc.0
```

## 트러블슈팅

<details>
<summary>

### 패키지 사용 또는 배포를 위한 권한 취득

</summary>

1. 깃허브 사이트에서 토큰 발급

   1. 깃허브 Settings 접근

      ![image](https://user-images.githubusercontent.com/95343057/208553588-89c0fd82-28e9-4e31-828c-a2b223b847ab.png)

   2. 왼쪽 사이드바 메뉴 하단에서 Developer settings 메뉴 선택

      ![image](https://user-images.githubusercontent.com/95343057/208554709-45f650da-78d6-4b7d-8b92-e696928a5b62.png)

   3. Personal access tokens > Tokens (classic) 메뉴 선택

      ![image](https://user-images.githubusercontent.com/95343057/208554616-6eb6aa74-72df-42d6-b3c3-4eee1f250b08.png)

   4. Generate new token 버튼 클릭 후 Generate new token (classic) 아이템 선택

      ![image](https://user-images.githubusercontent.com/95343057/208554900-8302dc0e-9ba8-4e74-9899-c4e63c8e3188.png)

   5. Note 항목에 본인이 알아볼 수 있는 이름을 입력하고 Select scopes 중 `write:packages` 스코프를 선택

      ![image](https://user-images.githubusercontent.com/95343057/208555258-8c52c193-35ad-442a-8156-d0d1e87e3e0e.png)

   6. Generate token 버튼을 눌러 토큰 생성 완료

      ![image](https://user-images.githubusercontent.com/95343057/208555429-177e610e-736b-4312-93ba-63d3ab59a55d.png)

   7. 복사 아이콘 버튼을 클릭해 생성된 토큰 복사

      ![image](https://user-images.githubusercontent.com/95343057/208555673-8790b223-745d-418e-a536-6d8b8c3f28de.png)

2. 로컬 환경에서 `.npmrc` 파일에 레지스트리와 토큰 등록

   1. 파일 열기

   ```shell
   vi ~/.npmrc
   ```

   2. 파일에 아래 내용 추가하고 저장

   ```
   @insurparts-team:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken={1번에서 생성한 깃허브 토큰}
   ```

</details>

## 참고

- [How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#publishing-your-library)
- [Build And Publish A React Component Library](https://www.youtube.com/watch?v=hf6Z8OZanec)
- [GitHub Packages로 npm 패키지 배포](https://min9nim.vercel.app/2021-05-17-github-packages)
