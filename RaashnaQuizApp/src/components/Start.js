import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const { startQuiz, showStart } = useContext(DataContext);
    return (
        <section className='text-white text-center bg-white min-h-screen flex items-center justify-center' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container mx-auto px-4">
                <div className="max-w-lg mx-auto">
                    <h1 className='text-4xl font-bold mb-8'>Basic React JS Quiz</h1>
                    <button
                        onClick={startQuiz}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Start;
