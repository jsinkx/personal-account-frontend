# Personal account frontend

---

## Installation

1. [`Node.js`](https://nodejs.org/)
2. [`pnpm`](https://pnpm.io/installation)
3. [`git`](https://git-scm.com/)
4. Install all dependencies `package.json`

**Warning**: before use `pn` command, need to read alias (check `.bashrc`)

```sh
cd personal-account-frontend
source .bashrc && pn i $ --shamefully-flatten
```

## Dev mode

`pn dev`

## Production mode

```sh
docker build -t pa-frontend-build .
docker run --name pa-fr-build --restart=always -p 3000:3000 -d pa-frontend-build
```

or

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
- react-hook-form
- styled-components
- axios

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`
