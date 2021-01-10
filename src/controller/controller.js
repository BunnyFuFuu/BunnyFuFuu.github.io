import { EventEmitter } from "events";
import { serverURL } from '../constants';

class Controller extends EventEmitter {
    constructor(){
        super();

        // Array of hobby JSONs as returned by get
        /**
         * @type {Array<CardDocument>}
         */
        this.hobbies = [];

        // Array of experience JSONs as returned by get
        /**
         * @type {Array<CardDocument>}
         */
        this.exp = [];

        this.token = "";

        // Array of project JSONs as returned by get
        /**
         * @type {Array<CardDocument>}
         */
        this.projects = [];

        // Binding function calls
        this.get    = this.get.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.init   = this.init.bind(this);
    }

    /**
     * Gets all docs from the database referenced by type
     * @param {string} type 
     */
    async get(type) {
        try {
            const res = await fetch(`${serverURL}${type}/read`, {
                method: "GET"
            });
            const json = await res.json();
            switch(type) {
                case "project":
                    this.projects = json.docs;
                    break;
                case "experience":
                    this.exp = json.docs;
                    break;
                case "hobby":
                    this.hobbies = json.docs;
                    break;
                default: 
                    console.log("Mistake in get");
            }
            return json.docs;
        } catch (e) {
            this.emit("Error", `Uncaught error in reading ${type}`);
        }
    }

    /**
     * Updates doc on the database referenced by type
     * @param {string} type 
     * @param {JSON} doc 
     */
    async update(type, doc) {
        try {
            const res = await fetch(`${serverURL}${type}/update`, {
                method: "PUT",
                headers: {"Authorization": `Bearer ${this.token}`, "Content-Type": "application/json"},
                body: JSON.stringify(doc)
            });
            await this.get(type);
            return res.status == 200;
        } catch (e) {
            this.emit("Error", `Uncaught error in updating ${type}`);
        }
    }

    /**
     * Deletes doc from the database referenced by type
     * @param {string} type 
     * @param {JSON} doc 
     */
    async delete(type, doc) {
        try {
            const res = await fetch(`${serverURL}${type}/delete`, {
                method: "DELETE",
                headers: {"Authorization": `Bearer ${this.token}`, "Content-Type": "application/json"},
                body: JSON.stringify(doc)
            });
            await this.get(type);
            return res.status == 200;

        } catch (e) {
            this.emit("Error", `Uncaught error in deleting ${type}`);
        }
    }

    /**
     * Adds doc to the database referenced by type
     * @param {string} type 
     * @param {JSON} doc 
     */
    async create(type, doc) {
        try {
            console.log(doc)
            const res = await fetch(`${serverURL}${type}/create`, {
                method: "POST",
                headers: {"Authorization": `Bearer ${this.token}`, "Content-Type": "application/json"},
                body: JSON.stringify(doc)
            });
            await this.get(type);
            return res.status == 200;
        } catch (e) {
            this.emit("Error", `Uncaught error in creating ${type}`);
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
        this.token = token.__raw;
    }
}

export default new Controller();