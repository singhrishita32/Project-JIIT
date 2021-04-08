import React, { Component } from 'react'
import {list} from './api'
import { Link } from 'react-router-dom'
import { iframe } from 'react-iframe'
import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import FileViewer from 'react-file-viewer';
class DisplayTrials extends Component {

    constructor(){
        super()
        this.state = {
            trials: []
        }
    }

    componentDidMount () {
        list()
        .then(data => {
            if(data.error)
                console.log(data.error)
            else
                this.setState({trials: data})
        })
    }



    renderTrials = trials => (
        <div className="row">{
            trials.map((trial, i) => (
                <div className="card col-md-4" key={i}>
                    {/* <Document
                    file={'http://localhost:9090/trial/photo/${trial._id}'}></Document> */}

                {/* <iframe
                            style={{ width: "563px", height: "666px" }}
                            src={'http://localhost:9090/trial/photo/${trial._id}'}
                            type='application/pdf'
                        /> */}
                    <FileViewer
                        fileType="pdf"
                        filePath={`http://localhost:9090/trial/photo/606c4b22b9d828041c910edd`}/>
                   

                    <div className="card-body">
                        <h5 className="card-title">{trial.title}</h5>
                    </div>
                </div>
            )
        )
        }
        </div>
    )


    render() {
        const{trials} = this.state
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Trial</h2>
                {this.renderTrials(trials)}
            </div>
        )
    }
}

export default DisplayTrials;