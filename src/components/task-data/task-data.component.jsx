import React from "react";
import { Table, Form } from "react-bootstrap";

const TaskData = ({ data, handleCheck }) => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Tarefa</th>
        <th>Finalizada</th>
      </tr>
    </thead>
    <tbody>
      {data.map(task => {
        return (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.finalizado ? "SIM" : "NÃO"}</td>
            <td>{task.finalizado ? "" : <Form.Control type="checkbox" onClick={handleCheck} data-taskid={task.id}/> }</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default TaskData;
