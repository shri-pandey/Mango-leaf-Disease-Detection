
// const LocationSelector = require('./locationSelector.js');

const locationSelector = new LocationSelector();
locationSelector.selectLocation("London");
console.log(locationSelector.getSelectedLocation()); 



const AuthSystem = require('./authSystem.js');

const authSystem = new AuthSystem();
authSystem.register("user1", "password123");

authSystem.login("user1", "password123");
authSystem.login("user1", "wrongpassword");
authSystem.login("nonexistentuser", "password123");


import jwt from 'jsonwebtoken';
// import ENV from '../config.js'

/** auth middleware */
export default async function Auth(req, res, next){
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization.split(" ")[1];

        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedToken;

        next()

    } catch (error) {
        res.status(401).json({ error : "Authentication Failed!"})
    }
}


export function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}
