import { EventEmitter } from "events";

class Controller extends EventEmitter {
    constructor(){
        super();

        // Repositories fetched from Github
        this.repos = [];

        // Site config files received
        this.configs = [];

        // Binding function calls
        this.getReposList = this.getReposList.bind(this);
        this.getReposCfg  = this.getReposCfg.bind(this);
    }

    async getReposList() {
        const res = await fetch(`https://api.github.com/users/BunnyFuFuu/repos`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        // res.json().then(json => this.repos = json.map(r => r["name"]));
        res.json().then(json=>console.log(json))
    }
    
    async getReposCfg() {
        await this.getReposList();
        const res = await Promise.all(this.repos.map(async (r) => await fetch(`https://api.github.com/repos/BunnyFuFuu/${r}/contents/src/site.json`)));
        const jsons = await Promise.all(res.filter(r => r.status == 200).map(async (r) => await r.json()));
        this.configs = jsons.map(r => r["download_url"]);
    }

    isAuthorized() {
        // TODO: Integrate Auth0 and use the Management API to determine whether the user has the authority to access management or not
    }
    
}
//https://api.github.com/repos/BunnyFuFuu/Personal-Website/contents/README.md

export default new Controller();