import React from "react";
import { Modal, Button } from "react-bootstrap";
import AddTask from "../add-task/add-task.component";

class AddTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: ""
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleClose() {
    this.setState({
      show: false,
      title: ""
    });
  }

  handleSave() {
    const { title } = this.state;
    this.setState({
      show: false,
      title: ""
    });
    this.props.save(title);
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleChange = event => {
    this.setState({
      title: event.target.value
    });
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Adicionar Tarefa
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adicionar Tarefa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddTask handleChange={this.handleChange} data={this.state.data} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Fechar
            </Button>
            <Button variant="primary" onClick={this.handleSave}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddTaskModal;
