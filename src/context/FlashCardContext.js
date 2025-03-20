import React, { createContext, useContext, useState } from "react";

const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [flashcards, setFlashcards] = useState([
    { question: "What is 5 + 7?", answer: "12" },
    { question: "What is 9 × 3?", answer: "27" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const addFlashcard = (question, answer) => {
    setFlashcards([...flashcards, { question, answer }]);
  };

  const nextFlashcard = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        currentIndex,
        isFlipped,
        showModal,
        setIsFlipped,
        setShowModal,
        addFlashcard,
        nextFlashcard,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

export const useFlashcardContext = () => useContext(FlashcardContext);
