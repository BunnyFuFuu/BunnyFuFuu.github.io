import { EventEmitter } from "events";

class Controller extends EventEmitter {
    constructor(){
        super();

        // Repositories fetched from Github
        this.repos = [];

        // Binding function calls
        this.getReposList = this.getReposList.bind(this);
    }

    async getReposList() {
        const res = await fetch(`https://api.github.com/users/BunnyFuFuu/repos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await res.json();
        this.repos = json.map(r => r["name"]);
        console.log(json);
    }
    
}
//https://api.github.com/repos/BunnyFuFuu/Personal-Website/contents/README.md

export default new Controller();