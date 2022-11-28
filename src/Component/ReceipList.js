import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallreceips } from "../js/actions/receipsActions";
import ReceipCard from "./ReceipCard";

const ReceipList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallreceips("chiken"));
  }, []);
  const list = useSelector((state) => state.receipesReducer.list);
//   console.log(list);
  return (
    <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-around"}}>
      {list.map((el,i) => (
        <ReceipCard el={el.recipe} key={i} />
      ))}
    </div>
  );
};

export default ReceipList;
