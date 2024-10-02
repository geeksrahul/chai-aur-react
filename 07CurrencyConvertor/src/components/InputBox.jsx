import {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrenyChange,
    currencyOptions=[],
    selectedCurrency = "inr",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",

}) {
    const amountInput = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2 p-1" >
                <label className="text-black/75 mb-2 inline-block font-medium" htmlFor={amountInput}>
                    {label}
                </label>
                <input
                    id={amountInput}
                    className="outline-none border-black w-full bg-transparent py-1.5 px-1.5"
                    style={{border: '1px solid black'}}
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e)=>  onAmountChange && onAmountChange(Number(e.target.value)) }
                />

            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 w-1/2 bg-gray-300 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e)=> onCurrenyChange && onCurrenyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency} > {currency} </option>
                        ) )
                    }
                </select>
            </div>
        </div>
    )
}

export default InputBox