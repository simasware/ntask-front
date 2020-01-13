import React from "react";
import TaskData from "../../components/task-data/task-data.component";
import AddTaskModal from "../../components/add-task-modal/add-task-modal.component";
import { Container, Row, Col } from "react-bootstrap";
import "./tasks.styles.scss";

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, title: "Comprar cerveja", finalizado: false },
        { id: 2, title: "Estudar Node", finalizado: false },
        { id: 3, title: "Estudar React", finalizado: false }
      ]
    };
    this.save = this.save.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  save(newTitle) {
    console.log(`Entrou no save ${newTitle}`);
    const { tasks } = this.state;
    let newTasks = tasks;
    newTasks.push({
      id: newTasks.length + 1,
      title: newTitle,
      finalizado: false
    });
    this.setState({
      tasks: newTasks
    });
  }

  handleCheck = event => {
    const { checked } = event.target;
    if (!checked) return;
    let taskid = event.target.dataset.taskid;
    const { tasks } = this.state;
    let t = tasks.find(item => {
      return item.id == taskid;
    });
    console.log(t);
  };

  render() {
    return (
      <Container>
        <h1>Tarefas</h1>
        <Row>
          <Col>
            <TaskData data={this.state.tasks} handleCheck={this.handleCheck} />
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <AddTaskModal save={this.save} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
