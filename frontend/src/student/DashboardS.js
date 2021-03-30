import React, {Component} from 'react'
import './styles.css';
import {load} from '../teacher/api'
import MenuS from '../core/MenuS';
import {isAuthenticatedS} from '../Auth/Student'
import { ListGroupItemText } from 'reactstrap';
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
            current: ""
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

    handleClick = (event) => {
        this.setState({
            current: event.target.value
        })
    }
    render() {
        const { group, current } = this.state
        var date = new Date();
        return (
            <div>

                <MenuS></MenuS>
                {/* Sidebar */}
                <div style={{ paddingTop: "70px", height: "1000px", width: "20%", backgroundColor: "teal", position: "fixed" }}>
                    {/* Assigned Tasks */}
                    <p>
                        <h5 style={{ paddingLeft: "20px", textDecorationLine: 'underline' }}>Group Details</h5>
                        
                        {group.supervisors !== [] && <button className="style1" value="supervisors"
                            onClick={(event) => this.handleClick(event)}>Supervisors</button>}
                        {group.fields.title!==""  &&group._id!=="" && date<=new Date(group.deadlines.title) &&group.deadlines.title!==null && <button className="style1" value="title"
                            onClick={(event) => this.handleClick(event)}>Title</button>}
                        {group.fields.description!=="" && group.deadlines.description!==null && <button className="style1" value="description"
                            onClick={(event) => this.handleClick(event)}>Description</button>}
                    </p >
                </div>
                {/*Data rendered on right of sidebar */}
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
                            <p>{ group.fields.description}</p>
                            </div>}
                        
                            {current ==="title" && group.fields.title!=="" && group.deadlines.title!==null && <div>
                            <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline'  }}>Title of Project</h5>
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
                
            </div>
            )
        }
}
export default DashboardS;