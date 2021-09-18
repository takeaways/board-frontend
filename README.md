# Next
- `create-next-app` 
1. 컴파일과 번들링이 자동으로 된다. webpack and babel
2. 자동 리프레쉬(HMR) 기능으로 수정하면 화면에 바로 반영됩니다.
3. 서버사이드 렌더링이 지원됩니다.
4. 스태틱 파일을 지원합니다.
> Next js 모든 페이지 사전 렌더링 (Pre-rendering)  
더 좋은 퍼포먼스  
검색엔진 최적화(SEO) 

# 특징
1. 정적생성
  - 프로젝트가 __빌드__ 하는 시점에 html파일들이 생성
  - 모든 요청에 재사용
  - 퍼포먼스 이유로, 넥스트 js는 정적 생성을 권고
  - 정적 셍성된 페이지들은 CDN에 캐시
  - `getStaticProps` / `getStaticPaths`
  - 마케팅, 블로그 게시물, 제품 목록, 도움말, 문서
2. SSR - Dynamic Rendering __요청시__ 마다 html을 생성
  - 항상 최신 상태 유지
  - `getServerSideProps`
  - 항상 최신 상태 유지
  - 관리자 페이지
  - 분석 차트

# .next 
1. 서버 구동과 돤련된 파일이 있어요
2. Link를 사용한 부분은 화면에 모이면 html파일을 자동으로 생성해줌 get StaticProps
3. production 이랑은 다름 dev는 계속 새로 요청함

## Layout 
- _app 이용  
1. 페이지 전환시 레이아웃을 유지할 수 있습니다.
2. 페이지 전환시 상태값을 유지할 수 있습니다.
3. componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
4. 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
5. 글로벌 css를 이곳에 선언합니다.

## _document
- 서버에서만 렌더링 되는 부분으로 이벤트, css등 브라우저 api를 사용하면 안됩니다.
## set typescript
`npm i -D typescript`  
```json
//tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": "."
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"], // 컴파일 추가
  "exclude": ["node_modules"] // 컴파일 제외
}
```

