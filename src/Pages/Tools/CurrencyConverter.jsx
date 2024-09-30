import React, { useState, useId } from "react";
import useCurrencyInfo from "../../hooks/UseCurrencyInfo";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="flex items-center h-auto h-screen bg-[#e8eef1]">
      <div className="bg-[#96cff1] w-full  max-w-xl mx-auto p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setAmount(amount);
              }}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full text-center mb-4">
            <button
              type="button"
              className="bg-[#0f2c3e] text-white px-3 py-1 rounded-md shadow-md"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                setTo(currency);
              }}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0f2c3e] text-white py-2 rounded-lg shadow-md hover:bg-[#0f2c3e] transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg flex ${className}`}>
      <div className="w-auto">
        <label
          htmlFor={amountInputId}
          className="block text-gray-700 mb-2 font-medium"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full border border-gray-300 p-2 rounded-md"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onInput={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-full mt-4">
        <label className="block text-gray-700 mb-2 font-medium">
          Currency Type
        </label>
        <select
          className="outline-none w-full border border-gray-300 p-2 rounded-md bg-gray-50"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
