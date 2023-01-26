import { NavLink } from "react-router-dom";
import style from "../Home/home.module.css"
import about from "../../img/portada-musica.jpg"
import bateria from "../../img/bateria.jpg"
import ukelele from "../../img/ukeleles.jpg"

export default function Home (){
    return (
        <div>
            <center>
            <img src={about} alt="" className={style.img} />

            </center>
            <div className={style.divText}>   
                <h1>
                We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                </h1>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
            <div className={style.div}>
                <div className={style.divImg}></div>
                    <img className={style.bateria} src={bateria}  alt=""  height="469px" width="469px"/>
                    <img src={ukelele} className={style.divUkelele} alt="" height="505px" width="379px"/>    
            </div>
            <div className={style.divText}>   
                <h1>
                We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.
                </h1>
                <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
            </div>
        </div>
    )
}