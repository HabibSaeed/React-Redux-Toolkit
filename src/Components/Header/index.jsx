import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addcounter } from "../../Store/slices/myCounter";
import './Header.css';

const Header = () => {
    const { count } = useSelector((state) => state.counterSlice);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(addcounter());
    };

    return (
        <div className="header-container">
            <h1>Press The Button For +1</h1>
            <button className="increment-button" onClick={handleIncrement}>Count : {count}</button>
        </div>
    );
}

export default Header;
