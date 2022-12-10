import React from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby'
// import { FaEnvelope } from 'react-icons/fa'
import { RiSendPlane2Line } from 'react-icons/ri'


// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }



  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
       .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      
      <div className="wrapper">
      <form
        className="contact-form"
        action="/thanks"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="flexbutt" style={{justifyContent:'center', justifyItems:'center'}}>
        <p style={{margin:'0 1rem', filter:'drop-shadow(0px 0px 10px #0064bb)',}}>
          <label>
            <input type="text" name="name" placeholder="your name" required />
          </label>
        </p>
        <p style={{margin:'0 1rem', filter:'drop-shadow(0px 0px 10px #0064bb)',}}>
          <label>
            <input type="email" name="email" placeholder="your@email.com" required />
          </label>
        </p>
        <p style={{margin:'0 1rem'}}>
          <label>
          <input type="hidden" name="subject" placeholder="Subject" value="Coast Web Form Post" />
          </label>
        </p>
        </div>
        
        <div>
        <p style={{margin:'0 1rem', filter:'drop-shadow(0px 0px 10px #0064bb)',}}>
          <label>
            <textarea name="message" placeholder="your message" required></textarea>
          </label>
        </p>


        <div className="" style={{fontSize: '100%', padding: '', textAlign: 'center', border:'0px solid red'}}> 
        
        {/* <label htmlFor="consent" style={{color:'inherit', border:'none', outline:'none', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <input type="checkbox" name="consent" aria-checked checked required style={{ display:'inherit', transition: 'inherit', boxSizing: 'inherit', width:'20px', height:'', background:'inherit', paddingTop:''}} /> &nbsp; I want to communicate by email.
        </label> */}

          </div>


        <p className="text-align-center" style={{marginRight:'', color:'#fff', textAlign:'center'}}>
          <button
            className="post-card button"
            
            type="submit"
          >
            Send Message{" "}
            <span className="icon -right">
              <RiSendPlane2Line />
            </span>
          </button>
        </p>
        </div>

        <div style={{fontSize: '80%', padding: '1rem 3%', textAlign: 'center',}}><Link style={{textAlign: 'center', paddingTop: '0px', paddingBottom: '0', textDecoration: 'underline',}} state={{modal: true}} to="/privacy">Privacy Policy</Link>
                </div>
      </form>
    </div>
      
    )
  }
}