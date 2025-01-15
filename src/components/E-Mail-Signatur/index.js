import React, { useState } from 'react';
import '@site/src/css/E-Mail-Signatur.css';

const Signatur = ({ Vorname = 'Vorname', Name = 'Name', Funktion = 'Funktion', Email = 'info@sac-bernina.ch' }) => {
    // State to manage form inputs
    const [formValues, setFormValues] = useState({
        vorname: Vorname,
        name: Name,
        funktion: Funktion,
        email: Email,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const [svg, setSvg] = useState( <svg viewBox="0 0 20 20" width="15" height="15"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V15H4V3H16V1Z"></path></svg>)




    // copy button 
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
        const _svg = svg;
        setSvg(<svg viewBox="0 0 20 20" width="15" height="15"><path fill="green" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>)
        
        setTimeout(()=>{
            setSvg(_svg)
            console.log('waiting')
        }, 1000)
                
      };


    

    

    let code = `<p><b>` + formValues.vorname +` ` + formValues.name +`</b><br />
`+ formValues.funktion + `</p>
<p><b>Schweizer Alpen-Club SAC | Sektion Bernina</b><br />
<a href="` + formValues.email +`">` + formValues.email  +`</a> | <a href="https://www.sac-bernina.ch">sac-bernina.ch</a></p>`


    return (
        <div className="signatur">
            <input type="text" name="vorname" placeholder="Vorname" value={formValues.vorname} onChange={handleChange}/>
            <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
            <input type="text" name="funktion" placeholder="Funktion" value={formValues.funktion} onChange={handleChange}/>
            <input type="email" name="email" placeholder="E-Mail"value={formValues.email} onChange={handleChange}/>     

            <div className= "codeContainer">
                <pre>
                    <button onClick={copyToClipboard}  >
                        {svg}
                    </button>

                    <code>
                        {code}
                        
                    </code>
                </pre>
            </div>
        </div>
        

        
    );


};


export { Signatur};

export default Signatur;

