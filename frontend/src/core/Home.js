import { React, Component } from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'
class Home extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron" style={{width:"100%"}}>
                    <h3 className="font-weight-bold">Jaypee Institute Of Information Technology</h3>
                    <h4>Project Portal</h4>
                </div>
                <div className="container-fluid" >
                    <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col col-md-3 " style={{ paddingBottom: "20px" ,paddingTop: "20px" ,paddingRight: "10px" ,paddingLeft: "10px" }} >
                            <div className="card" style={{ width: "20rem", height: "25rem" }}>
                                <div className="card-body" >
                                    <h5 className="card-title" style={{ textAlign:'center' , marginBottom: 10 }}>
                                        Student Login
                                    </h5>
                                    <p className="card-text" style={{textAlign:'center' }}>Student
                                    </p>
                                    <br />
                                    <br />
                                    <Link to='/SigninS'>
                                    <Button color="primary" className="btn btn-outline-primary" style={{ marginLeft: 95 }} >Login</Button>{' '}
                                    </Link>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <hr />
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ textAlign:'center' , marginBottom: 10 }}>
                                        Not yet registered?
                                    </h6>
                                    <p style={{textAlign:'center'  }}>
                                        Please click here to&nbsp;
                                    <a href="/SignupS" className="card-link" >
                                            Signup
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-3 " style={{ paddingBottom: "20px" ,paddingTop: "20px" ,paddingRight: "10px" ,paddingLeft: "10px" }} >
                            <div className="card" style={{ width: "20rem", height: "25rem" }}>
                                <div className="card-body" >
                                    <h5 className="card-title" style={{ textAlign:'center'  }}>
                                        Faculty Login
                                    </h5>
                                    <p className="card-text" style={{ textAlign:'center'}} >Faculty 
                                    </p>
                                    <br />
                                    <br />
                                    <Link to="/SigninT">
                                    <Button color="primary" className="btn btn-outline-primary" style={{ marginLeft: 95 }} >Login</Button>{' '}
                                    </Link>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <hr />
                                    <h6 className="card-subtitle mb-2 text-muted" style={{ textAlign:'center'  }}>
                                        Not yet registered?
                                    </h6>
                                    <p style={{ textAlign:'center'  }}>
                                        Please click here to&nbsp;
                                        <Link to="/SignupT">Signup</Link>
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className="bg-light" style={{marginLeft:1400}}>
                        <a className="text-dark" href="/group/new"> <b>Admin Login </b></a>
                </footer>
            </div>
        );
    }
}


export default Home;