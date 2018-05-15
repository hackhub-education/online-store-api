# Online-store-api

## Description
Online store api server.

## Get Started
1. Fork this repo, then clone your forked repo.
2. `cd online-store-api`
3. Install dependencies: `npm install`.
4. Run node server: `node app` or `nodemon app` if you have installed `nodemon`.

## API List

### Host: https://store-api.webdxd.com

### Note: if the API is `token required`, you need to set your jwt token in the header as below:
```
header: {
  Authorization: Bearer JSON_WEB_TOKEN_STRING.....
}
```

### POST `/auth/login`
* **Description:** authenticate a user.
* **Request body:**
```
{
  email: String,
  password: String
}
```
* **Response**
```
{
  profile: Object,
  token: String,
  error: Object,
  success: Bool
}
```
### POST `/auth/signup`
* **Description:** create a user and authenticate.
* **Request body:**
```
{
  email: String,
  password: String,
  name: String
}
```
* **Response**
```
{
  profile: Object,
  token: String,
  error: Object,
  success: Bool
}
```

### GET `/item`
* **Description:** get all items.
* **Response**
```
{
  items: Array,
  error: Object,
  success: Bool
}
```

### POST `/item` (token required)
* **Description:** post a new item
* **Request body:**
```
{
  name: String,
  description: String,
  price: Number,
  imageUrl: String(optional)
}
```
* **Response**
```
{
  item: Object,
  error: Object,
  success: Bool
}
```
### DELETE `/item/:id` (token required)
* **Description:** delete an item.
* **Url params:** mongo object id of the item
* **Response**
```
{
  error: Object,
  success: Bool
}
```

### GET `/profile/:id` (token required)
* **Description:** get profile data for specific user
* **Url params:** mongo object id of the user
* **Response**
```
{
  profile: Object,
  error: Object,
  success: Bool
}
```

### PUT `/profile/:id` (token required)
* **Description:** update profile data for specific user
* **Url params:** mongo object id of the user
* **Request body:**
```
{
  name: String(optional),
  location: String(optional),
  phone: String(optional),
  avatarUrl: String(optional)
}
```
* **Response**
```
{
  profile: Object,
  error: Object,
  success: Bool
}
```




