const env = process.env.NODE_ENV;
let config = null;
config = require('./config.development.js');
if (env) {
    config = require(`./config.${env}.js`);
}
export default config



  
