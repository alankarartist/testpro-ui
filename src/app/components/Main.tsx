'use client';
import Image from 'next/image';
import { FC, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const MainSection: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const buttons = ['GATE', 'UPSC', 'NEET', 'GMAT', 'GRE', 'IELTS', 'LSAT'];
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? buttons.length - 1 : prevIndex - 1
        );
    };
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === buttons.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <>
        {/* Main Section */}
        <section id="main" className="bg-white py-24">
            <div className="container mx-auto flex flex-col items-center lg:flex-row justify-between">
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <Image
                src="/images/student-working.png"
                alt="Student working"
                width={400}
                height={400}
                />
            </div>
            <div className="text-center lg:w-1/3">
                <h2 className="text-4xl font-semibold text-gray-900">Your Gateway to Competitive Success</h2>
                <button className="mt-6 w-96 bg-customPurple text-white px-6 py-3 rounded-md">Get Started</button>
            </div>
            </div>
        </section>

        {/* Exam Tabs */}
        <section id="exam" className="bg-customLavender py-4">
            <div className="container mx-auto flex justify-center space-x-4">
            <button onClick={goToPrevious} className="p-2 rounded-md bg-customPurple text-customLavender hover:bg-customPurple transition-all">
                <FiChevronLeft size={24} />
            </button>

            <div className="flex overflow-x-auto space-x-6 px-4">
                {buttons.map((button, index) => (
                <button key={index} className={`px-4 py-2 border-0 text-black text-lg font-extrabold transition-all 
                    ${ index === currentIndex ? 'bg-customPurple text-customLavender' : ' text-black hover:bg-customPurple hover:text-customLavender'}
                    `}>
                    {button}
                </button>
                ))}
            </div>

            <button onClick={goToNext} className="p-2 rounded-md bg-customPurple text-customLavender hover:bg-customPurple transition-all">
                <FiChevronRight size={24} />
            </button>
            </div>
        </section>

        {/* Real-Time Analytics Section */}
        <section id="info" className="py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
                <Image
                src="/images/analytics-graph.png"
                alt="Analytics"
                width={400}
                height={400}
                />
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <h3 className="text-3xl font-semibold text-gray-800">Real-Time Analytics</h3>
                <p className="mt-4 text-gray-600">
                Offer tailored mock tests based on the user’s preparation level, focusing on their weak areas. Provide detailed real-time analytics, including time spent per question, accuracy rate, and comparison with top performers.
                </p>
            </div>
            </div>
        </section>

        {/* Comprehensive Test Coverage Section */}
        <section id="subinfo" className="py-16 bg-gray-50">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
                <h3 className="text-3xl font-semibold text-gray-800">Comprehensive Test Coverage</h3>
                <p className="mt-4 text-gray-600">
                Offers mock tests for a wide range of competitive exams, from government jobs to management and technical fields, all in one place.
                </p>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-end">
                <Image
                src="/images/test-coverage.png"
                alt="Test Coverage"
                width={400}
                height={400}
                />
            </div>
            </div>
        </section>
        </>
    );
};

export default MainSection;
