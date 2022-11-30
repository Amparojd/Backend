require("dotenv").config();

const App = require ("./App");
require("./database");

async function main (){
    await App.listen(App.get("port"))
    console.log(`server on port ${App.get("port")}`);
}

main()