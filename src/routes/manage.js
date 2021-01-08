// Admin page where I can submit new experiences or cards to be added to the website
import React, { Component } from 'react';
import { NavBar } from '../components/navbar';
import controller from '../controller/controller';
import { ASInput } from '../components/input';


export default class Manage extends Component {
    constructor(props) {
        super(props);
        this.doc = {};
        controller.get("project").then(()=>{
            this.setState({arr: controller.projects});
            this.forceUpdate();
        });
        controller.get("exp").then();
        controller.get("hobby").then();
        /**
         * creating: whether we're making new doc
         * editing: whether we're editing/deleting existing doc
         * selected: which one we're editing (if any)
         * type: is it hobby, project, or exp?
         */
        this.state = {
            creating: true,
            editing: false,
            selected: "",
            type: "project",
            arr: controller.projects
        }
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.createButtonClicked = this.createButtonClicked.bind(this);
        this.editingButtonClicked = this.editingButtonClicked.bind(this);
        this.onSelected = this.onSelected.bind(this);
    }

    componentDidMount() {
        this.getArr();
        this.forceUpdate();
    }
    
    getArr() {
        switch(this.state.type) {
            case "project":
                this.setState({arr: controller.projects});
                break;
            case "exp":
                this.setState({arr: controller.exp});
                break;
            case "hobby":
                this.setState({arr: controller.hobbies});
                break;
        }
        return this.state.arr;
    }

    /**
     * Check if creating, editing, deleting, as well as 
     * which one was selected, and call appropriate endpoint
     */
    onSubmit() {
        const title = document.getElementById('title');
        const date = document.getElementById('date');
        const image = document.getElementById('image');
        const link = document.getElementById('link');
        const work = document.getElementById('work');
        const blurb = document.getElementById('blurb');
        const info = document.getElementById('info');

        
        this.doc.title = title.value;
        if (date) this.doc.date = date.value;
        if (image) this.doc.image = image.value;
        if (link) this.doc.link = link.value;
        if (work) this.doc.work = work.value;
        this.doc.blurb = blurb.value;
        this.doc.info = info.value.split('\n');

        if (this.state.editing && this.state.selected) {
            this.doc._id = this.state.arr[this.state.selected]._id;
            controller.update(this.state.type, this.doc).then(i=>console.log("Update: ", i));
            // Update ref with new controller values if applicable
            this.doc = {};
            this.setState({ selected: null });
            return
        }
        console.log(this.doc);
        controller.create(this.state.type, this.doc).then(i=>console.log("Create: ", i));
    }

    createButtonClicked() {
        this.setState({creating: true, editing: false, selected: null});
    }

    editingButtonClicked() {
        this.setState({creating: false, editing: true});
    }

    onSelected(event) {
        this.setState({selected: event.target.value});
    }

    onTypeChange(event) {
        this.setState({type: event.target.value});
        this.getArr();
    }

    delete() {
        if (!this.state.selected)  return alert("Nothing selected");
        const toDelete = this.state.arr[this.state.selected];
        controller.delete(this.state.type, toDelete).then(i=>console.debug("Delete: ", i));
    }


    render() {
        return (
            <div className="expPage">
                <div className="header"><NavBar/></div>
                <div className="content">
                        <h1>Database Management Dashboard</h1>
                        <button onClick = {this.createButtonClicked}>Create</button>
                        <button onClick = {this.editingButtonClicked}>Edit</button>
                        <select onChange = {this.onTypeChange} value={this.state.value}>
                            <option value="project">Project</option>
                            <option value="exp">Experience</option>
                            <option value="hobby">Hobby</option>
                        </select>
                        {
                            this.state.editing && 
                            <select onChange={this.onSelected} value={this.state.selected}>
                                {this.state.arr.map(i=> <option value={this.state.arr.findIndex(i)}>{i.title}</option>)}
                            </select>
                        }
                        {this.state.type === "project" 
                        ? 
                        <form name="toDB">
                            <label>Title:</label><br/>
                            <ASInput id="title" value={this.state.selected ? this.state.arr[this.state.selected].title: ""}/><br/>
                            <label>Date:</label><br/>
                            <ASInput id="date" value={this.state.selected ? this.state.arr[this.state.selected].date: ""}/><br/>
                            <label>Image:</label><br/>
                            <ASInput id="image" value={this.state.selected ? this.state.arr[this.state.selected].image: ""}/><br/>
                            <label>Link:</label><br/>
                            <ASInput id="link" value={this.state.selected ? this.state.arr[this.state.selected].link: ""}/><br/>
                            <label>Work:</label><br/>
                            <ASInput id="work" value={this.state.selected ? this.state.arr[this.state.selected].work: ""}/><br/>
                            <label>Blurb:</label><br/>
                            <ASInput id="blurb" value={this.state.selected ? this.state.arr[this.state.selected].blurb: ""}/><br/>
                            <label>Info:</label><br/>
                            <ASInput id="info" value={this.state.selected ? this.state.arr[this.state.selected].info: ""} /><br/>
                            
                        </form>
                        : this.state.type === "exp" 
                        ? 
                        <form name="toDB">
                            <label>Title:</label><br/>
                            <ASInput id="title" value={this.state.selected ? this.state.arr[this.state.selected].title: ""}/><br/>
                            <label>Date:</label><br/>
                            <ASInput id="date" value={this.state.selected ? this.state.arr[this.state.selected].date: ""}/><br/>
                            <label>Image:</label><br/>
                            <ASInput id="image" value={this.state.selected ? this.state.arr[this.state.selected].image: ""}/><br/>
                            <label>Link:</label><br/>
                            <ASInput id="link" value={this.state.selected ? this.state.arr[this.state.selected].link: ""}/><br/>
                            <label>Blurb:</label><br/>
                            <ASInput id="blurb" value={this.state.selected ? this.state.arr[this.state.selected].blurb: ""}/><br/>
                            <label>Info:</label><br/>
                            <ASInput id="info" value={this.state.selected ? this.state.arr[this.state.selected].info: ""} /><br/>
                        </form>
                        :
                        <form name="toDB">
                            <label>Title:</label><br/>
                            <ASInput id="title" value={this.state.selected ? this.state.arr[this.state.selected].title: ""}/><br/>
                            <label>Image:</label><br/>
                            <ASInput id="image" value={this.state.selected ? this.state.arr[this.state.selected].image: ""}/><br/>
                            <label>Blurb:</label><br/>
                            <ASInput id="blurb" value={this.state.selected ? this.state.arr[this.state.selected].blurb: ""}/><br/>
                            <label>Info:</label><br/>
                            <ASInput id="info" value={this.state.selected ? this.state.arr[this.state.selected].info: ""} /><br/>
                        </form>
                        /*TODO: change this to render the correct form */} 
                        <button onClick={this.onSubmit}>Create</button>
                        <button onClick={this.delete}>Delete selected on dropdown</button>
                </div>
            </div>
        )
    }
}