import React from 'react'
import './Issues.css'

function Issues() {
    return (
        <div>
            <div className="card">
                <ul>
                    <li>Created</li>
                    <li>Assigned</li>
                    <li>Meantioned</li>
                    <input type="text" placeholder='is:open is:issue author:abdurahmon5858 archived:false ' />
                </ul>
            </div>
        </div>
    )
}

export default Issues