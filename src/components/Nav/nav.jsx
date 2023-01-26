import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../img/logo.png";
import style from "../Nav/nav.module.css"

export default function Nav() {
    const [drop, setDrop] = useState(false);

    function openClose() {
    setDrop(!drop);
    }

    return (
<div>
    <nav className={style.nav}>
        <img src={logo} alt="" height="25px" width="30px" className={style.img}/>
        <div className={style.div}>
        <ul className={style.ul}>
            <li className={style.li}>
                <NavLink className={style.link}>Live</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Push</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Note</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Link</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Shop</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Packs</NavLink>
            </li>
            <li className={style.li}>
                <NavLink className={style.link}>Help</NavLink>
            </li>
            <li onClick={openClose} className={style.li} style={{ color: "Red" }}>
                {drop ? "More -" : "More +"} 
            </li>
            <li className={style.try}>
                <NavLink className={style.link}>Try Live for free</NavLink>
            </li>
            <li className={style.log}>
                <NavLink className={style.link}>Log in or register</NavLink>
            </li>
        </ul>
        </div>
    </nav>
        
        <div className={style.divDropdown} >
                            <div hidden={!drop}>
                                <h2>More on Ableton.com:</h2>
                                <ul className={style.ulDropdown}>
                                    <li className={style.li}>
                                        <NavLink className={style.link}>Blog</NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}>Ableton for the Classroom</NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}>Ableton for Collage and </NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}> Certified Training</NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}> About Ableton</NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}>Jobs</NavLink>
                                    </li>
                                    <li className={style.li}>
                                        <NavLink className={style.link}>Apprenticeships</NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                            <div hidden={!drop}>
                                <h2>More from Ableton:</h2>
                                <ul className={style.ulDropdown}>
                                    <li className={style.liDropdown}>
                                        <div>
                                        <NavLink className={style.link}>
                                            <h4>Loop</h4>
                                            <p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers</p>
                                        </NavLink>
                                        </div>
                                    </li>
                                    <li className={style.liDropdown}>
                                        <NavLink className={style.link}>
                                            <h4>Learning Music</h4>
                                            <p>Learn the fundamentals of music making right in your browser.</p>
                                        </NavLink>
                                            
                                    </li>
                                    <li className={style.liDropdown}>
                                        <NavLink className={style.link}>    
                                            <h4>Learning Synths</h4>
                                            <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                                        </NavLink>
                                    </li>
                                    <li className={style.liDropdown}>
                                        <NavLink className={style.link}>
                                            <h4>Making Music</h4>
                                            <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.separate}></div>
                        <div>
                        <ul className={style.ul}>
                            <li className={style.li}>
                                <NavLink  to="/" className={style.link} style={({isActive}) => isActive ? {color: "Red"} : {color: "black"}}>About</NavLink>
                            </li>
                            <li className={style.li}>
                                <NavLink to="/jobs" className={style.link} style={({isActive}) => isActive ? {color: "Red"} : {color: "black"}}>Jobs</NavLink>
                            </li>
                            <li className={style.li}>
                                <NavLink  to="/apprenticeships"className={style.link} style={({isActive}) => isActive ? {color: "Red"} : {color: "black"}}>Apprenticeships</NavLink>
                            </li>
                        </ul>
                        </div>
</div>
    );
}
