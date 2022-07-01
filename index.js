const app = require("./app")
const config = require = require("./config/config")

const port = config.app.port;

app.listen(port, () => {
    console.log(`app is running at https://localhost:${port}`)
})