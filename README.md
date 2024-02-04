# Fall 2023 - Spring 2024: A Notion-UI website to speed up data lookup for Compass Center

## Technologies
Next.js, TailwindCSS, Typescript, PostgreSQL

## File setup
```
\compass
    \components
        should organize the components on folders pointing to the specific pages it is displayed
    \pages
        store all pages
        \api
    \public 
        local assets - try to minimize them
    \routes
        routing logic
    \styles
        css files go here
```

## To start
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

## Dev notes
- For each task, create a branch in the format '[your name]-[ticket number]-[task description]'
- Only commit your work to that branch and then make a git request to '/main'