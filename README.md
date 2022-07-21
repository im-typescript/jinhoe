## 프로젝트 생성하는 법

1. 해당 폴더 진입
2. npm init --y // 노드js 프로젝트를 먼저 만들기
3. npm i -D typescript ts-node // (-g 전역으로 설치되어있지 않을 경우를 대비해) 개발환경에 typescript, ts-node 패키지 설치 
4. npm i -D @types/node // 자바스크립트로 개발된 라이브러리를 타입스크립트에서 쓸 수 있게 @types/??? 설치
// 3, 4의 설치과정을 진행하면 설치한 패키지들의 목록이 package.json에 자동으로 등록됨
(package.json이 이미 있다면, npm i 로 전부 설치 - 다른 사람의 프로젝트를 받는 등의 경우 node_modules 폴더는 이렇게 자동으로 생성/파일로 주고받지 않음)
5. tsc --init // 타입스크립트 프로젝트 생성 - tsconfig.json 생성됨
6. tsconfig.json 내용 적절하게 설정 - 53페이지에 설명
7. mkdir -p src/utils
8. package.json 파일에 npm스크립트 추가 -> dev, build 명령을 추가하여 npm run dev, npm run build 명령어를 통해 "ts-node src" / "tsc && node dist" 를 실행할 수 있게 됨
9. src 폴더 바로 아래에 index.ts -> 프로젝트의 시작 함수(엔트리 함수) 파일명 index로 지으면 파일명 생략가능 - ts-node ./src 명령어만으로 src폴더 아래 index.ts가 자동실행
