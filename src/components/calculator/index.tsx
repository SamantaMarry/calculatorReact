import React, {useState, useEffect} from 'react';
import './style.scss';

const Calculator = () => {
    const [num, setNum] = useState<string>('');
    const [dinamicResult, setDinamicResult] = useState<string>('')
    const [result, setResult] = useState([])
    const [history, setHistory] = useState([])
    const [error, setError] = useState(false);

    
    
    function inputNum(e:any){
        let input = e.target.value;
        
        setNum(num + input);
        
        setDinamicResult(eval(num));
    }

    function clear(e: any){
        setNum('');
        setError(false)
    } 

    function handleCalculate(expression: string){
        try {
            let newResult = result as any
            const value = eval(expression);
            newResult.push(value);
            
            let newHistory = history as any;
            newHistory.push(expression + ' = ' + value);
            setHistory(newHistory.slice(-5));
    
            setResult(newResult);
            setNum('')
        } catch (e) {
            setError(true)
        }
    }

    function handleOnChange(e: any){
        let input = e.target.value;
        setError(false)
        setNum(input);
    }

    function handleKeyDown(e: any){        
        if (e.key === 'Enter') {
            handleCalculate(num)
        }
    }

    return (
        <div className='container'>
            <div className="calculator">
                <div className='calculator-display'>
                    {history.map(value => 
                        <p className="history" key={Math.random()}> {value} </p>
                    )} 

            
                    <input type='text' className='calculator-input' value={num} onChange={handleOnChange} onKeyDown={handleKeyDown}></input>                
                    {error && <p className="error"> expressao mal formada </p>}
                </div>

                <div className='calculator-keyboard'>
                    <div className='calculator-keyboard__row'>                    
                        <button onClick={clear} className="btn">AC</button>
                        <button className="btn" >+/-</button>
                        <button className="btn" >%</button>
                        <button className="btn btn-pink" onClick={inputNum} value="/">÷</button>                        
                    </div>
                    <div className='calculator-keyboard__row'>
                        <button className="btn btn-purple" onClick={inputNum} value={'7'}>7</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'8'}>8</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'9'}>9</button>
                        <button className="btn btn-pink" onClick={inputNum} value={'*'}>x</button>
                    </div>

                    <div className='calculator-keyboard__row'>
                        <button className="btn btn-purple" onClick={inputNum} value={'4'}>4</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'5'}>5</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'6'}>6</button>
                        <button className="btn btn-pink" onClick={inputNum} value={'-'}>-</button>
                    </div>

                    <div className='calculator-keyboard__row'>
                        <button className="btn btn-purple" onClick={inputNum} value={'1'}>1</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'2'}>2</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'3'}>3</button>
                        <button className="btn btn-pink" onClick={inputNum} value={'+'}>+</button>
                    </div>

                    <div className='calculator-keyboard__row'>
                        <button className="btn btn-large btn-purple" onClick={inputNum} value={'0'}>0</button>
                        <button className="btn btn-purple" onClick={inputNum} value={'.'}>.</button>
                        <button className="btn btn-secondary" onClick={() => handleCalculate(num)}>=</button>                        
                    </div>
                    
                </div>
            </div>
        </div>  
    )
}

export default Calculator;