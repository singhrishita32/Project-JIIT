import React, {Component} from 'react'
import { updateGroup,load } from './api'
import "./styles.css";
import Modal from './Modal'

class MentorGroup extends Component{
    constructor(){
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
                }
            },
            show: false,
            current:""
        }
    }
    showModal = () => {
        this.setState({ show: true})
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    handleClick = (event)=> {
        const value = event.target.value;
        this.setState({
            current: value
        })
    }


    // handleAssign = () => {
    //     const groupId = this.props.match.params.groupId;
    //     const { group} = this.state
    //      updateGroup(groupId, group)
    //          .then(data => {
    //              console.log(data);
    //             if (data.error)
    //                 console.log(data.error)
    //             else
    //             {
    //                 this.setState({
    //                     group: data,
    //                     show: false,
    //                 })
    //             }
    //     })
    //      this.setState({
    //          show: false,    
    //      })
    // }

    
    componentDidMount = () => {
        const groupId = this.props.match.params.groupId
        load(groupId)
            .then(data => {
            console.log(data)
            if(data.error)
                console.log(data.error)
            else
                this.setState({group:data})
        })
    }
    render() {
        const { group,show,current} = this.state
        return (
            <div className="row">
                <Modal handleAssign={this.handleAssign} show={this.state.show} handleClose={this.hideModal}>
                            </Modal>
                <div style={{ paddingTop: "70px", height: "1000px", width: "20%", backgroundColor: "teal", position: "fixed" }}>
                    <p>
                        <h5 style={{ paddingLeft: "20px", textDecorationLine: 'underline' }}>Details</h5>
                        {group.supervisors !== [] && <button className="style1" value="supervisors"
                            onClick={(event) => this.handleClick(event)}>Supervisors</button>}
                        
                    </p>
                    <p>
                        <h5 style={{ paddingLeft: "20px", textDecorationLine: 'underline' }}>Assign Details</h5>
                        {group.fields.title==="" && <button className="style1" value="title"
                            onClick={(event) => this.handleClick(event)}>Title</button>}
                    </p>
                </div>
                <div style={{height:"100%" , width:"80%" , marginLeft:"20%",paddingLeft:"20px"}}>
                <h2 style={{fontWeight: 'bold', paddingTop:"70px"}}>Group Details</h2> <br/> <br/> 
                         <div>
                          <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Students Details</h5>
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
                        </table>
                        
                        {current ==="supervisors" && <div>
                            <h4 style={{ marginTop: "5%", fontWeight: 'bold', textDecorationLine: 'underline' }}>Supervisors</h4>
                        </div>}

                        {current ==="title" && <div>
                            <h4 style={{ marginTop: "5%", fontWeight: 'bold', textDecorationLine: 'underline' }}>Title of Project</h4>
                        </div>}

                    </div>
                   
                </div>
            </div>
            )
        }
}
export default MentorGroup;
