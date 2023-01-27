import React from "react";
import './../../assets/scss/modules/theme_switch.scss';

function ThemeSwitch (props: any) {
    return(
        <label className="switch" htmlFor={props.id}>
            <input type="checkbox" name={props.name} className="switch-input" id={props.id} />
            <div className="custom-switch"></div>
        </label>
    )
}

export default ThemeSwitch;