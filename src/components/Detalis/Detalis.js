import React from 'react'
import './Detalis.css'
import { GiBarbedCoil } from 'react-icons/gi'

function Detalis() {
    return (
        <div>
            <div className="main">
                <div className="main1">
                    <h3>0 Open</h3>
                    <h3>0 Closed</h3>
                    <h3>Visibiliti</h3>
                    <h3>Organizator</h3>

                </div>
                <hr />
                <div className="mai2">
                    <GiBarbedCoil />
                    <h2>No results matched your search.</h2>
                    <h3>You could search all of GitHub or try an advanced search.</h3>
                </div>


            </div>
            <div className="main3">
                <p> ProTip! Find all open issues with in progress development work with linked:pr.</p>
            </div>
        </div>
    )
}

export default Detalis