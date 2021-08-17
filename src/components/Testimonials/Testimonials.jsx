import "./testimonials.scss";
import {testimonial} from '../../data';

export default function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {testimonial.map((t) => (
                    <div className={t.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src="assets/right-arrow.png" alt="right-arrow" className="left" />
                            <img className="user" src={t.img} alt="client" />
                            <img className="right" src={t.icon} alt="youtube" />
                        </div>
                        <div className="center">
                            {t.desc}
                        </div>
                        <div className="bottom">
                            <h3>{t.name}</h3>
                            <h4>{t.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
