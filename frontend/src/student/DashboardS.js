import React, {Component} from 'react'
import './styles.css';
import {load} from '../teacher/api'
import MenuS from '../core/MenuS';
import { isAuthenticatedS } from '../Auth/Student'
import {updateGroup} from '../teacher/api'
class DashboardS extends Component{
    constructor() {
        super()
        this.state = {
            group: {
                id: "",
                mentor:
                {
                    name: "",
                    email: ""
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
                fields: {
                    title: "",
                    description: ""
                },
                deadlines: {
                    title: '',
                    description: ''
                }
            },
            current: "",
            entry: '',
            show:false
    }
    
}

    componentDidMount = () => {
        const groupId = isAuthenticatedS().student.group;
        load(groupId)
            .then(data => {
            if(data.error)
                console.log(data.error)
            else
                this.setState({group:data})
            })
    }

    showModal = () => {
        this.setState({ show: true})
    }

    hideModal = () => {
        this.setState({
            show: false,
            entry:''
        })
    }

    handleSave = () => {
        const { current, group, entry } = this.state   
        this.setState({
            entry
        })
        if (current === "title" && entry!=="") {
            group.fields.title = entry
        }
        
        if (current === "description" && entry!=="") {
            group.fields.description = entry
        }

        this.setState({
            group
        })
         updateGroup(group._id, group)
             .then(data => {
                if (data.error)
                    console.log(data.error)
                else
                    this.setState({
                        group: data
                    })    
             })
         this.setState({
             show: false,
             entry:""
         })
    }

    handleClick = (event,dialog_value)=> {
        const value = event.target.value;
        this.setState({
            current: value,
            show:dialog_value
        })
    }

    handleChange = () => (event) => {
        this.setState({
            entry:event.target.value
        })
    }


    dialogBox = () => {
        const {show,entry}=this.state
        const showHideClassName = show ? "modal display-block" : "modal display-none"
        return (
                 <div className={showHideClassName}>
                    <div className="modal-main">
                        <input
                        type="text"
                        value={entry}
                        onChange={this.handleChange()}>
                        </input>
            
                        <br />
            
                        <button type="button"
                        style={{backgroundColor:"teal", paddingLeft: "10px", paddingRight: "10px", cursor:'pointer' }}
                        onClick={this.hideModal}>
                            Close
                        </button>
            
                        <button type="button"
                         style={{backgroundColor:"teal", paddingLeft: "10px", paddingRight: "10px", cursor:'pointer' }}
                        onClick={this.handleSave}>
                            Save
                        </button>
            
                    </div>
                </div>    
        )
    }


    AssignedTasks = () => {
        const { group } = this.state
        var date = new Date();
        return (
            <div>
                <p>
                    <h5 style={{ paddingLeft: "20px", textDecorationLine: 'underline' }}>Group Details</h5>                        
                    {group.supervisors !== [] && <button className="style1" value="supervisors"
                    onClick={(event) => this.handleClick(event,false)}>Supervisors</button>}
                    
                    
                    {group.fields.title !== "" && group._id !== "" &&
                        
                            ((date.getDate() === new Date(group.deadlines.title).getDate() &&
                                date.getMonth() === new Date(group.deadlines.title).getMonth() &&
                                date.getFullYear() === new Date(group.deadlines.title).getFullYear())
                            || (date <= new Date(group.deadlines.title)))
                            && group.deadlines.title !== null && <button className="style1" value="title"
                                onClick={(event) => this.handleClick(event,true)}>Title</button>}
                    
                    {group.fields.description !== "" && group._id !== "" &&
                        (
                            (date.getDate() === new Date(group.deadlines.description).getDate() &&
                                date.getMonth() === new Date(group.deadlines.description).getMonth() &&
                                date.getFullYear() === new Date(group.deadlines.description).getFullYear())
                            || (date <= new Date(group.deadlines.description) ))
                            && group.deadlines.description !== null && <button className="style1" value="description"
                                onClick={(event) => this.handleClick(event,true)}>Description</button>}
                </p >
            </div>
        )
    }

    rightSide = () => {
        const {group,current}=this.state
        return (
            <div style={{ height: "100%", width: "80%", marginLeft: "20%", paddingLeft: "20px" ,paddingTop:"70px"}}>
                <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Students Details</h5>
                     <table className="table">
                         <thead>
                             <tr>
                             <th scope="col">S.No.</th>
                             <th scope="col">Name</th>
                             <th scope="col">Email</th>
                             </tr>
                         </thead>
                         <tbody>
                             <tr>
                             <th scope="row">1</th>
                             <td>{group.students[0].name}</td>
                             <td>{group.students[0].email}</td>
                             </tr>
                             <tr>
                             <th scope="row">2</th>
                             <td>{group.students[1].name}</td>
                             <td>{group.students[1].email}</td>
                             </tr>
                             <tr>
                             <th scope="row">3</th>
                             <td>{group.students[2].name}</td>
                             <td>{group.students[2].email}</td>
                             </tr>
                         </tbody>
                    </table>
                            {current === "description" && group.fields.description!=="" && group.deadlines.description!==null &&
                            <div>
                            <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Description</h5>
                            <h6>Deadline : {new Date(group.deadlines.description).getDate()}/
                                           {new Date(group.deadlines.description).getMonth()+1}/
                                           {new Date(group.deadlines.description).getFullYear()}
                            </h6>
                            <p>{ group.fields.description}</p>
                            </div>}
                        
                            {current ==="title" && group.fields.title!=="" && group.deadlines.title!==null && <div>
                            <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline'  }}>Title of Project</h5>
                            <h6>Deadline : {new Date(group.deadlines.title).getDate()}/
                                           {new Date(group.deadlines.title).getMonth()+1}/
                                           {new Date(group.deadlines.title).getFullYear()}
                            </h6>
                            <p>{group.fields.title}</p>
                            </div>}
                            
                            {current === "supervisors" && group.supervisors !== [] && 
                            <div>
                            <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Supervisors Details</h5>
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">S No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>{group.supervisors[0].name}</td>
                                <td>{group.supervisors[0].email}</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>{group.supervisors[1].name}</td>
                                <td>{group.supervisors[1].email}</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>}

                </div>
        )
    }
    render() {

        return (
            <div>
                <MenuS></MenuS>
                {this.dialogBox()}
                {/* Sidebar */}
                <div style={{ paddingTop: "70px", height: "1000px", width: "20%", backgroundColor: "teal", position: "fixed" }}>
                    {/* Assigned Tasks */}
                    {this.AssignedTasks()}
                </div>
                {/*Data rendered on right of sidebar */}
                {this.rightSide()}
                
            </div>
            )
        }
}
export default DashboardS;