// import React, {Component} from 'react'
// import './styles.css';
// import {load} from '../teacher/api'
// import MenuS from '../core/MenuS';
// import { isAuthenticatedS } from '../Auth/Student'
// import {updateGroup} from '../teacher/api'
// class DashboardS extends Component{
//     constructor() {
//         super()
//         this.state = {
//             group: {
//                 id: "",
//                 mentor:
//                 {
//                     name: "",
//                     email: ""
//                 },
//                 students: [
//                     { name: "", email: "" },
//                     { name: "", email: "" },
//                     { name: "", email: "" }
//                 ],
//                 supervisors: [
//                     { name: "", email: "" },
//                     { name: "", email: "" }
//                 ],
//                 fields: {
//                     title: "",
//                     description: "",
//                     report:""
//                 },
//                 deadlines: {
//                     title: '',
//                     description: '',
//                     report:''
//                 }
//             },
//             current: "",
//             entry: '',
//             show:false
//     }
    
// }

//     componentDidMount = () => {
//         this.groupData = new FormData()
//         const groupId = isAuthenticatedS().student.group;
//         load(groupId)
//             .then(data => {
//             if(data.error)
//                 console.log(data.error)
//             else
//                 this.setState({group:data})
//             })
//     }

//     // showModal = () => {
//     //     this.setState({ show: true})
//     // }

//     hideModal = () => {
//         this.setState({
//             show: false,
//             entry:''
//         })
//     }

//     handleSave = () => {
//         const { current, group, entry } = this.state   
    
//         console.log(this.groupData.title);
        
//         updateGroup(group._id, this.groupData)
//              .then(data => {
//                 if (data.error)
//                     console.log(data.error)
//                 else
//                     this.setState({
//                         group: data
//                     })    
//              })
//          this.setState({
//              show: false,
//              entry:""
//          })
//     }

//     handleClick = (event)=> {
//         const value = event.target.value;
//         this.setState({
//             current: value
//         })
//     }

//     handleChange = () => (event) => {
//         const { current, group } = this.state;
//         const value =
//             current === "report" ? event.target.files[0] :
//                 event.target.value
//         // this.groupData.set(current, value)
//         if (current) {
//             group.fields[current] = value;
//             this.setState({ group })
//             this.groupData.set(current, value)
//         }
//     }
   
//     // handleChangeReport = () => (event) => {
//     //     this.setState({
//     //         entry: event.target.files[0]
//     //     })
//     //     console.log(this.state.entry)
//     // }



//     dialogBox = () => {
//         const {show,current,entry,group}=this.state
//         const showHideClassName = show ? "modal display-block" : "modal display-none"
//         return (
//                  <div className={showHideClassName}>
//                 <div className="modal-main">
                    
//                     <form>
//                         {
//                         current === "title" && <input
//                         type="text"
//                         value={group.fields.title}
//                         onChange={this.handleChange()}>
//                         </input>
//                         }
//                         {
//                         current === "description" && <input
//                         type="text"
//                         value={group.fields.description}
//                         onChange={this.handleChange()}>
//                         </input>
//                         }
//                         {
//                         current === "report" && <input
//                         type="file"
//                         onChange={this.handleChange()}>
//                         </input>
//                         }
            
//                         <br />
            
//                         <button type="button"
//                         style={{backgroundColor:"teal", paddingLeft: "10px", paddingRight: "10px", cursor:'pointer' }}
//                         onClick={this.hideModal}>
//                             Close
//                         </button>
            
//                         <button type="button"
//                          style={{backgroundColor:"teal", paddingLeft: "10px", paddingRight: "10px", cursor:'pointer' }}
//                         onClick={this.handleSave}>
//                             Save
//                         </button>
//                         </form>
            
//                     </div>
//                 </div>    
//         )
//     }


//     AssignedTasks = () => {
//         const { group } = this.state
//         var date = new Date();
//         return (
//             <div>
//                 <p>
//                     <h5 style={{ paddingLeft: "20px", textDecorationLine: 'underline' }}>Group Details</h5>                        
//                     {group.supervisors !== [] && <button className="style1" value="supervisors"
//                     onClick={(event) => this.handleClick(event)}>Supervisors</button>}
                    
                    
//                     {group.fields.title !== "" && group._id !== "" &&
                        
//                             ((date.getDate() === new Date(group.deadlines.title).getDate() &&
//                                 date.getMonth() === new Date(group.deadlines.title).getMonth() &&
//                                 date.getFullYear() === new Date(group.deadlines.title).getFullYear())
//                             || (date <= new Date(group.deadlines.title)))
//                             && group.deadlines.title !== null && <button className="style1" value="title"
//                                 onClick={(event) => this.handleClick(event)}>Title</button>}
                    
//                     {group.fields.description !== "" && group._id !== "" &&
//                         (
//                             (date.getDate() === new Date(group.deadlines.description).getDate() &&
//                                 date.getMonth() === new Date(group.deadlines.description).getMonth() &&
//                                 date.getFullYear() === new Date(group.deadlines.description).getFullYear())
//                             || (date <= new Date(group.deadlines.description) ))
//                             && group.deadlines.description !== null && <button className="style1" value="description"
//                                 onClick={(event) => this.handleClick(event)}>Description</button>}
                                
//                     {group._id !== "" &&
                        
//                         ((date.getDate() === new Date(group.deadlines.report).getDate() &&
//                             date.getMonth() === new Date(group.deadlines.report).getMonth() &&
//                             date.getFullYear() === new Date(group.deadlines.report).getFullYear())
//                         || (date <= new Date(group.deadlines.report)))
//                         && group.deadlines.report!== null && <button className="style1" value="report"
//                             onClick={(event) => this.handleClick(event)}>Report</button>}
//                 </p >
//             </div>
//         )
//     }

//     handleEdit = () => {
//         this.setState({
//             show:true
//         })
        
//     }

//     rightSide = () => {
//         const {group,current}=this.state
//         return (
//             <div style={{ height: "100%", width: "80%", marginLeft: "20%", paddingLeft: "20px" ,paddingTop:"70px"}}>
//                 <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Students Details</h5>
//                      <table className="table">
//                          <thead>
//                              <tr>
//                              <th scope="col">S.No.</th>
//                              <th scope="col">Name</th>
//                              <th scope="col">Email</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                              <tr>
//                              <th scope="row">1</th>
//                              <td>{group.students[0].name}</td>
//                              <td>{group.students[0].email}</td>
//                              </tr>
//                              <tr>
//                              <th scope="row">2</th>
//                              <td>{group.students[1].name}</td>
//                              <td>{group.students[1].email}</td>
//                              </tr>
//                              <tr>
//                              <th scope="row">3</th>
//                              <td>{group.students[2].name}</td>
//                              <td>{group.students[2].email}</td>
//                              </tr>
//                          </tbody>
//                     </table>
//                             {current === "description" && group.fields.description!=="" && group.deadlines.description!==null &&
//                             <div>
//                             <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Description</h5>
//                             <h6>Deadline : {new Date(group.deadlines.description).getDate()}/
//                                            {new Date(group.deadlines.description).getMonth()+1}/
//                                            {new Date(group.deadlines.description).getFullYear()}
//                             </h6>
//                             <p>{ group.fields.description} 
//                                 <button onClick={()=>this.handleEdit()}> Edit </button>
//                             </p>
//                             </div>}
                        
//                             {current ==="title" && group.fields.title!=="" && group.deadlines.title!==null && <div>
//                             <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline'  }}>Title of Project</h5>
//                             <h6>Deadline : {new Date(group.deadlines.title).getDate()}/
//                                            {new Date(group.deadlines.title).getMonth()+1}/
//                                            {new Date(group.deadlines.title).getFullYear()}
//                             </h6>
//                             <p>{group.fields.title}
//                             <button onClick={()=>this.handleEdit()}> Edit </button>
//                             </p>
//                             </div>}
                            
//                             {current ==="report" && group.fields.report!=="" && group.deadlines.report!==null && <div>
//                             <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline'  }}>Report</h5>
//                             <h6>Deadline : {new Date(group.deadlines.report).getDate()}/
//                                            {new Date(group.deadlines.report).getMonth()+1}/
//                                            {new Date(group.deadlines.report).getFullYear()}
//                             </h6>
//                             <p>{group.fields.report}
//                             <button onClick={()=>this.handleEdit()}> Edit </button>
//                             </p>
//                             </div>}
                            
                            
//                             {current === "supervisors" && group.supervisors !== [] && 
//                             <div>
//                             <h5 style={{ fontWeight: 'bold', textDecorationLine: 'underline' }}>Supervisors Details</h5>
//                             <table className="table">
//                             <thead>
//                                 <tr>
//                                 <th scope="col">S No.</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Email</th>
//                                 </tr>
//                                 </thead>
//                                 <tbody>
//                                 <tr>
//                                 <th scope="row">1</th>
//                                 <td>{group.supervisors[0].name}</td>
//                                 <td>{group.supervisors[0].email}</td>
//                                 </tr>
//                                 <tr>
//                                 <th scope="row">2</th>
//                                 <td>{group.supervisors[1].name}</td>
//                                 <td>{group.supervisors[1].email}</td>
//                                 </tr>
//                             </tbody>
//                             </table>
//                         </div>}

//                 </div>
//         )
//     }
//     render() {

//         return (
//             <div>
//                 <MenuS></MenuS>
//                  {this.dialogBox()} 
//                 {/* Sidebar */}
//                 <div style={{ paddingTop: "70px", height: "1000px", width: "20%", backgroundColor: "teal", position: "fixed" }}>
//                     {/* Assigned Tasks */}
//                     {this.AssignedTasks()}
//                 </div>
//                 {/*Data rendered on right of sidebar */}
//                 {this.rightSide()}
                
//             </div>
//             )
//         }
// }
// export default DashboardS;
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
                    description: "",
                    report:""
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
        this.groupData = new FormData();
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
        
    
        if (current !== "" && entry!=="") {
            group.fields[current] = entry
        }
        
        // if (current === "description" && entry!=="") {
        //     group.fields.description = entry
        // }

        this.setState({
            group
        })
        
        updateGroup(group._id, this.groupData)
            .then(data => {
                if (data.error)
                    console.log(data.error)
                else
                    this.setState({
                        group: data.group
                    })    
             })
        
        this.setState({
             show: false,
             entry:""
         })
    }

    handleClick = (event, dialog_value) => {

        const value = event.target.value;
        this.setState({
            current: value,
            show:dialog_value
        })

    }

    handleChange = () => (event) => {
        const { current, entry,group } = this.state
        let value
        if (current) {
            if (current !== "report") {        
                value=event.target.value
            }
            else{
                value=event.target.files[0]
            }
            console.log(value);
            this.groupData.set(current, value)
            group.fields[current]=value
            this.setState({
                group
            })
        }
        console.log(current);
    }


    dialogBox = () => {
        const {show,group,entry,current}=this.state
        const showHideClassName = show ? "modal display-block" : "modal display-none"
        return (
                 <div className={showHideClassName}>
                    <div className="modal-main">
                        {(current==="description" || current==="title") && <input
                        type="text"
                        value={group.fields[current]}
                        onChange={this.handleChange()}>
                        </input>}
                        
                        {current==="report" && <input
                        type="file"
                        onChange={this.handleChange()}></input>

                        }
            
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
                    
                    
                    { group._id !== "" &&
                        
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
                            onClick={(event) => this.handleClick(event, true)}>Description</button>}
                    
                    {group._id !== "" &&
                        ((date.getDate() === new Date(group.deadlines.report).getDate() &&
                            date.getMonth() === new Date(group.deadlines.report).getMonth() &&
                            date.getFullYear() === new Date(group.deadlines.report).getFullYear())
                        || (date <= new Date(group.deadlines.report)))
                        && group.deadlines.report!== null 
                        && <button className="style1" value="report"
                            onClick={(event) => this.handleClick(event,true)}>Report</button>}
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