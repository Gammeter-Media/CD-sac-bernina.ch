import React from 'react';

// Primary component
const ColorBoxes = ({ web, className, RGB,  pantone, cmyk}) => {
    return (
    <div className={className}>
        <span>pantone: {pantone}</span>
        <span>cmyk: {cmyk}</span>       
        <span>web: {web}</span>       
        <span>rgb: {RGB}</span>       
        
        <div style={{ backgroundColor: web, width: "100%", height: "100%" }}>
        </div>
    </div>

    )};




    

// ColorContainer component
const addClass = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};




// Export components
export { ColorBoxes, addClass }; // Named exports

// Optionally, you can set one as the default export if needed
export default ColorBoxes;


