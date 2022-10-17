const env = process.env.NODE_ENV;
require('dotenv').config();

const dev ={
    index: {
        port: 3001
    },
    db: {

    }
};

const test = {};
const production = {};

const config = {
    dev,
    test,
    production
};

export default config[env];