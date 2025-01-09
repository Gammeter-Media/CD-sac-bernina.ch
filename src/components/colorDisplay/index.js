import React from 'react';
import styles from '@site/src/components/HomepageFeatures/styles.module.css';


// Primary component
const ColorBoxes = ({ web, RGB,  pantone, cmyk}) => {
return (
<div className={styles.logofarben}>
    <span>pantone: {pantone}</span>
    <span>cmyk: {cmyk}</span>
    <span>web: {web}</span>
    <span>rgb: {RGB}</span>
    
    <div style={{ backgroundColor: web, width: "100%", height: "100%" }}>
    </div>
</div>

)};



// ColorContainer component
const AddClass = ({ className }) => {
    return (
        <div className={className}></div>
    );
};

const Schmuckfarben = ({ Primary, primarycmyk, secondary, secondarycmyk}) => {
    return (
        <div className={styles.schmuckfarben} style={{ backgroundColor: Primary }}>
            <div className={styles.schmukfarbenTop} style={{ backgroundColor: secondary }}>
                <div>
                    <span>CMYK: {secondarycmyk}</span>
                    <span>RGB: {secondary}</span>
                </div>
            </div>
            <div>
                <span>CMYK: {primarycmyk}</span>
                <span>RGB: {Primary}</span>
            </div>
        </div>
    );
};

export { ColorBoxes, AddClass, Schmuckfarben };
export default Schmuckfarben;


