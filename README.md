# SIGN-PAYLOAD-OFFLINE-PRIVATE-KEY
Step by step guide to use the code. It's for XRPL testnet:

1) Create an empty folder in your desktop and name it as you like.

2) Open that folder with VSC, or when you are in VSC open that folder (or any code editor that allows to work with TypeScrypt).

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

8) Dowonload or copy into your folder the file I have in this project called index.ts 

9) Type in the terminal: tsc -w
(and keep that terminal opened, it must be opened to allow the index.ts file to be compiled into the index.js file)

10) Modify the index.ts file with your data (your private key, public key, and so on).

11) Depending the section of the code you want tu use you have to quote or unquote that section like this:   /* code you don't want to use in that case */. If you want to use the sign section, then the rest of the code has to be quoted as mentioned.

12) Once the fields are populated with your data, to sign a transaction type in the terminal:
node index

13) Then to submit it you have to quote the sign section and unquote the submit section and add the signature obtained in the previous step into the code, then type again in terminal: node index
