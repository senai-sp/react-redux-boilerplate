# React Redux Boilerplate

#### A comprehensive boilerplate to start your react applications with redux

## Project architecture

We decided to follow and change a little bit of alexnm re-ducks proposal https://github.com/alexnm/re-ducks for the same reasons that made him extend the original reducks proposal.

So we have the following project folder structure:
```
containers/
├── HomeContainer.js
components/
├── Home/
    ├── HomeComponent.jsx
    ├── HomeComponent.spec.jsx
    ├── index.js // in this file we're just exporting all Home components
modules/
├── home
    ├── actions.js
    ├── index.js
    ├── operations.js
    ├── reducers.js
    ├── selectors.js
    ├── home.spec.js
    ├── types.js
    ├── utils.js
```
NOTE: We're using the modules name instead of ducks just to keep in a more regular pattern


TODO:
- Define webpack configuration
- Configure test environments
