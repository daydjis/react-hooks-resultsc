import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const setItem = () => localStorage.setItem("auth", "token");
    const getItem = () => localStorage.removeItem("auth");
    console.log(isAuth);
    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={setItem}
                onLogOut={getItem}
            />
        </CardWrapper>
    );
};

export default withFunctions;
