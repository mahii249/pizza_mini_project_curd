
````markdown
# 🍕 Mini Project: Pizza Store CRUD using Express

## 🎯 Objective
Create an Express application to perform **CRUD (Create, Read, Update, Delete)** operations on pizza store items.  
The application will be tested using **Postman**.

---

## 📌 Instructions

### 1. Setup Project Environment
- Create a new folder:
  ```bash
  mkdir pizza-store-crud
  cd pizza-store-crud
````

* Initialize Node.js project:

  ```bash
  npm init -y
  ```

### 2. Install Required Packages

```bash
npm install express nodemon
```

### 3. Create Express Server

* Create a file `index.js` for the server.
* Create a `routes/items.js` file for CRUD operations.

### 4. Define Routes for CRUD Operations

* **GET** → Fetch all pizza items or one by ID
* **POST** → Add a new pizza
* **PUT** → Update an existing pizza by ID
* **DELETE** → Remove a pizza by ID

### 5. Run the Application

Update `package.json` to use Nodemon:

```json
"scripts": {
  "start": "nodemon index.js"
}
```

Run the server:

```bash
npm start
```

Server will start at:

```
http://localhost:3000
```

### 6. Test Application Using Postman

| Method | Endpoint     | Description        | Example Body                            |
| ------ | ------------ | ------------------ | --------------------------------------- |
| GET    | `/items`     | Get all pizzas     | -                                       |
| GET    | `/items/:id` | Get pizza by ID    | -                                       |
| POST   | `/items`     | Add a new pizza    | `{ "name": "Veggie", "price": 200 }`    |
| PUT    | `/items/:id` | Update pizza by ID | `{ "name": "Pepperoni", "price": 300 }` |
| DELETE | `/items/:id` | Delete pizza by ID | -                                       |

---

## 📂 Project Structure

```
pizza-store-crud/
│── index.js
│── package.json
│── routes/
│   └── items.js
```

---

## ⚡ Tech Stack

* **Node.js**
* **Express.js**
* **Nodemon** (development server)

---

