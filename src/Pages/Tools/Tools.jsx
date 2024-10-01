import React from 'react'
import RetirementCalculator from './RetirementCalculator'
import EMICalculator from './EMICalculator'
import CurrencyConverter from './CurrencyConverter'
import Investment from './Invesment'

function Tools() {
    return (
        <>
            <Investment/>
            <RetirementCalculator />
            <EMICalculator />
            <CurrencyConverter />
            
        </>
    )
}

export default Tools
