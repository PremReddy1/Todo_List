import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
export default function EditTask({ modal, toggle, ob, edittask }) {
  const [data, setData] = useState("");
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setData(ob.data) ;
    setDesc(ob.desc);
  }, [ob]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "data") {
      setData(value);
    } else {
      setDesc(value);
    }
  };
  const handleEdit = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["data"] = data;
    taskObj["desc"] = desc;
    edittask(taskObj);
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label htmlFor="data"> Task Name</label>
              <input
                className="form-control"
                type="text"
                name="data"
                id="data"
                value={data}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Task Description</label>
              <textarea
                className="form-control"
                name="desc"
                id="desc"
                value={desc}
                onChange={handleChange}
                rows="5"></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>
            Edit
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
