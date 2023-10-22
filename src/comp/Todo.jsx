import React, { useEffect, useState } from "react";
import CreateTask from "./CreateTask";
import Cards from "./Cards";

export default function Todo() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const savetask = (taskObj) => {
    let templist = taskList;
    templist.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(templist));
    setTaskList(templist);
    setModal(false);
  };
  const handleDel = (ind) => {
    localStorage.removeItem("taskList");
    let newList = taskList.filter((obj, i) => i !== ind);
    localStorage.setItem("taskList", JSON.stringify(newList));

    setTaskList(newList);
  };
  const updateListArray = (Ob, ind) => {
    let templist = taskList;
    templist[ind] = Ob;
    setTaskList(templist);
    localStorage.setItem("taskList", JSON.stringify(templist));
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="hero">
        <h1>TODO LIST</h1>
        <button
          className=" btn bg-primary text-white"
          type="button"
          onClick={() => setModal(true)}>
          Create
        </button>
      </div>
      <div className="container">
        {taskList.map((ob, ind) => (
          <Cards
            key={ind}
            ob={ob}
            ind = {ind}
            handleDel={() => handleDel(ind)}
            updateListArray={updateListArray}
          />
        ))}
      </div>

      <CreateTask modal={modal} toggle={toggle} savetask={savetask} />
    </>
  );
}
