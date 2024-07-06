import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
            selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

    return (
        <section className="bg-white text-gray-900 min-h-screen flex items-center justify-center" style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
            <div className="container mx-auto px-4">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex justify-between mb-6">
                        <h5 className='text-lg font-semibold'>{question?.question}</h5>
                        <h5 className="text-green-500">{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
                    </div>
                    <div>
                        {
                            question?.options?.map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-full text-left py-2 px-3 mt-3 rounded-md bg-gray-700 text-white hover:bg-gray-600 focus:outline-none ${correctAnswer === item && 'bg-green-500'}`}
                                    onClick={(event) => checkAnswer(event, item)}
                                    disabled={!!selectedAnswer}
                                >
                                    {item}
                                </button>
                            ))
                        }
                    </div>

                    {
                        (questionIndex + 1) !== quizs.length ?
                            <button
                                className='w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none'
                                onClick={nextQuestion}
                                disabled={!selectedAnswer}
                            >
                                Next Question
                            </button>
                            :
                            <button
                                className='w-full mt-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none'
                                onClick={showTheResult}
                                disabled={!selectedAnswer}
                            >
                                Show Result
                            </button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Quiz;
