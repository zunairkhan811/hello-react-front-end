import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import fetchData from "../redux/welcome/fetchApi";

const MessageList = () => {
    const state = useSelector((state) => state.Lists);
    console.log(state)
    const dispatch = useDispatch();

    useEffect(() => {
        if (state.data.length === 0) {
            dispatch(fetchData());
          } 
        }, [dispatch, state.data]);


  return (
    <>
      <div className="row">
        <h1>{state.data.message}</h1>
      </div>
    </>
  );
};

export default MessageList;
