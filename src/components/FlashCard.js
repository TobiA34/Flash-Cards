import React from 'react'
import ReactCardFlip from "react-card-flip";
import { Button, Modal, Form } from "react-bootstrap";
import { useFlashcardContext } from "../context/FlashCardContext";

function FlashCard() {
  const {
    flashcards,
    currentIndex,
    isFlipped,
    showModal,
    setIsFlipped,
    setShowModal,
    addFlashcard,
    nextFlashcard,
  } = useFlashcardContext();

  const handleFlip = () => setIsFlipped((prev) => !prev);

  const handleAddFlashcard = (e) => {
    e.preventDefault();
    const question = e.target.question.value.trim();
    const answer = e.target.answer.value.trim();
    if (question && answer) {
      addFlashcard(question, answer);
      setShowModal(false);
      e.target.reset(); // Reset form fields
    }
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          className="card text-white bg-primary d-flex align-items-center justify-content-center text-center p-4"
          style={{
            width: "400px",
            height: "700px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          onClick={handleFlip}
        >
          <h2>{flashcards[currentIndex]?.question}</h2>
        </div>
        <div
          className="card text-white bg-danger d-flex align-items-center justify-content-center text-center p-4"
          style={{
            width: "400px",
            height: "700px",
            borderRadius: "15px",
            cursor: "pointer",
          }}
          onClick={handleFlip}
        >
          <h2>{flashcards[currentIndex]?.answer}</h2>
        </div>
      </ReactCardFlip>

      <div className="mt-4 d-flex gap-3">
        <Button variant="success" onClick={nextFlashcard}>
          Next Question
        </Button>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Flashcard
        </Button>
      </div>

      {/* Modal for adding flashcards */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Flashcard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFlashcard}>
            <Form.Group className="mb-3">
              <Form.Label>Question</Form.Label>
              <Form.Control
                type="text"
                name="question"
                placeholder="Enter question"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Answer</Form.Label>
              <Form.Control
                type="text"
                name="answer"
                placeholder="Enter answer"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FlashCard;
