import React, {useState, useEffect, useMemo} from 'react';
import Button from '../../../components/Button';
let isRun = false;

const LifeCycle = () => {
    // function : Dong dau tien thuong se giong contructor
    // if (isRun === false){
    //     console.log("Day co phai la constructor?");
    //     isRun = true;
    // }
    // console.log("constructor");
    useMemo(()=>{
        console.log('useMemo run <=> constructor');
    },[]);
    const [counter, setCounter] = useState(0);  // se return ve 1 array
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState({
        firstName: 'Nguyen',
        lastName: 'Tin'
    })

    useEffect(()=>{
        console.log("useEffect run");
    });

    useEffect(()=>{
        console.log("Lang nghe su thay doi cua Counter");
    }, [counter]);
    
    useEffect(()=>{
        console.log("Lang nghe su thay doi cua Visible");
    }, [visible]);

    const fullName = useMemo(() =>{
        return user.firstName + ' ' + user.lastName;
    },[user]);

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