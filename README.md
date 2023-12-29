# MERN Blog App

![Blog App)](https://res.cloudinary.com/ddd9ivydu/image/upload/v1703889443/uploads/qjnmleikdglnb1tp18ph.png)

### Prerequisites

**Node version 18.17 or later**

### Cloning the repository

```shell
https://github.com/lozada07/Blog.git
```
## Server Configuration

1. **Environment Files**: Navigate to the `server` folder and create one file `.env`. Add the following content:
    ```plaintext
    MONGODB_URL=

    JWT_SECRET_KEY=
    FRONTEND_URL=
	PORT=

    # Cloudinary Variables
    CLOUD_NAME_CLOUDINARY=
	API_KEY_CLOUDINARY=
	API_SECRET_CLOUDINARY=
	SECURE_CLOUDINARY=
 ```
 
 ### Install Dependencies
```shell
npm i
```
### Start App
```shell
npm run dev
```
## Client Configuration

1. **Environment Files**: Navigate to the `client` folder and create one file `.env.local`. Add the following content:

    ```plaintext
   VITE_BACKEND_URL=http://localhost:8000

   #Emailjs Variables
	VITE_EMAILJS_SERVICE=
	VITE_EMAILJS_TEMPLATE=
	VITE_EMAILJS_API_KEY=
    ```
### Install Dependencies
```shell
npm i
```
### Start App
```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `install`           | Install dependencies of the app |


