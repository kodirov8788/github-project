import React from 'react'
import "./Pull.css"
import { BiSearch } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { BiDirections } from "react-icons/bi";
import { CiBezier } from "react-icons/ci";


function Pull() {
    return (
        <div>
            <div className="box1">
                <h3>Label issues and pull requests for new contributors</h3>
                <a className='a' href="#">Dismiss</a>
                <p>Now, GitHub will help potential first-time contributors <a href="#">discover issues</a> labeled with</p>
                <span><a href="#">good first issue</a></span>
            </div>
            <div className="box2">
                <button className='button1'>Filters <BiChevronDown className='strleka' /></button>
                <div className="input_div">
                    < input type="text " className='input1' placeholder='Search all issues' />
                    <BiSearch className='lup' />
                </div>
                <div className="box3">
                    <BiPurchaseTagAlt />
                    <span> Labels</span>
                    <span>9</span>
                </div>
                <div className="box4">
                    <BiDirections />
                    <span> Milestones</span>
                    <span>0</span>
                </div>
                <span className='span1'>New pull request</span>
            </div>

            <div className="box5">
                <CiBezier className='icon1' />
                <h2>Welcome to pull requests!</h2>

                <div className="text">
                    <p>Pull requests help you collaborate on code with other people. As pull requests are created, they’ll appear here in a searchable and filterable list. To get started, you should <a href="#">create a pull request.</a></p>

                </div>
            </div>

        </div>

    )
}

export default Pull