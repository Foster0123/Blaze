import React from "react";
import './../../assets/scss/modules/theme_switch.scss';

function ThemeSwitch () {
    return(
        <label className="switch" htmlFor="switch-input">
            <input type="checkbox" name="switch" className="switch-input" id="switch-input" />
            <div className="custom-switch"></div>
        </label>
    )
}

export default ThemeSwitch;