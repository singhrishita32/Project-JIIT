import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';


const url =
"http://localhost:9090/trial/photo/606c4b22b9d828041c910edd"

export default function Test() {
return (
	<div className="main">
	<Document
		file={url}>
        </Document>
        </div>
    )	
}
