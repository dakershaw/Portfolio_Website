import "./portfolio.scss";
import PortfolioList from "../PortfolioList/PortfolioList";
import { useState, useEffect } from "react";
import { web, desktop } from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "desktop",
            title: "Desktop App"
        }
    ]

    useEffect(() => {
        switch(selected){
            case "web":
                setData(web);
                break;
            case "desktop":
                setData(desktop);
                break;
            default:
                setData(web);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList key={item.id} id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt={d.title} />
                        <div className="overlay">
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    </div>    
                ))}
                
            </div>
        </div>
    )
}
