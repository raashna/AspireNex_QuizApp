import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);
    return (
        <section className="bg-white text-gray-900 min-h-screen flex items-center justify-center" style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <div className="container mx-auto px-4">
                <div className={`rounded-lg shadow-lg p-6 ${marks > (quizs.length * 5 / 2) ? 'bg-green-600' : 'bg-red-600'}`}>
                    <h1 className='text-3xl font-bold mb-2'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                    <h3 className='text-xl font-bold mb-3'>Your score is {marks} out of {quizs.length * 5}</h3>

                    <button
                        onClick={startOver}
                        className='px-4 py-2 bg-gray-300 text-gray-900 font-semibold rounded-md hover:bg-gray-400 focus:outline-none'
                    >
                        Start Over
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Result;
