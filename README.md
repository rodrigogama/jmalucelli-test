# JMalucelli Test

## Installing
The only dependency to run the project is NodeJS. If it is not installed, please download it here https://nodejs.org/en/download.

After download and install NodeJS, go to the root folder and run the following command to install all node packages:

```
$ npm install
```

## Scrips

### Running locally
The following command will start webpack-dev-server at http://localhost:3000/
```
npm run start
```

### Running tests
Tests with Enzyme and Jest.
```
npm run test
```

## Project Structure
```
.
├── src                     # Source files 
│   ├── components          # Components that will be part of a page
│   ├── pages               # Pages that import reusable components
│   └── sass                # Sass files such as variables and reusable css classes 
│   └── services            # Services that connect with the API (in this case it's just a dummy call)
│   └── constants           # constants such as BASE_URL and ACCESS_TOKEN
└── README.md
```