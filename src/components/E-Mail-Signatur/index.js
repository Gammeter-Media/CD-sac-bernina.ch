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



    let test = `<p><b>` + formValues.vorname +` ` + formValues.name +`/b>
`+ formValues.funktion + `</p>
<p><b>Schweizer Alpen-Club SAC | Sektion Bernina</b>
<a href="` + formValues.email +`">` + formValues.email  +`</a> | <a href="https://www.sac-bernina.ch">sac-bernina.ch</a></p>`

    return (
        <div className="signatur">
            <input type="text" name="vorname" placeholder="Vorname" value={formValues.vorname} onChange={handleChange}/>
            <input type="text" name="name" placeholder="Name" value={formValues.name} onChange={handleChange}/>
            <input type="text" name="funktion" placeholder="Funktion" value={formValues.funktion} onChange={handleChange}/>
            <input type="email" name="email" placeholder="E-Mail"value={formValues.email} onChange={handleChange}/>     

            <pre>
                <code>
                    {test}
                    
                </code>
            </pre>
        </div>
        

        
    );


};


export { Signatur};

export default Signatur;

