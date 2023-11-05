import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <div>
            <h1>Contact Us</h1>
            <form >
                <div>
                <label >Name </label>
                <input type="text" required placeholder='Type your Name' />
                </div>
                <div>
                <label >Email </label>
                <input type="Email" required placeholder='Enter your Email Address' />
                </div>
                <div>
                <label >Message </label>
                <input type="text" required placeholder='Enter the query you have' />
                </div>
            <button>Send your message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact