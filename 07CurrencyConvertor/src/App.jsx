import {useState} from 'react'
import {InputBox} from './components'
import {useCurrencyData} from './hooks'
function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [result, setResult] = useState("");

  const currencyData = useCurrencyData(from);
  const option = Object.keys(currencyData);

  const convert_click = ()=> {
    setResult(amount * currencyData[to]);
  }

  const swap_click = ()=> {
      setFrom((prevFrom) => {
        setTo(prevFrom);
        return to;
      });
      setResult(amount);
      setAmount(result);
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor: `dodgerblue`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert_click();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrenyChange={(currency)=>{
                  setFrom(currency);
                }}
                selectedCurrency={from}
                onAmountChange={(amount)=>{
                  setAmount(amount)
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap_click}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={result}
                currencyOptions={option}
                onCurrenyChange={(currency)=>{
                  setTo(currency)
                }}
                selectedCurrency={to}
                amountDisabled={true}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert { from.toUpperCase() } to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App