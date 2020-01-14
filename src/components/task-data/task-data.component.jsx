import React from "react";
import { Table, Form, Button } from "react-bootstrap";

const TaskData = ({ data, handleCheck, handleDelete }) => (
  <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Finalizada</th>
        <th>Tarefa</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      {data.map(task => {
        return (
          <tr key={task.id}>            
            <td>
              {task.finalizado ? (
                "SIM"
              ) : (                
                "NÃO"
              )}
            </td>
            <td>{task.title}</td>
            <td><Button onClick={handleDelete}>Excluir</Button></td>
            <td>              
              {task.finalizado ? (
                ""
              ) : (                
                <Button onClick={handleCheck} data-taskid={task.id}>Finalizar</Button>                
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default TaskData;
