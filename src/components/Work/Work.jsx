import "./work.scss";
import {works} from "../../data";
import { useState } from "react";

export default function Work() {

    const [curSlide, setCurSlide] = useState(0);

    const handleClick = (way) => {
        way === "left" ? setCurSlide(curSlide > 0 ? curSlide - 1 : works.length-1) : setCurSlide(curSlide < works.length - 1 ? curSlide + 1 : 0)
    }

    return (
        <div className="work" id="work">
            <div className="slider" style={{transform: `translateX(-${curSlide*100}vw)`}}>
                {works.map((d) => (
                    <div key={d.id} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p id="desc">{d.desc}</p>
                                    <p id="date">{d.date}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="Innovation Cup" />
                            </div>
                        </div>
                    </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="arrow" onClick={() =>  handleClick("right")} />
        </div>
    )
}
