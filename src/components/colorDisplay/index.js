import React from 'react';
import '@site/src/css/Farbwelt.css';




// Primary component
const ColorBoxes = ({ web, RGB, pantone, cmyk , textcolor}) => {
    return (
        <div className="logofarben">        
            <div style={{ backgroundColor: web, width: "100%", height: "100%",  color: textcolor}}>
                <span>pantone: {pantone}</span>
                <span>cmyk: {cmyk}</span>
                <span>web: {web}</span>
                <span>rgb: {RGB}</span>
            </div>
        </div>
    )
};

// ColorContainer component
const AddClass = ({ className }) => {
    return (
        <div className={className}></div>
    );
};

const Schmuckfarben = ({ Primary, primarycmyk, secondary, secondarycmyk, text }) => {
    return (
        <div className="schmuckfarben" style={{ backgroundColor: Primary, }}>
            <div className="schmukfarbenTop" style={{ backgroundColor: secondary }}>
                <div>
                    <span>CMYK: {secondarycmyk}</span>
                    <span>RGB: {secondary}</span>
                </div>
            </div>
            <div>
                <span style={{ color: text}}>CMYK: {primarycmyk}</span>
                <span style={{ color: text}}>RGB: {Primary}</span>
            </div>
        </div>
    );
};

export { ColorBoxes, AddClass, Schmuckfarben };
export default Schmuckfarben;


