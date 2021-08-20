import "./portfolio.scss"
import PortfolioList from "../PortfolioList/PortfolioList"
import { useState, useEffect } from "react"
import { completed, inprogress } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("completed")
  const [data, setData] = useState([])
  const list = [
    {
      id: "completed",
      title: "Completed",
    },
    {
      id: "inprogress",
      title: "In Progress",
    },
  ]

  useEffect(() => {
    setData(completed)
    switch (selected) {
      case "completed":
        setData(completed)
        break
      case "inprogress":
        setData(inprogress)
        break
      default:
        setData(completed)
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className='cont'>
        {data.map((d, index) => (
          <div className='item' key={index}>
            <img src={d.img} alt={d.title} />
            <div className='overlay'>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
              <p className='my-2'>
                {d.link && (
                  <a href={d.link} className='link'>
                    <i className='fas fa-eye' />
                  </a>
                )}
                {d.code && (
                  <a href={d.code} className='link'>
                    <i className='fas fa-code' />
                  </a>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
