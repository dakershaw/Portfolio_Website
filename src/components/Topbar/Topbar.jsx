import "./topbar.scss";
import { LinkedIn, Facebook, Mail, GitHub, Menu } from "@material-ui/icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function topbar(props) {
    return (
        <div className={"topbar "+(props.menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">hamid.</a>
                    <a href="https://www.linkedin.com/in/hamid-ayub-b80080175/" target="_blank"><LinkedIn className="social-icons" /></a>
                    <a href="https://www.facebook.com/hamid.ayub.587" target="_blank"><Facebook className="social-icons" /></a>
                    <a href="mailto: hamidayb123@gmail.com" target="_blank"><Mail className="social-icons" /></a>
                    <a href="https://github.com/hamidayb" target="_blank"><GitHub className="social-icons" /></a>
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faBars} className="bars" onClick={() => props.setMenuOpen(!props.menuOpen)} />
                </div>
            </div>
        </div>
    )
}
