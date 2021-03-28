
import React, { Component } from 'react'
import Menu from '../core/Menu'
class DashboardT extends Component {
        render() {
            return (
                <div>
                    <Menu></Menu>
                    <div className="container-fluid" >
                    <br/><br/><br/><br/><br/><br/>
                        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col col-md-3 " style={{paddingBottom: "20px" ,paddingTop: "20px" ,paddingRight: "10px" ,paddingLeft: "10px" }} >
                                <div className="card" style={{ width: "20rem", height: "25rem" }}>
                                <div className="card-body" >
                                    <h3 style={{ marginLeft: 60 }}>Mentorship</h3>
                                    <br/><br/><br/><br/><br/><br/>
                                        <p style={{ marginLeft: 105 }}>
                                        <a href="/mentorrole" className="card-link" >
                                        Click Here
                                        </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
    
                            <div className="col col-md-3 " style={{paddingBottom: "20px" ,paddingTop: "20px" ,paddingRight: "10px" ,paddingLeft: "10px" }}>
                                <div className="card bg-blue" style={{ width: "20rem", height: "25rem" }}>
                                    <div className="card-body" >
                                    <h3 style={{marginLeft:60}}>Supervision</h3>
                                    <br/><br/><br/><br/><br/><br/>
                                        <p style={{ marginLeft: 105 }}>
                                        <a href="/supervisionrole" className="card-link" >
                                        Click Here
                                        </a>
                                        </p>   
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
               </div>
            );
        }
    
}
    
    

export default DashboardT;