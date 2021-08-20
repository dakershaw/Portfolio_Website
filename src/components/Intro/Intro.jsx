import { init } from "ityped"
import { useEffect, useRef } from "react"
import "./intro.scss"

export default function Intro() {
  const textRef = useRef()
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "Web Developer", "Graphic Designer"],
    })
  }, [])

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/man.png' alt='man' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Hamid Ayub</h1>
          <h4>Student at NUST, Islamabad</h4>
          <h3>
            Passionated <span ref={textRef}></span>
          </h3>
          <button className='btn'>
            <a href='assets/cv.pdf'>
              <i className='fa fa-download'></i> Download CV
            </a>
          </button>
        </div>
        <a id='down-arrow' href='#portfolio'>
          <img src='assets/down.png' alt='down' />
        </a>
      </div>
    </div>
  )
}
