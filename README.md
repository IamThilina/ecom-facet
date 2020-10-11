## Otrium Facet Panel

#### Technologies & Libraries used

- Written in **Typescript**
- UI Library **React/React Hooks**
- Complex state managed by **Redux**
- Design systems inherits **Material UI**
- Styled using **SASS**
- Class-names as per **BEM**
- Tests run by **Jest**
- React Components tested using **React Testing Library**
- Custom React Hooks tested using **React Hooks Testing Library**
- Dependency managed by **NPM**
- Bundled using **Web Pack**
- Transpilled using **Babel**
- Linted using **EsLint**
- Formatted using **Prettier**

#### Project Structure

#####Please Note, 
This project structure is suitable for a purpose of this type. Definitely this isn't gonna scale for an enterprise ready solution.

```

.
├── dist                        # bundled & transpilled code resides here
├── public                      # publicly exposable assets of the project goes here
├── src                         # source files of the application resides here
│   ├── components              # all the components, their unit tests and styles are placed here
│   ├── contexts                # all the react contexts the application uses are defined here
│   ├── data                    # all dummy data to mimic the back end data sources goes here
│   ├── factories               # all methods that converts back end data to fe frindly data structures goes here
│   ├── hooks                   # all the custom hooks built in tight coupling with this projects buiness rules goes here
│   ├── providers               # all the react providers the application uses are defined here
│   ├── reducers                # all the reducers used to handle complex state management goes here
│   ├── services                # all the methods used to fetch data from back end goes here
│   └── types                   # all the type-script type definitions of the project goes here
│
│── .babelrc                    # all the configurations required for transpilling goes here
│── .eslintrc.json              # all the configurations required for linting oes here
│── .gitignore                  # all the files/folders shouldn't be commited must be mentioned here
│── .prettierrc                 # all the configurations required for formatting the source files goes here
│── jest.config.js              # all the configurations required for runniing tests goes here
│── package.json                # all the dependencies and meta data about the project goes here
│── package-lock.json           # automatically created dependency resolution logs goes here 
│── README.md                   # readme of the project goes here
│── tsconfig.json               # all the configurations required for type-script checks goes here
└── webpack.config.js           # all the configurations required for bundling of source files goes here
.
```

#### How to

##### Prerequisits

node >= v14.4.0 

##### How to run the app

```
$ npm install
$ npm start
```

##### How to run the tests

```
$ npm test
```

##### How to verify types

```
$ npm run typecheck
```

##### How to verify linting

```
$ npm run lint
```
