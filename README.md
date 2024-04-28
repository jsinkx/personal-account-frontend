<div align="center">

<img src="https://cloud.althgamer.ru/assets/static/images/logo/wish-edu-blue-white-logo.webp" alt="WISH EDU" width="100"/>

# WISH EDU personal account

</div>

---

🔹 Frontend web application WISH EDU service - personal account. The heart of ecosystem, provides navigation
to other services, mainly for authentication and watch profiles. Platform based on microservice architecture.

🔹 Personal account itself allow create, fill and present own profile with portfolio, wall and about me
section to other people even those who are not affiliated with the university!

🔹 Coded with best wishes for VISH RUT MIIT.

---

## Stack

- vite
- typescript
- react 18
- million
- react-router-dom
- react-helmet-async
- react-hook-form
- redux toolkit
- styled-components
- MUI
- axios

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`

## Production mode

### By docker

Way without create `.env`

```sh
docker build --build-arg GENERATE_SOURCEMAP=false --build-arg VITE_API_URL=VITE_API_URL --build-arg VITE_CLOUD_URL=VITE_CLOUD_URL --build-arg VITE_IS_BETA=VITE_IS_BETA -t pa-frontend-build  .
```

<strong> Warning: don't forget to create `.env` </strong>

```sh
docker build -t pa-frontend-build .
```

Run build container

```sh
docker run --name pa-frontend-build --restart=always -d -p 80:80 pa-frontend-build
```

### By package manage (don't recommended)

_Check installation part_

```sh
pn build
pn serve
```

## Dev mode & installation

### Via system

1. [`git`](https://git-scm.com/)
2. [`Node.js`](https://nodejs.org/)
3. [`pnpm`](https://pnpm.io/installation)
4. Install all dependencies `package.json`

**Warning**: before use `pn` command, need to read alias in `.bashrc` or `alias.bat`, also instead `pn` can
called `pnpm`

Terminal

```sh
source .bashrc
```

Cmd

```sh
alias.bat
```

Install all dependencies

```sh
cd personal-account-frontend
pn i
```

Run `pn dev`

### Via docker

_WIP_
