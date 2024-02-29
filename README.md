# Personal account WISH EDU ecosystem

---

## Installation

1. [`Node.js`](https://nodejs.org/)
2. [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or
   [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [`git`](https://git-scm.com/)
4. Install all dependencies `package.json`

```sh
cd personal-account-frontend
yarn install
```

## Dev mode

`yarn dev`

## Production mode

```sh
yarn build
yarn serve
```

## Stack

- Vite
- Typescript
- React 18
- react-router-dom
- react-helmet-async
- styled-components
- axios

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`
