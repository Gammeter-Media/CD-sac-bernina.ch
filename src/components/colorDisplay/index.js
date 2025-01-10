import React from 'react';
import '@site/src/css/Farbwelt.css';




// Primary component
const ColorBoxes = ({ web, rgb, pantone, cmyk , textcolor}) => {
    return (
        <div className="logofarben">        
            <div style={{ backgroundColor: web, width: "100%", height: "100%",  color: textcolor}}>
                <span>Pantone: {pantone}</span>
                <span>CMYK: {cmyk}</span>
                <span>Web: {web}</span>
                <span>RGB: {rgb}</span>
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

const Schmuckfarben = ({ primary, primarycmyk, secondary, secondarycmyk, text }) => {
    return (
        <div className="schmuckfarben" style={{ backgroundColor: primary, }}>
            <div className="schmukfarbenTop" style={{ backgroundColor: secondary }}>
                <div>
                    <span>CMYK: {secondarycmyk}</span>
                    <span>RGB: {secondary}</span>
                </div>
            </div>
            <div>
                <span style={{ color: text}}>CMYK: {primarycmyk}</span>
                <span style={{ color: text}}>RGB: {primary}</span>
            </div>
        </div>
    );
};

export { ColorBoxes, AddClass, Schmuckfarben };
export default Schmuckfarben;


