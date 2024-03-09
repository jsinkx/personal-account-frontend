# Personal account WISH EDU ecosystem

---

## Installation

1. [`Node.js`](https://nodejs.org/)
2. [`pnpm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
3. [`git`](https://git-scm.com/)
4. Install all dependencies `package.json`

```sh
cd personal-account-frontend
pn i
```

## Dev mode

`pn dev`

## Production mode

```sh
pn build
pn serve
```

## Stack

- Vite
- Typescript
- React 18
- million
- react-router-dom
- react-helmet-async
- styled-components
- axios

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`
