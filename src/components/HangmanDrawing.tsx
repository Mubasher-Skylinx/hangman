import React, { useEffect } from "react";

const elementArray = [
    <div className="person-head" key={"h"}></div>,
    <div className="person-body" key={"b"}></div>,
    <div className="person-left-leg" key={"lg"}></div>,
    <div className="person-right-leg" key={"rg"}></div>,
    <div className="person-left-arm" key={"la"}></div>,
    <div className="person-right-arm" key={"ra"}></div>,
];

function HangmanDrawing({ tries, setGameOver }) {
    useEffect(() => {
        if (tries === elementArray.length) {
            setGameOver(true);
        }
    }, [tries]);

    return (
        <section style={{ position: "relative" }}>
            <div className="stand-topBar">
                {tries <= elementArray.length && elementArray.filter((ele, ind) => ind < tries)}
            </div>
            <div className="stand-middleBar"></div>
            <div className="stand-bottomBar"></div>
        </section>
    );
}

export default HangmanDrawing;
