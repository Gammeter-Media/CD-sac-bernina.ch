import React from 'react';

// Primary component
const ColorBoxes = ({ hex, className, pantone}) => {
    return (
    <div className={className}>
        <span>{pantone}</span>
        <span>{hex}</span>       
        
        <div style={{ backgroundColor: hex, width: "100%", height: "100%" }}>
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


