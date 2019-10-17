//mongodb+srv://harsh:harshmongo@cluster0-hsbcf.mongodb.net/test?retryWrites=true&w=majority

// password for mongocluster: harshmongo

module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
