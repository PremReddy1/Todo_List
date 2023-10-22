import React, { useState } from "react";
import EditTask from "./UpdateTask";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";

function Cards({ ob, ind,handleDel, updateListArray }) {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const edittask = (ob) => {
    updateListArray(ob, ind)
  }
  return (
    <>
      <Card
        className="my-2 border border-0 "
        style={{
          width: "18rem",
        }}>
        <CardBody className="cardbody rounded">
          <CardTitle className="rounded bg-body-tertiary title" tag="h5">
            {ob.data}
          </CardTitle>
          <CardText>{ob.desc}</CardText>
          <div className="Buttons">
            <Button className="btn btn-danger" onClick={handleDel}>
              Delete
            </Button>
            <Button
              className="btn btn-btn-secondary"
              onClick={() => setModal(true)}>
              Edit
            </Button>
          </div>
        </CardBody>
      </Card>
      <EditTask modal={modal} toggle={toggle} ob = {ob} edittask={edittask} />
    </>
  );
}
export default Cards;
