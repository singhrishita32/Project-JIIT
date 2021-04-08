import React, { Component } from 'react';
import { createTrial } from './api'
class Trial extends Component{
    constructor() {
        super()
        this.state = {
            title: '',
            photo: '',
            error:''
        }
    }

    componentDidMount() {
        this.trialData=new FormData()
    }

    handleChange = (name) => (event) => {
        this.setState({ error: "" })
        const value = name === 'photo' ? event.target.files[0] :event.target.value
        this.trialData.set(name,value)
        this.setState({
            [name]:value
        })
    }



    clickSubmit = (event) => {
        event.preventDefault();
      //  console.log(this.trialData)
        createTrial(this.trialData)
            .then(data => {
                if (data.error) {
                    this.setState({
                    error:data.error
                })
                }
                else
                {
                    console.log("created")
                    this.setState({
                        title: '',
                        photo:''
                 })   
                }
        })
    }

    trialForm = (title) => (
        <form>
            <div>
                <label> Title</label>
                <input
                    value={title}
                    type="text"
                    onChange={this.handleChange("title")}></input>
            </div>
            <div>
                <label>Photo</label>
                <input
                    type="file"
                    onChange={this.handleChange("photo")}></input>
            </div>
            <button onClick={this.clickSubmit}
                className="btn btn-raised btn-primary">
                Create
            </button>
        </form>
    )
    render() {
        const { title, error } = this.state
        return (
            <div>
                <div>{error}</div>
                {this.trialForm(title)}
            </div>
        )
    }


}
export default Trial;