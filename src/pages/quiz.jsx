import React, { useState, useEffect } from "react";

import {
  Box,
  Radio,
  Button,
  Container,
  FormLabel,
  Typography,
  RadioGroup,
  FormControl,
  LinearProgress,
  FormControlLabel,
} from "@mui/material";

const Quiz = () => {
  // Define the questions with categories
  const quizData = [
    {
      category: 'monthly_expense',
      questions: [
        { question: "How much do you spend on dining out each month?", options: ["< $100", "$100 - $300", "$300 - $500", "> $500"] },
        { question: "How much do you spend on entertainment each month?", options: ["< $50", "$50 - $150", "$150 - $300", "> $300"] }
      ]
    },
    {
      category: 'monthly_income',
      questions: [
        { question: "What is your monthly income range?", options: ["< $2000", "$2000 - $4000", "$4000 - $6000", "> $6000"] },
        { question: "Do you have any additional sources of income?", options: ["No", "Yes, occasional", "Yes, regular", "Yes, substantial"] }
      ]
    },
    {
      category: 'investment_horizon',
      questions: [
        { question: "How long do you plan to keep your investments?", options: ["Less than 1 year", "1-3 years", "3-5 years", "More than 5 years"] },
        { question: "Are you comfortable with long-term investment risks?", options: ["Not at all", "Somewhat", "Moderately", "Very comfortable"] }
      ]
    },
    {
      category: 'financial_goals',
      questions: [
        { question: "What is your primary financial goal?", options: ["Save for retirement", "Buy a house", "Education", "Travel"] },
        { question: "How important is this goal to you?", options: ["Not important", "Somewhat important", "Very important", "Extremely important"] }
      ]
    },
    {
      category: 'past_investment_experience',
      questions: [
        { question: "Have you invested in stocks or bonds before?", options: ["No", "A little", "Moderately", "Extensively"] },
        { question: "How satisfied were you with your past investments?", options: ["Very dissatisfied", "Dissatisfied", "Neutral", "Satisfied"] }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  // Get current question and category
  const currentCategory = quizData[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    const updatedAnswers = [...userAnswers, { category: currentCategory.category, answer: selectedOption }];
    setUserAnswers(updatedAnswers);

    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCategoryIndex < quizData.length - 1) {
      setSelectedOption(null);
      setCurrentQuestionIndex(0);
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    } else {
      setShowResults(true);
    }

    localStorage.setItem(
      "quizProgress",
      JSON.stringify({
        currentCategoryIndex,
        currentQuestionIndex,
        userAnswers: updatedAnswers,
      })
    );
  };

  const handleRestartButtonClick = () => {
    setCurrentCategoryIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResults(false);
    setUserAnswers([]);
    localStorage.removeItem("quizProgress");
  };

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      const {
        currentCategoryIndex: savedCategoryIndex,
        currentQuestionIndex: savedQuestionIndex,
        userAnswers: savedAnswers,
      } = JSON.parse(savedProgress);
      if (savedCategoryIndex < quizData.length) {
        setCurrentCategoryIndex(savedCategoryIndex);
        setCurrentQuestionIndex(savedQuestionIndex);
        setUserAnswers(savedAnswers);
      }
    }
  }, [quizData.length]);

  useEffect(() => {
    localStorage.setItem(
      "quizProgress",
      JSON.stringify({
        currentCategoryIndex,
        currentQuestionIndex,
        userAnswers,
      })
    );
  }, [currentCategoryIndex, currentQuestionIndex, userAnswers]);

  if (showResults) {
    // Here you can implement mapping logic based on userAnswers
    // Example: Mapping user based on investment horizon answers
    const investmentHorizonAnswers = userAnswers.filter(answer => answer.category === 'investment_horizon');
    const investmentHorizonProfile = investmentHorizonAnswers.some(answer => answer.answer === 'More than 5 years') ? 'Long Horizon' : 'Short Horizon';
    

    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Quiz Completed
        </Typography>
        <Typography variant="h6" gutterBottom>
          Your Investment Horizon Profile: {investmentHorizonProfile}
          
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestartButtonClick}
          sx={{ mt: 2 }}
        >
          Restart Quiz
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {/* Centered progress bar */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <LinearProgress
          variant="determinate"
          value={(currentCategoryIndex * 100 / quizData.length) + ((currentQuestionIndex + 1) / currentCategory.questions.length * 100 / quizData.length)}
          sx={{ width: '100%' }}
        />
      </Box>

      {/* Left-aligned question and options */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          {currentQuestion.question}
        </Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">Options</FormLabel>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {currentQuestion.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>

      {/* Continue button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextButtonClick}
          disabled={!selectedOption}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default Quiz;