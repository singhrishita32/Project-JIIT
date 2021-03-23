import React, {Component} from 'react'
import { load } from './api'
import "./styles.css";
import { SidebarData } from './SidebarData'
import {Button} from 'reactstrap'
class MentorGroup extends Component{
    constructor(){
        super()
        this.state = {
            group: {
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
            ]
            },
        
        }
    }
    componentDidMount = () => {
        const groupId = this.props.match.params.groupId
        load(groupId)
        .then(data => {
            if(data.error)
                console.log(data.error)
            else
                this.setState({group:data})
        })
    }
    render() {
            const {group}=this.state
        return (
            <div className="row">
                <div style={{ paddingTop:"70px", height:"1000px", width: "20%", backgroundColor: "teal",position:"fixed"}}>
                    {SidebarData.map((val, key) => {
                        return (
                            <div>
                                <button className="style1">{val.title}</button>
                        </div>
                        )
                    })}
                </div>
                <div style={{height:"100%" , width:"80%" , marginLeft:"20%",paddingLeft:"20px"}}>
                <h2 style={{fontWeight: 'bold'}}>Group Details</h2> <br/> <br/> 
                    <h5 style={{fontWeight: 'bold',textDecorationLine: 'underline'}}>Group Id: {group.id}</h5> <br/> <br/>
                    <h5 style={{fontWeight: 'bold',textDecorationLine: 'underline'}}>Students Details</h5>
                    <table class="table">
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
                    </table> <br/> <br/> <br/>
                    <h4 style={{fontWeight: 'bold',textDecorationLine: 'underline'}}>Title of the Project</h4>
                    <h5>Object Character Recognition Using CUDA Framnework</h5>
                </div>
            </div>
            )
        }
}
export default MentorGroup;
