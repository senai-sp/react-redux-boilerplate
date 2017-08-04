# React Redux Boilerplate

#### A comprehensive boilerplate to start your react applications with redux

## Project architecture

We decided to follow and change a little bit of alexnm re-ducks proposal https://github.com/alexnm/re-ducks for the same reasons that made him extend the original ducks proposal.

So we have the following project folder structure:
```
.
├── .editorconfig
├── .eslintrc
├── build/
├── public/
├── src/
│   ├── store/
│   │   ├── index.js
│   │   └── rootReducer.js
│   ├── containers/
│   │   └── HomeContainer.js
│   ├── modules/
│   │   └── auth
│   │       ├── actions.js
│   │       ├── index.js
│   │       ├── operations.js
│   │       ├── reducers.js
│   │       ├── selectors.js
│   │       ├── auth.spec.js
│   │       ├── types.js
│   │       └── utils.js
│   ├── layouts/
│   │   └── DefaultLayout/
│   │       └── index.js //ReactRouter.Route Component with Layout
│   ├── screens/
│   │   └── Home/
│   │       ├── index.js
│   │       ├── HomeScreen.jsx
│   │       └── HomeScreen.spec.jsx
│   └── components/
│       └── ModalButton/
│           ├── index.js // in this file we're just exporting all ModalButton components
│           ├── ModalButtonComponent.jsx
│           └── ModalButtonComponent.spec.jsx
│   
└── configs/
    ├── base.config.js
    ├── prod.config.js
    └── dev.config.js
```
NOTE: We're using the modules name instead of ducks just to keep in a more regular pattern


TODO:
- Define webpack configuration
- Configure test environments
