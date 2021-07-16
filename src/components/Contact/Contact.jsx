import { useState } from "react";
import "./contact.scss";

export default function Contact() {

    const [msg, setMsg] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="shake" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Name" />
                    <textarea placeholder="Message"></textarea>
                    <button>Submit</button>
                    <span className={msg ? "" : "hide"}>Thanks, I'll reply ASAP :)</span>
                    {/* {msg ? <span>Thanks, I'll reply ASAP :)</span> : <span>  </span>} */}
                </form>
            </div>
        </div>
    )
}
 