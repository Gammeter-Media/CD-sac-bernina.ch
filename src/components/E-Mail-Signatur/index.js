import React, { useState } from 'react';
import '@site/src/css/E-Mail-Signatur.css';

const Signatur = ({ Vorname = 'Vorname', Name = 'Name', Funktion = 'Funktion', EMail = 'info@sac-bernina.ch' }) => {
    // State to manage form inputs
    const [formValues, setFormValues] = useState({
        vorname: Vorname,
        name: Name,
        funktion: Funktion,
        email: EMail,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // copy button 
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code)
      };
    

    

    let code = `<p><b>` + formValues.vorname +` ` + formValues.name +`</b><br />
`+ formValues.funktion + `</p>
<p><b>Schweizer Alpen-Club SAC | Sektion Bernina</b>
<a href="` + formValues.email +`">` + formValues.email  +`</a> | <a href="https://www.sac-bernina.ch">sac-bernina.ch</a></p>`


    console.log({code});
    return (
        <div className="signatur">
            <input type="text" name="vorname" placeholder="Vorname" value={formValues.vorname} onChange={handleChange}/>
            <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
            <input type="text" name="funktion" placeholder="Funktion" value={formValues.funktion} onChange={handleChange}/>
            <input type="email" name="email" placeholder="E-Mail"value={formValues.email} onChange={handleChange}/>     

            <div className= "codeContainer">
                <pre>

                    <button onClick={copyToClipboard}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                        </svg>
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

