import React, {Component} from 'react'
import { createGroup } from '../Auth/Admin'

class CreateGroup extends Component{
    constructor(){
        super()
        this.state = {
            id: "",
            mentor:
            {
                name: "",
                email:""
            },
            students: [
                { name: "", email: "" },
                { name: "", email: "" },
                { name: "", email: "" }
            ],
            supervisors: [
                { name: "", email: "" },
                { name: "", email: "" }
            ],
            error:"",
            open:false
        }
    }

    handleChange = (str) => (event) => {
        this.setState({ 
            error: "",
            open: false 
        });
        this.setState({
            [str]: event.target.value
        });
    };
    handleMentor (event) {
        this.setState({ 
            error: "",
            open: false
        });
        const { mentor } = this.state;
        const name = event.target.name;
        const value = event.target.value
        mentor[name] = value;
        this.setState({
            mentor
        });
    };

    handleStudents(event,i) {
        this.setState({ 
            error: "",
            open: false
        });
        const { students } = this.state;
        const name = event.target.name;
        const value = event.target.value
        students[i][name] = value;
        this.setState({
            students
        });
    };

    handleSupervisors(event,i) {
        this.setState({ 
            error: "",
            open: false
        });
        const { supervisors } = this.state;
        const name = event.target.name;
        const value = event.target.value
        supervisors[i][name] = value;
        this.setState({
            supervisors
        });
    };

    clickSubmit = (event) => {
        event.preventDefault();
        const {mentor,id,students,supervisors} = this.state
        const group = {
            id: id,
            mentor: mentor,
            students: students,
            supervisors:supervisors
        }
        console.log(group);
        createGroup(group)
            .then(data => {
                if (data.error) this.setState({ error:data.error })
                else this.setState({
                    error:"",
                    id: "",
                    mentor:
                    {
                        name: "",
                        email:""
                    },
                    students: [
                        { name: "", email: "" },
                        { name: "", email: "" },
                        { name: "", email: "" }
                    ],
                    supervisors: [
                        { name: "", email: "" },
                        { name: "", email: "" }
                    ],
                    open:true
                });
            });
    };
    
    groupForm = (id,mentor,students,supervisors) => (
        <form>
                    <div className="form-group">
                        <label className="text-muted">Group ID</label>
                        <input 
                            name="id"
                            onChange={this.handleChange("id")} 
                            type = "text" 
                            className = "form-control"
                            value = {id}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Mentor Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleMentor(event)}
                            type = "email" 
                            className = "form-control"
                            value = {mentor.name}>
                        </input>
                     </div>
                     <div className="form-group">
                        <label className="text-muted">Mentor Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleMentor(event)}
                            type = "email" 
                            className = "form-control"
                            value = {mentor.email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <br/>
                        <h3 className="text-muted">Student 1</h3>
                        <br/>
                        <label className="text-muted">Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleStudents(event,0)}
                            type = "email" 
                            className = "form-control"
                            value = {students[0].name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleStudents(event,0)}
                            type = "email" 
                            className = "form-control"
                            value = {students[0].email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <br/>
                        <h3 className="text-muted">Student 2</h3>
                        <br/>
                        <label className="text-muted">Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleStudents(event,1)}
                            type = "email" 
                            className = "form-control"
                            value = {students[1].name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleStudents(event,1)}
                            type = "email" 
                            className = "form-control"
                            value = {students[1].email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <br/>
                        <h3 className="text-muted">Student 3</h3>
                        <br/>
                        <label className="text-muted">Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleStudents(event,2)}
                            type = "email" 
                            className = "form-control"
                            value = {students[2].name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleStudents(event,2)}
                            type = "email" 
                            className = "form-control"
                            value = {students[2].email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <br/>
                        <h3 className="text-muted">Supervisor 1</h3>
                        <br/>
                        <label className="text-muted">Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleSupervisors(event,0)}
                            type = "email" 
                            className = "form-control"
                            value = {supervisors[0].name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleSupervisors(event,0)}
                            type = "email" 
                            className = "form-control"
                            value = {supervisors[0].email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <br/>
                        <h3 className="text-muted">Supervisor 2</h3>
                        <br/>
                        <label className="text-muted">Name</label>
                        <input 
                            name="name"
                            onChange={(event) => this.handleSupervisors(event,1)}
                            type = "email" 
                            className = "form-control"
                            value = {supervisors[1].name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            name="email"
                            onChange={(event) => this.handleSupervisors(event,1)}
                            type = "email" 
                            className = "form-control"
                            value = {supervisors[1].email}>
                        </input>
                    </div>
                    <button onClick = {this.clickSubmit}  className="btn btn-raised btn-primary">Submit</button>
                    
                </form>
          
    )

    render() {
        const {id,mentor,error,open,students,supervisors } = this.state;
        return (

                <div className="container">
                    <h2 className="mt-5 mb-5">Group Creation Form</h2>

                    <div className="alert alert-danger" style={{display:error?"":"none"}}>
                        {error}
                    </div>

                <div className="alert alert-info" style={{ display: open ? "" : "none" }}>
                    Group Created!
                    </div>
                    {this.groupForm(id,mentor,students,supervisors)}    
                </div>
        );
    };
};

export default CreateGroup;