// import React, {useEffect, useState} from 'react';
// import User from "./user/User";
//
// const App = () => {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [val, setVal] =useState('')
//
//     const onClick= () => setToggle(prev => !prev)
//     useEffect(() => {
//         setTimeout(() => {
//             setData('abc')
//         }, 100)
//     }, [])
//
//     return (
//         <div>
//             <User/>
//             {/*<div data-testid="input-value-div">{val}</div>*/}
//             {/*{toggle && <div data-testid="toggle-elem">toggle</div>}*/}
//             {/*<h1>hello world</h1>*/}
//             {/*<div>{data}</div>*/}
//             {/*<input data-testid="input-test" type="text" value={val} onChange={e => setVal(e.target.value)}  placeholder="enter value"/>*/}
//             {/*<button data-testid="toggle-button" onClick={onClick}>click me...</button>*/}
//         </div>
//     );
// };
//
// export default App;

import React from 'react';
import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <div>
                <NavBar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;