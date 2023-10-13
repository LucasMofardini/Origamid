import React, { useState } from 'react';

const Checkbox = ({ label } : { label: string }) => {
    const [value, setValue] = useState(false);

    // Nesse caso o React.ChangeEventHandler é generico, portanto passamos o tipo de HTMLInputElement
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => 
        setValue(event.currentTarget.checked);

    return(
        <label style={{ 
            padding: '1rem',
            border: value ? '2px solid #8D2' : '2px solid #f70'
        }}>
            <input type='checkbox' checked={value} onChange={({ currentTarget }) => setValue(currentTarget.checked)}/>
            {label}
        </label>
    )
}

export default Checkbox;