### Repo Built by:

|  [Jeremy J McWilliams](https://jeremyjmcwilliams.com)|
| :---------------------------------------------------: |
| [<img src="./profile/jeremy-mcwilliams.jpg" width = "200" />](https://github.com/J2Macwilliams)   |
|Full Stack Developer |
| [<img src="https://github.com/favicon.ico" width="30"> ](https://github.com/J2Macwilliams)   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="30"> ](https://www.linkedin.com/in/jeremyjmcwilliams/) | 

---
# [Check't](https://dev.d2tz6gamr0cndr.amplifyapp.com/)

`Status:`
*deployed & further development*

---
## `Pitch:` 
Groceries, Errands, Chores! Stay organized with this dynamic responsive checklist.


### `Goal:` 

| Goal   |   Description|
|--------|------------|
|Responsiveness| Utilized Tailwind CSS to add responsive styles based on element
|Functionality| Color Coded Store Creation, Filter Item by store, intuitive UI
|Performance | AWS Amplify CLI connected resources that streamline performance
| Auth | Cognito - handling Auth and Partition key for item creation
|UI/UX| Tailwind CSS

<br/>

### `Tech Stack`
- Vue
- Typescript
- Vuex - (State Management)
- Tailwind CSS
- AWS
  - Amplify
  - Cognito
  - Lambda
  - DynamoDB
  - Cloud Formation

---

### DynamoDB (a NoSQL db)
*AMPLIFY CLI provided basic CRUD functionality*

*both tables only required composite primary key in creation, POSTs defines shape of the tables*


### `Tables`

| key     | Description |
| --------|-------------|
| Partition | Cognito UserID - included from Sign In |
| Sort | Id - UUID - V4 |


<br />



`Stores table`
| column  | Description |
| --------|-------------|
| name | string |
| color | string |

`Items table`

| column  | Description |
| --------|-------------|
| name | string |
| qty | number  |
| store | map - based upon passed props from select object |
|bought | boolean - used for toggle defining UI |


---
### `Vuex`

*State Management*


> Abstracted Shopping list (State, Getters, Actions, Mutations) into ItemsModule
*Utilized map(Getters, Actions, Mutations) to handle state*

*Computed filtered items handles items display with filter* 

___

<br/>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
