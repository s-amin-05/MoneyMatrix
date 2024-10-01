import React, { useState } from 'react';

const FinancialEducationRoadmap = () => {
    const roadmapStages = [
        {
            step: 1,
            title: "Understanding Basic Personal Finance",
            description: "Budgeting: Learn how to create a budget that tracks your income and expenses. Budgeting ensures you're not overspending and helps you save money each month.",
            videoUrl: "https://www.youtube.com/embed/UcAY6qRHlw0?si=bfylj-58LsaJ_gbt", // Replace with actual video ID
            quiz: [
                {
                    question: "What is the primary purpose of budgeting?",
                    options: ["To track income and expenses", "To increase debt", "To save for retirement", "To invest in stocks"],
                    answer: "To track income and expenses"
                },
                {
                    question: "What is a common method of budgeting?",
                    options: ["Zero-based budgeting", "Spending freely", "Ignoring expenses", "Maxing out credit cards"],
                    answer: "Zero-based budgeting"
                },
                {
                    question: "Which of the following is a fixed expense?",
                    options: ["Groceries", "Utilities", "Rent", "Entertainment"],
                    answer: "Rent"
                },
                {
                    question: "What should you do first when creating a budget?",
                    options: ["Estimate expenses", "Calculate income", "Ignore previous expenses", "Spend freely"],
                    answer: "Calculate income"
                },
            ]
        },
        {
            step: 2,
            title: "Debt Management",
            description: "Understand different types of debt, how credit scores work, and best practices for managing loans and credit card balances.",
            videoUrl: "https://www.youtube.com/embed/B5nDFRFSHkc?si=XWPoz27rB6efeR3Y", // Replace with actual video ID
            quiz: [
                {
                    question: "What is a credit score?",
                    options: ["A measure of your income", "A measure of your debt", "A measure of your creditworthiness", "A measure of your savings"],
                    answer: "A measure of your creditworthiness"
                },
                {
                    question: "Which type of debt usually has the highest interest rate?",
                    options: ["Mortgage", "Student loans", "Credit cards", "Auto loans"],
                    answer: "Credit cards"
                },
                {
                    question: "What is a good practice for managing debt?",
                    options: ["Ignoring it", "Making minimum payments only", "Creating a debt repayment plan", "Taking on more debt"],
                    answer: "Creating a debt repayment plan"
                },
                {
                    question: "What does it mean to consolidate debt?",
                    options: ["Combining debts into one payment", "Ignoring debt", "Taking out more loans", "Paying off debts slowly"],
                    answer: "Combining debts into one payment"
                },
            ]
        },
        {
            step: 3,
            title: "Investing Basics",
            description: "Get familiar with investment options like stocks, bonds, mutual funds, and ETFs. Learn the risks and rewards of investing.",
            videoUrl: "https://www.youtube.com/embed/qIw-yFC-HNU?si=VplcPicKpe9jZdqz", // Replace with actual video ID
            quiz: [
                {
                    question: "What is a stock?",
                    options: ["A loan to the government", "Ownership in a company", "A type of savings account", "A fixed income investment"],
                    answer: "Ownership in a company"
                },
                {
                    question: "What is the main purpose of diversification?",
                    options: ["To increase risk", "To reduce potential losses", "To limit investment options", "To ensure high returns"],
                    answer: "To reduce potential losses"
                },
                {
                    question: "Which investment is generally considered less risky?",
                    options: ["Stocks", "Bonds", "Real estate", "Cryptocurrency"],
                    answer: "Bonds"
                },
                {
                    question: "What does an ETF stand for?",
                    options: ["Equity Transfer Fund", "Exchange-Traded Fund", "Emergency Trading Fund", "Exchange Time Fund"],
                    answer: "Exchange-Traded Fund"
                },
            ]
        },
        {
            step: 4,
            title: "Advanced Investment Strategies",
            description: "Explore more complex strategies like real estate investing, retirement accounts (401k, IRAs), and portfolio diversification.",
            videoUrl: "https://www.youtube.com/embed/WWr_K0kfrz0?si=SXZYqab1m7bgVCh9", // Replace with actual video ID
            quiz: [
                {
                    question: "What is a 401(k)?",
                    options: ["A type of insurance", "A retirement savings plan", "A government bond", "A type of credit card"],
                    answer: "A retirement savings plan"
                },
                {
                    question: "What is real estate investing?",
                    options: ["Investing in stocks", "Investing in properties", "Investing in bonds", "Investing in mutual funds"],
                    answer: "Investing in properties"
                },
                {
                    question: "What is the purpose of portfolio diversification?",
                    options: ["To minimize taxes", "To reduce risk", "To maximize returns", "To avoid investment fees"],
                    answer: "To reduce risk"
                },
                {
                    question: "Which of the following is NOT a retirement account?",
                    options: ["IRA", "401(k)", "Roth IRA", "Mutual Fund"],
                    answer: "Mutual Fund"
                },
            ]
        },
        {
            step: 5,
            title: "Tax Planning and Wealth Building",
            description: "Learn how to reduce your tax burden and plan for long-term wealth. Understand tax-advantaged accounts, tax deductions, and credits.",
            videoUrl: "https://www.youtube.com/embed/Aub-oMN9q-k?si=gc8JI7zNE-flSPA8", // Replace with actual video ID
            quiz: [
                {
                    question: "What is a tax deduction?",
                    options: ["A tax increase", "An expense that reduces taxable income", "A type of investment", "A tax refund"],
                    answer: "An expense that reduces taxable income"
                },
                {
                    question: "What does a tax credit do?",
                    options: ["Reduces your taxable income", "Reduces the amount of tax you owe", "Increases your tax bill", "Has no effect on taxes"],
                    answer: "Reduces the amount of tax you owe"
                },
                {
                    question: "Which of the following is a tax-advantaged account?",
                    options: ["Checking account", "Savings account", "401(k)", "Brokerage account"],
                    answer: "401(k)"
                },
                {
                    question: "What is capital gains tax?",
                    options: ["Tax on wages", "Tax on profits from the sale of an asset", "Tax on inheritances", "Tax on gifts"],
                    answer: "Tax on profits from the sale of an asset"
                },
            ]
        },
        {
            step: 6,
            title: "Retirement Planning",
            description: "Discover how to create a retirement plan, understand pensions, Social Security, and how to maximize retirement savings accounts.",
            videoUrl: "https://www.youtube.com/embed/JxdUWsudi6g?si=lgxNTCZ7Q-5c8rou", // Replace with actual video ID
            quiz: [
                {
                    question: "What is Social Security?",
                    options: ["A private pension", "A government program providing retirement benefits", "A tax on income", "An investment account"],
                    answer: "A government program providing retirement benefits"
                },
                {
                    question: "What is a pension?",
                    options: ["A retirement savings account", "A government bond", "A guaranteed payment for retirement", "A type of investment"],
                    answer: "A guaranteed payment for retirement"
                },
                {
                    question: "What is the recommended percentage of income to save for retirement?",
                    options: ["5-10%", "10-15%", "15-20%", "20-25%"],
                    answer: "15-20%"
                },
                {
                    question: "What is an IRA?",
                    options: ["Individual Retirement Account", "Individual Rate Account", "International Retirement Account", "Investment Return Account"],
                    answer: "Individual Retirement Account"
                },
            ]
        },
        {
            step: 7,
            title: "Estate Planning and Wealth Transfer",
            description: "Plan for the transfer of wealth through wills, trusts, and estate plans. Understand how to protect your assets and reduce estate taxes.",
            videoUrl: "https://www.youtube.com/embed/xuuqtFPqIxo?si=wZyCxrifpkPgE355", // Replace with actual video ID
            quiz: [
                {
                    question: "What is a will?",
                    options: ["A legal document outlining asset distribution", "A type of trust", "A retirement account", "A tax return"],
                    answer: "A legal document outlining asset distribution"
                },
                {
                    question: "What is a trust?",
                    options: ["A legal arrangement to hold assets", "A type of loan", "A retirement account", "A government bond"],
                    answer: "A legal arrangement to hold assets"
                },
                {
                    question: "What is estate tax?",
                    options: ["Tax on income", "Tax on gifts", "Tax on the transfer of wealth at death", "Tax on savings"],
                    answer: "Tax on the transfer of wealth at death"
                },
                {
                    question: "Which document can help avoid probate?",
                    options: ["Will", "Trust", "Power of Attorney", "Tax Return"],
                    answer: "Trust"
                },
            ]
        }
    ];

    const [openSections, setOpenSections] = useState({});
    const [quizOpen, setQuizOpen] = useState({});
    const [quizResults, setQuizResults] = useState({});

    const toggleSection = (step) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [step]: !prevState[step]
        }));
    };

    const toggleQuiz = (step) => {
        setQuizOpen((prevState) => ({
            ...prevState,
            [step]: !prevState[step]
        }));
    };

    const handleQuizSubmit = (step) => {
        const results = quizResults[step] || {};
        const correctAnswers = roadmapStages[step - 1].quiz.map(q => q.answer);
        const userAnswers = Object.values(results);
        const score = userAnswers.reduce((acc, answer, index) => {
            return acc + (answer === correctAnswers[index] ? 1 : 0);
        }, 0);
        alert(`Your score for Step ${step}: ${score} out of ${correctAnswers.length}`);
    };

    return (
        <div className="roadmap-container mt-10 max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md pb-10">
            <h1 className="text-2xl font-semibold text-center mb-8 text-[#1e3d58q
            ]">Financial Education Roadmap</h1>
            <div className="roadmap">
                {roadmapStages.map((stage) => (
                    <div key={stage.step} className="roadmap-stage mb-6">
                        <div
                            onClick={() => toggleSection(stage.step)}
                            className="cursor-pointer bg-[#386c9b] text-white p-3 rounded-lg shadow-sm hover:bg-[#0f2c3e] transition-colors duration-300"
                        >
                            <h2 className="text-lg font-medium">
                                Step {stage.step}: {stage.title}
                            </h2>
                        </div>
                        {openSections[stage.step] && (
                            <div className="mt-2 p-3 bg-gray-100 rounded-lg shadow-inner">
                                <p className="text-sm text-gray-700">{stage.description}</p>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={stage.videoUrl}
                                    title={`YouTube video for ${stage.title}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="mt-2 rounded-lg"
                                ></iframe>
                                <button
                                    onClick={() => toggleQuiz(stage.step)}
                                    className="mt-4 p-2 bg-[#386c9b] text-white rounded-lg"
                                >
                                    {quizOpen[stage.step] ? "Hide Quiz" : "Take Quiz"}
                                </button>
                                {quizOpen[stage.step] && (
                                    <div className="mt-4">
                                        {stage.quiz.map((q, index) => (
                                            <div key={index} className="mb-4">
                                                <p className="text-sm text-gray-700">{q.question}</p>
                                                <div className="flex flex-col">
                                                    {q.options.map((option, i) => (
                                                        <label key={i} className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                name={`quiz-${stage.step}-${index}`}
                                                                value={option}
                                                                onChange={(e) => {
                                                                    setQuizResults((prev) => ({
                                                                        ...prev,
                                                                        [stage.step]: {
                                                                            ...prev[stage.step],
                                                                            [index]: e.target.value
                                                                        }
                                                                    }));
                                                                }}
                                                            />
                                                            <span className="ml-2">{option}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => handleQuizSubmit(stage.step)}
                                            className="mt-4 p-2 bg-[#386c9b] text-white rounded-lg "
                                        >
                                            Submit Quiz
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinancialEducationRoadmap;
