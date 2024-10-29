const passport = require("passport");

const authenticateGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });


const googleAuthCallback = passport.authenticate("google", {
	failureRedirect: "https://fundly.vercel.app/auth", 
});


module.exports = {authenticateGoogle, googleAuthCallback };
