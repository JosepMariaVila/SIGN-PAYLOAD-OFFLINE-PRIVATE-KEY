# SIGN-PAYLOAD-OFFLINE-PRIVATE-KEY
Step by step guide to use the code:

1) Create an empty folder in your desktop.

2) Open that folder with VSC, or when you are in VSC open that folder (or any code editor that allows to work with TypeScrypt.

3) Once in VSC create a jason file called tsconfig.json

4) Put inside that file this:

  {
  "compilerOptions": {
    "target": "ES5",
    "module": "CommonJS",
    "sourceMap": true
  }
  }

5) Open terminal and type:
npm install -g typescript

6) After that, type this (creates a basic package.json):
npm init --yes

7) After that type in the temrinal (installs the library):
npm install --save xrpl

8) Type in therminal: tsc -w
(don't close that terminal, it must be opened in order the index.ts file is compiled into the index.js file)

9) Modify the index.ts file with your data.

10) Depending the section of the code you want tu use you have to quote or unquote that section like this:   /* code you don't want to use in that case */. If you want to use the sign section, then the rest of the code has to be quoted as just mentioned.

11) To sign a transaction run the code type in the terminal:
node index

12) Then to submit it you have to quote the sign section and unquote the submit section, then type again in terminal: node index
