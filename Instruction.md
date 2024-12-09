# E-Library Management.

## Running the Server

##### Start the server on PORT 9090. Ensure strict adherence to this port number.

## Project Overview

##### You are tasked with building an API for a E-Library Management. The project should include the following features.
- Register And Login JWT use and cooike set.
- CURD Operation performance For Books.
- Borrow/Return Book.

## Project Link.
- [This Project Github Link](https://github.com/jeelnarola/E-library.git)
-   

## Follow these instructions strictly.

### Implement in MVC Structure.

#### Database Connection.
1. Create a 'configs' folder. Inside this folder, create a file named 'db.configs.js'. Write logic to connect to MongoDB using an online database such as MongoDB Atlas.

#### Database Schema Design.

2. Create a 'models' folder.
    - create a file named 'auth.models.js' with the following schema.
```
username,
email,
password
```

3. create a file named 'books.models.js' with the following schema.

```
title,
author,
genre,
availability: { type: Boolean, default: true },
borrowAdd:[
    {
        userId:{type:mongoose.Schema.Types.ObjectId, ref:'User'}, // Your User Schema Id And Ref...
        borrowDate:{type:Date,default:Date.now()},
        returnDate:{type:Date},
    },
],
returnBy:{type:Boolean,default:false},
createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true}  // Your User Schema Id And Ref...
```

## Sign Up and Login.

### POST route - Sign Up
- Endpoint: Create a POST route at ```/api/auth/register```.
- JWT authentication Use.
- After a successful Sign, set cookies in the browser with the user's Token.
- Within the form, provide the following input fields with corresponding IDs:
    - username
    - password
    - email

### POST route - Login.
- Create a POST route named ```/api/auth/login```.
- JWT authentication Use.
- Within the form, provide the following input fields with corresponding IDs:
    - email
    - password
- After a successful login, set cookies in the browser with the user's Token.

## E-Library Management API EndPoint.

### GET route :- All Books Show.
- Create a GET route at ```/api/book/show```.

### GET route :- single Books Show.
- Create a GET route at ```/api/book/single/:id```.

### POST route :- Create Books.
- Create a Post route at ```/api/book/create```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup True to Create A Books And False to res message Unauthorize.

### POST route :- Borrow Books.
- Create A Post router at ```/api/book/borrow/:id```
EX:- API Hit ``` localhost:9090/api/book/borrow/674610e601bc7c8daf54b354```

### POST route :- Return Books.
- Create A Post router at ```/api/book/return/:id```
EX:- API Hit ``` localhost:9090/api/book/return/674610e601bc7c8daf54b354```

### PATCH route :- Update Books.
- Create a Patch route at ```/api/book/update/:id```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Books And False to res message Unauthorized
- Only Update Your Books.

### DELETE route :- DELETE Book.
- Create a Delete route at ```/api/book/delete/:id```.
- send a response containing all available event.
- Middleware Use And Check Login || Signup Required True to Update A Books And False to res message Unauthorized
- Only Delete Your Books.

## Routes

### User || Auth.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```POST```    | ```/api/auth/register```   | User Register.   |
| ```POST```    | ```/api/auth/login```   | User Login.   |\


### Books.

| Method   | EndPoint | Description |
|----------|----------|----------|
| ```GET```    | ```/api/book/show```   | Books Fetch all items.   |
| ```GET```    | ```/api/book/single/:id```   | sinle Book Data With Id.   |
| ```POST```    | ```/api/book/create```   | Books Create .   |
| ```POST```    | ```/api/book/borrow/:id```   | Borrown Books.   |
| ```POST```    | ```/api/book/return/:id```   | Return Books.   |
| ```PATCH```    | ```/api/book/update/:id```   | Books Update With Id.   |
| ```DELETE```    | ```/api/book/delete/:id```   | Books Delete With Id.   |

### Steps:
1. Clone the repository.
```bash
 git clone <repository-url>
```
2. Install dependencies:

``` bash
npm install
```
3. Create a .env file and add your MongoDB connection string:
``` bash
PORT=9090
MONGODB_URL=mongodb+srv://E-library:E-library@cluster0.dgwjmgh.mongodb.net/E-library?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=my_project_Elibray_jwt_SECRET
```

4. Start the server:
``` bash
npm start
```