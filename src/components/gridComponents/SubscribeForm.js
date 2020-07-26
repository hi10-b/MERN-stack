import React, { Component } from 'react'

class SubscribeForm extends Component {
    render() {
        return (
            <div className='form-group col-3'>
                <h1>Subscribe</h1>
                <p>Subscribe below to receive emails of future events at the temple:</p>
                <input type='text' placeholder='Your Email' />
                <input type='text' placeholder='Your Name' />
                <br/>
                <button type='button'>Subscribe</button>

            </div>
        )
    }
}

export default SubscribeForm
