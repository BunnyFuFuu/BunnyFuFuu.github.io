import { EventEmitter } from "events";
import { serverURL } from '../constants';
class Controller extends EventEmitter {
    constructor(){
        super();

        // Array of hobby JSONs as returned by getHobbies
        this.hobbies = [];

        // Array of experience JSONs as returned by getExp
        this.exp = [];

        this.token = "";

        /**
         * @type Array<ProjectDocument>
         */
        this.projects = [];

        // Binding function calls
        this.getHobbies   = this.getHobbies.bind(this);
        this.getExp       = this.getExp.bind(this);
        this.getProjects  = this.getProjects.bind(this);
        this.init         = this.init.bind(this);
    }

    /**
     * Fetches all hobbies from database, returns as JSON
     */
    async getHobbies() {
        try {
            const res = await fetch(`${serverURL}hobby/read`, {
                method: "GET"
            });
            const json = await res.json();
            this.hobbies = json.docs;
        } catch (e) {
            this.emit("Error", `Uncaught error in getHobbies()`);
        }

    }

    /**
     * Fetches all experiences from database, returns as JSON
     */
    async getExp() {
        try {
            const res = await fetch(`${serverURL}experience/read`, {
                method: "GET",
                headers: {"Access-Control-Allow-Origin": "*"},
            });
            const json = await res.json();
            this.exp = json.docs;
            console.log(this.exp);
        } catch (e) {
            this.emit("Error", `Uncaught error in getExp()`);
        }
    }

    /**
     * Fetches all projects from database, returns as JSON
     */
    async getProjects() {
        try {
            const res = await fetch(`${serverURL}project/read`, {
                method: "GET"
            });
            const json = await res.json();
            this.projects = json.docs;
        } catch (e) {
            this.emit("Error", `Uncaught error in getExp()`);
        }
    }

    /**
     * 
     * @param { string } token JWT for backend protected endpoint calls
     */
    init(token) {
        if(!token) {
            alert('Failed to retrieve token. Perhaps you do not have authorization?');
            return;
        }
        this.token = token;
    }
    
}

export default new Controller();