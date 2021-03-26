
import React, { Component } from 'react'
import {list} from './api'
import { Link } from 'react-router-dom'
import {isAuthenticatedT} from '../Auth/Teacher'
class MentorRole extends Component {

    constructor(){
        super()
        this.state = {
            groups:[]
        }
    }

    componentDidMount () {
        list()
            .then(data => {
                console.log(data);
            if(data.error)
                console.log(data.error)
            else
                this.setState({groups:data})
        })
    }

    renderGroups = groups => (
        <div className>
            { groups.map((group, i) => (
             group.mentor.email === isAuthenticatedT().teacher.email &&(
                    <div className="card col-md-4" style={{marginLeft:"20px" ,marginTop:"20px",height:"150px",width:"auto" ,paddingBottom: "20px" ,paddingTop: "20px" ,paddingRight: "30px" ,paddingLeft: "30px" }}>
                            <div className="card-body" key={i}>
                            <h3 className="card-title">GROUP ID : {group.id}</h3>
                            <h5><Link to={`/mentor/${group._id}/details`}>View Details</Link> </h5>
                            </div>
                        </div>
                )))
            }
        </div>
    )


     render() {
         const{groups} = this.state
         return (
             <div>
                 <div className="jumbotron" >
                     <h3 style={{paddingLeft:"15ox"}}>Groups</h3>
                 </div>
              {this.renderGroups(groups) }
         </div>
         )
     }
}
    
    

export default MentorRole;