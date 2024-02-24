# 🧭 Compass Center's Internal Resource Management App

## 🛠 Technologies

- Next.js
- TailwindCSS
- TypeScript
- PostgreSQL

## 📁 File Setup

```
\compass
    \components // Components organized in folders related to specific pages
    \pages // Store all pages here
        \api // API routes
    \public // Local assets (minimize usage)
    \utils // Constants, Routes, Classes, Dummy Data
    \styles // CSS files
```

## 🚀 To Start

Follow these steps to set up your local environment:

```
\\ Clone this repository
git clone https://github.com/cssgunc/compass.git
\\ Go into main folder
cd compass
\\ Install dependencies
npm install
\\ Run local environment
npm run dev
```

## Backend Starter

Follow these steps to start up Postgres database:

Make sure you have Docker installed!

```
\\ Spins up local postgres database and pgadmin
docker-compose up -d

\\ Stop and teardown containers
docker-compose down

\\ Stop and teardown containers + volumes (full reset)
docker-compose down -v
```

### Accesing pgAdmin 4

- First go to http://localhost:5050/ on your browser
- Click **Add New Server**
- Fill in the name field with Compass (can be anything)
- Click **Connection** tab and fill in the following:
  - Host name/address: postgres
  - Maintence database: compass
  - Username: postgres
  - Password: admin
- Click **Save** at the bottom to add connection
- Click **Server** dropdown on the left and click through items inside the **Compass** server

## 💡 Dev Notes

- For each task, create a branch in the format '[your name]-[ticket number]-[task description]'
- Only commit your work to that branch and then make a git request to '/main'
