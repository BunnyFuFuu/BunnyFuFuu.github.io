import { EventEmitter } from "events";

class Controller extends EventEmitter {
    constructor(){
        super();

        // Array of hobby JSONs as returned by getHobbies
        this.hobbies = [];

        // Array of experience JSONs as returned by getExp
        this.exp = [];

        // Array of project JSONs as returned by getProjects
        this.projects = [];

        // Binding function calls
        this.getHobbies   = this.getHobbies.bind(this);
        this.getExp       = this.getExp.bind(this);
        this.getProjects  = this.getProjects.bind(this);
        this.isAuthorized = this.isAuthorized.bind(this);
    }

    /**
     * Fetches all hobbies from database, returns as JSON
     */
    async getHobbies() {

    }

    async getExp() {

    }

    async getProjects() {

    }

    isAuthorized() {
        // TODO: Integrate Auth0 and use the Management API to determine whether the user has the authority to access management or not
    }
    
}
//https://api.github.com/repos/BunnyFuFuu/Personal-Website/contents/README.md

export default new Controller();