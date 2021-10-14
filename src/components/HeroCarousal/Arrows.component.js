import React from "react";

export const NextArrow = (props) => {
    return (
        <div
        className={`text-white ${props.className}`}
        style={
            {
                ...props.style,
                backgroundColor: "black",
                opacity: "0.7",
                height: "50px",
                width: "80px",
                borderRadius: "10px",
                padding: "15px 45px"
            }
        }
        onClick={props.onClick}
        />
    );
}

export const PrevArrow = (props) => {
    return (
        <>
        <div
        className={props.className}
        style={
            {
                ...props.style,
                backgroundColor: "black",
                opacity: "0.7",
                height: "50px",
                width: "80px",
                borderRadius: "10px",
                padding: "15px 15px"
            }
        }
        onClick={props.onClick} />
        </>
    );
}
