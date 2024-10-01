import React, { useContext, useState, useEffect } from "react";
import "./game3connectinglink.css"; // Import your income bracket page styles
import { Link } from "react-router-dom";
import  { IncomeBracketContext } from "../../contexts/IncomeBracket"; // Import the IncomeBracket context


function IncomeBracketPage() {
    const {bracket, setBracket} = useContext(IncomeBracketContext);

    useEffect(() => {
        if (!bracket) {
            setBracket(brackets.low); // Set a default bracket if none is set
        }
        console.log(bracket);
    }, [bracket, setBracket]);

    
    // Define the income brackets
    const brackets = {
        low: {
            label: "LOW Income Bracket",
            income: 30000,
            expenses: 8000,
            payday: 22000,
            assets: {
                property: 60000,
                vehicles: 60000,
                other: 60000,
            },
            liabilities: {
                mortgage: 60000,
                loans: 600000,
                other: 15000,
            },
        },
        mid: {
            label: "MID Income Bracket",
            income: 60000,
            expenses: 20000,
            payday: 40000,
            assets: {
                property: 120000,
                vehicles: 100000,
                other: 90000,
            },
            liabilities: {
                mortgage: 100000,
                loans: 300000,
                other: 20000,
            },
            },
            high: {
            label: "HIGH Income Bracket",
            income: 150000,
            expenses: 50000,
            payday: 100000,
            assets: {
                property: 250000,
                vehicles: 150000,
                other: 200000,
        },
        liabilities: {
            mortgage: 200000,
            loans: 100000,
            other: 50000,
        },
        },
    };

    // Set the default income bracket to low

    if (!bracket) {
        return <div>Loading...</div>; // Show a loading state if the income bracket is not yet set
    }
        
    return (
        <div className="wrapperconn">
    
        
        <div className="containerconn">
        <div>
            <select name="bracket" id="bracket" onChange={(e)=>{
                setBracket(brackets[e.target.value]);
            }} value={bracket.label}>
                <option value="low">Low</option>
                <option value="mid">Mid</option>
                <option value="high">High</option>
            </select>
        </div>
            <h3>
            <b>{bracket.label}</b>
            </h3>
            <p className="para" style={{ marginBottom: "5px" }}>
            You have the following financial components with you:
            <br />
            <div className="financial-card">
                <b>Income:</b> Rs. {bracket.income}
                <br />
                <b>Expenses:</b> Rs. {bracket.expenses}
                <br />
                <b>PayDay:</b> Rs. {bracket.payday}
            </div>
            <br />
            <div className="display_ass_liabs">
                <div className="disp_ass">
                <b>Assets</b>
                <br />
                Property: Rs. {bracket.assets.property}
                <br />
                Vehicles: Rs. {bracket.assets.vehicles}
                <br />
                Other: Rs. {bracket.assets.other}
                </div>
                <div className="disp_liabs">
                <b>Liabilities</b>
                <br />
                Mortgage: Rs. {bracket.liabilities.mortgage}
                <br />
                Loans: Rs. {bracket.liabilities.loans}
                <br />
                Other: Rs. {bracket.liabilities.other}
                </div>
            </div>
            </p>
            <div className="buttons">
                <Link to={'../Learn'}>
                <input
                type="button"
                id="back_btn"
                value="Back"
                // Go back to the StartPage when clicked
            />
                </Link>
            
            <Link to={'/Learn/BudgetSim'}>
            <input
                type="button"
                id="start_btn"
                value="Start"
                // Move to the BudgetSim game when clicked
            />
            </Link>
            
            </div>
        </div>
        </div>
    )
}




export default IncomeBracketPage;
