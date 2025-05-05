Initialize a simple TS project
npm init -y
npx tsc --init

Change rootDir and srcDir
"rootDir": "./src",
"outDir": "./dist",

Add dependencies
npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install express 

Initialize jest.config.ts
npx ts-jest config:init