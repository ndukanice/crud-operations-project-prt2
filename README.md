# CRUD Project (Week 03)

Small Node.js + Express API to perform CRUD operations on a `products` collection.

Quick start

1. Copy `.env.example` to `.env` and fill `MONGO_URI`.
2. Use your Atlas cluster string with the new database name added, for example:

```text
MONGO_URI=mongodb+srv://<db_username>:<db_password>@cluster0.vqlhitn.mongodb.net/crud_project_db?appName=Cluster0
```
If you need the more common Atlas connection options, you can use:

```text
MONGO_URI=mongodb+srv://<db_username>:<db_password>@cluster0.vqlhitn.mongodb.net/crud_project_db?retryWrites=true&w=majority&appName=Cluster0
```
3. Install dependencies:

```bash
npm install
```

4. Run in development:

```bash
npm run dev
```

API docs

Visit `/api/docs` when the server is running to see Swagger UI.

Endpoints

- `GET /api/products` - list products
- `POST /api/products` - create product (JSON body)
- `GET /api/products/:id` - get product
- `PUT /api/products/:id` - update product
- `DELETE /api/products/:id` - delete product
