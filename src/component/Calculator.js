import React from 'react'

const Calculator = ({ getValue, result, calc, clear, del }) => {
    return (
        <div className="h-screen w-screen bg-red-500 flex justify-center items-center">
            <div className="bg-black rounded-xl text-white">
                <div className="text-xl p-3">
                    <div className="w-full h-20 bg-green-300 mb-4 rounded-tl-xl rounded-tr-xl text-black text-3xl flex flex-col-reverse items-end p-3">
                        {result}
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        <div className="buttons" value={'C'} onClick={() => clear()}>C</div>
                        <div className="buttons" value={'M+'} onClick={() => del()}>Del</div>
                        <div className="buttons" value={'/'} onClick={(e) => getValue(e.target.innerText)}>/</div>
                        <div className="buttons" value={'*'} onClick={(e) => getValue(e.target.innerText)}>*</div>
                        <div className="buttons" value={7} onClick={(e) => getValue(e.target.innerText)}>7</div>
                        <div className="buttons" value={8} onClick={(e) => getValue(e.target.innerText)}>8</div>
                        <div className="buttons" value={9} onClick={(e) => getValue(e.target.innerText)}>9</div>
                        <div className="buttons" value={'-'} onClick={(e) => getValue(e.target.innerText)}>-</div>
                        <div className="buttons" value={4} onClick={(e) => getValue(e.target.innerText)}>4</div>
                        <div className="buttons" value={5} onClick={(e) => getValue(e.target.innerText)}>5</div>
                        <div className="buttons" value={6} onClick={(e) => getValue(e.target.innerText)}>6</div>
                        <div className="buttons" value={'+'} onClick={(e) => getValue(e.target.innerText)}>+</div>
                        <div className="buttons" value={1} onClick={(e) => getValue(e.target.innerText)}>1</div>
                        <div className="buttons" value={2} onClick={(e) => getValue(e.target.innerText)}>2</div>
                        <div className="buttons" value={3} onClick={(e) => getValue(e.target.innerText)}>3</div>
                        <div className="row-span-2 buttons items-center" value={'='} onClick={() => calc()}>=</div>
                        <div className="col-span-2 buttons" value={0} onClick={(e) => getValue(e.target.innerText)}>0</div>
                        <div className="buttons " value={'.'} onClick={(e) => getValue(e.target.innerText)}>.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Calculator
