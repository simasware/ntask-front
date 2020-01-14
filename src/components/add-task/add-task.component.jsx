import React from "react";
import { Form } from "react-bootstrap";
import "./add-task.styles.scss";

const AddTask = ({handleChange}) => (
  <div className="add-task">
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Informe a tarefa"
          required
          onChange={handleChange}
          name="title"
          autoComplete="off"          
        />
      </Form.Group>
    </Form>
  </div>
);

export default AddTask;
