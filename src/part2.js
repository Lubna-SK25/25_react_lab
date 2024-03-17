import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Part2 = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {
    if (e.target.id === 'taskInput') {
      setTask(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      if (editingIndex === -1) {
        setTasks([...tasks, { title: task, description }]);
      } else {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex] = { title: task, description };
        setTasks(updatedTasks);
        setEditingIndex(-1);
      }
      setTask('');
      setDescription('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setTask(tasks[index].title);
    setDescription(tasks[index].description);
    setEditingIndex(index);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="mt-4 mb-4">Task Manager</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="taskInput">
              <Form.Control
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="descriptionInput">
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {editingIndex === -1 ? 'Add New Task' : 'Update Task'}
            </Button>
          </Form>
          <ListGroup className="mt-4">
            {tasks.map((task, index) => (
              <ListGroup.Item key={index}>
                <h5>{task.title}</h5>
                <p className="small">{task.description}</p>
                <Button
                  variant="primary"
                  className="ml-auto"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Part2;
