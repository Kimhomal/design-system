# Insurparts React Components Library

[Insurparts UI docs 바로가기](https://62fdf76586470e80b0a42114-wigzzoejxu.chromatic.com)

## `npm run rollup`

`src` 폴더의 내용들을 build\
[rollup.js 공식홈페이지](https://rollupjs.org/guide/en)

## `npm run test`

test code 실행\
[jest 공식홈페이지](https://jestjs.io)

## `npm publish`

insurparts react components library publish\
[npm publish 참고문헌](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#publishing-your-library)

## `npm run storybook`

storybook library 실행\
[storybook 공식홈페이지](https://storybook.js.org)

## `npm run chromatic`

```zsh
# default setting
yarn add -D chromatic
npx chromatic --project-token=ebffb6fb9bee

npm run chromatic
```

## 패키지 사용 권한 설정

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

## 참고문헌

[How to Create and Publish a React Component Library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#publishing-your-library)\
[Build And Publish A React Component Library](https://www.youtube.com/watch?v=hf6Z8OZanec)\
[Github package publish 방법](https://min9nim.vercel.app/2021-05-17-github-packages)
