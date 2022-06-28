import React, {useState} from 'react';

const HelloWorldPage = () => {
    const [val, setValue] = useState('')
    const [visible, setVisible] = useState(false)
    const toggle = () => setVisible(prev => !prev)
    return (
        <div>
            { visible && <h1 id="header"> Hello World</h1> }
            <input id="input" value={val} onChange={e => setValue(e.target.value)} type="text"/>
            <button id="toggle" type="submit" onClick={toggle}>Submit</button>
        </div>
    );
};

export default HelloWorldPage;