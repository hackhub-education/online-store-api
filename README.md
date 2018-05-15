# Online-store-api

## Description
Online store api server.

## Get Started
1. Fork this repo, then clone your forked repo.
2. `cd web-tweet-express`
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
  username: String,
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
  username: String,
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

### GET `/tweet`
* **Description:** get all tweets.
* **Response**
```
{
  tweets: Array,
  error: Object,
  success: Bool
}
```

### POST `/tweet` (token required)
* **Description:** post a new tweet
* **Request body:**
```
{
  content: String,
  imageUrl: String
}
```
* **Response**
```
{
  tweet: Object,
  error: Object,
  success: Bool
}
```
### DELETE `/tweet/:id` (token required)
* **Description:** delete a tweet.
* **Url params:** mongo object id of the tweet
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
  name: String,
  location: String,
  bio: String,
  avatarUrl: String
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




