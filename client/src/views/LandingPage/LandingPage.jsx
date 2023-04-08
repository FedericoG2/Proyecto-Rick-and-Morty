import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

const LandingPage = () => {
    return (
        <div className={style.bgImg}>
            <div className={style.mensaje}>
            <div ></div>
            </div>
            <div className={style.bgHyC}>
            <Link to="/Home">
                <button>ENTER</button>
            </Link>
            </div>
        </div>
    )

}

export default LandingPage