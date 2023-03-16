require("dotenv").config()

const server = () => {
    console.log(`Server Running On ${process.env.APP_HOST}:${process.env.APP_PORT}`);
}
module.exports = { server }
