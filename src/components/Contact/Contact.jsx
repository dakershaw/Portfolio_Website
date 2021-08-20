import "./contact.scss"

export default function Contact() {
  //   const [msg, setMsg] = useState(false)
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     setMsg(true)
  //   }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='shake' />
      </div>
      <div className='right'>
        <h2>Connect With Me.</h2>
        <div className='social-icons'>
          <i className='fab fa-facebook'></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-instagram'></i>
          <i className='fab fa-twitter'></i>
        </div>
        <div className='contact-item'>
          <i className='fas fa-envelope' />
          <span>hamidofficial9@gmail.com</span>
        </div>
        <div className='contact-item'>
          <i className='fab fa-github' />
          <span></span>
        </div>
        <div className='contact-item'>
          <i className='fab fa-chrome' />
          <span></span>
        </div>
        {/* <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Name" />
                    <textarea placeholder="Message"></textarea>
                    <button>Submit</button>
                    <span className={msg ? "" : "hide"}>Thanks, I'll reply ASAP :)</span> */}
        {/* {msg ? <span>Thanks, I'll reply ASAP :)</span> : <span>  </span>} */}
        {/* </form> */}
      </div>
    </div>
  )
}
