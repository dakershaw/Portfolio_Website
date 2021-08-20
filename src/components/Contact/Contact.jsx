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
          <a href='https://web.facebook.com/hamid.ayub.587'>
            <i className='fab fa-facebook' />{" "}
          </a>
          <a href='https://www.linkedin.com/in/hamid-ayub-b80080175/'>
            <i className='fab fa-linkedin' />
          </a>
          <a href='https://www.instagram.com/hamid_ayub12/'>
            <i className='fab fa-instagram' />
          </a>
          <a href='https://twitter.com/HamidAy15686995'>
            <i className='fab fa-twitter' />
          </a>
          <a href='https://github.com/hamidayb'>
            <i className='fab fa-github' />
          </a>
          <a href='mailto:hamidofficial9@gmail.com'>
            <i className='fas fa-envelope' />
          </a>
        </div>
      </div>
    </div>
  )
}
