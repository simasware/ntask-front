import React from "react";
import TaskData from "../../components/task-data/task-data.component";
import AddTaskModal from "../../components/add-task-modal/add-task-modal.component";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./tasks.styles.scss";

class Tasks extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, title: "Comprar cerveja", finalizado: false },
        { id: 2, title: "Estudar Node", finalizado: false },
        { id: 3, title: "Estudar React", finalizado: false }
      ],
      filtraFinalizado: false
    };
    this.save = this.save.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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
    let taskid = event.target.dataset.taskid;
    if (taskid < 0) return;
    const { tasks } = this.state;
    let t = tasks.find(item => {
      return item.id == taskid;
    });
    t.finalizado = true;
    this.setState({
      tasks: tasks
    });
  };

  handleDelete = event => {
    let taskid = event.target.dataset.taskid;
    let remove = this.state.tasks
      .map(function(item) {
        return item.value;
      })
      .indexOf(taskid);
    this.setState({
      tasks: this.state.tasks.filter((_, i) => i !== remove)
    });
  };

  handleFilter = event => {
    this.setState({ filtraFinalizado: event.target.checked });
  };

  render() {
    const { filtraFinalizado } = this.state;
    let { tasks } = this.state;
    if (!filtraFinalizado) {
      tasks = tasks.filter(value => {
        return value.finalizado === false;
      });
    }
    return (
      <Container>
        <h1>Tarefas</h1>
        <Row>
          <Col>
            <TaskData
              data={tasks}
              handleCheck={this.handleCheck}
              handleDelete={this.handleDelete}
            />
          </Col>
        </Row>

        <Row>
          <Col sm={10}>
            <div className="buttons">
              <AddTaskModal save={this.save} />
              <Form.Check
                inline
                label="Exibir finalizados"
                type="checkbox"
                onClick={this.handleFilter}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
