import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    console.log(isAuth);
    return (
        <button onClick={isAuth ? onLogOut() : onLogin()}>
            {isAuth ? "Выйти" : "Войти"}
        </button>
    );
};

export default SimpleComponent;

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
