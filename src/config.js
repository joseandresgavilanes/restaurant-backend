require('dotenv').config();

module.exports = {
    port : process.env.PORT || 8000,
    nodeEnv : process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET,
    domainHost: process.env.DOMAIN_HOST || 'http://localhost:8000'
}

