import React, {useState, useEffect} from 'react';
import Button from '../../../components/Button';
let isRun = false;

const LifeCycle = () => {
    // function : Dong dau tien thuong se giong contructor
    // if (isRun === false){
    //     console.log("Day co phai la constructor?");
    //     isRun = true;
    // }

    const [counter, setCounter] = useState(0);  // se return ve 1 array
    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        console.log("useEffect run");
    });

    console.log("Truoc khi return <=> Render");
    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks</h1>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>Counter Add</button>
            <button onClick={()=>{
                setVisible(false);
            }}>Hide Button component</button>
            {
                visible && <Button />
            }
        </div>
    )
};

export default LifeCycle;