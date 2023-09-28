import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div  className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Input your name here.."/>
            <label>Email</label>
            <input type="email" placeholder="Input your email here.."/>
            <label>Subject</label>
            <input type="text" placeholder="Type your subject here.."/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here.."/>
            <button className="btn" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form