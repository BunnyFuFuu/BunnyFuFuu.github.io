import { EventEmitter } from "events";

class Controller extends EventEmitter {
    constructor(){
        super();

        // Array of hobby JSONs as returned by getHobbies
        this.hobbies = [];

        // Array of experience JSONs as returned by getExp
        this.exp = [];

        /**
         * @type Array<ProjectDocument>
         */
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
        try {
            const res = await fetch("url placeholder for now", {
                method: "GET"
            });
            this.hobbies = await res.json();
        } catch (e) {
            this.emit("Error", `Uncaught error in getHobbies()`);
        }

    }

    /**
     * Fetches all experiences from database, returns as JSON
     */
    async getExp() {
        try {
            const res = await fetch("url placeholder for now", {
                method: "GET"
            });
            this.hobbies = await res.json();
        } catch (e) {
            this.emit("Error", `Uncaught error in getExp()`);
        }
    }

    /**
     * Fetches all projects from database, returns as JSON
     */
    async getProjects() {
        try {
            const res = await fetch("url placeholder for now", {
                method: "GET"
            });
            this.hobbies = await res.json();
        } catch (e) {
            this.emit("Error", `Uncaught error in getExp()`);
        }
    }

    // May not necessarily need this, can authenticate endpoint side
    isAuthorized() {
        // TODO: Integrate Auth0 and use the Management API to determine whether the user has the authority to access management or not
    }
    
}

export default new Controller();