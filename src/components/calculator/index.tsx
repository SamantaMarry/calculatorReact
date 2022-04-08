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
            let newResult = result as any;
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
        <div>
            
            {history.map(value => 
                <p key={Math.random()}> {value} </p>
            )} 

            {num && <p>{dinamicResult}</p>}
    
            <input type='text' value={num} onChange={handleOnChange} onKeyDown={handleKeyDown}className="form-control"></input>                
            {error && <p className="error"> expressao mal formada </p>}
            <div> 
                <button onClick={inputNum} value={'1'}>1</button>
                <button onClick={inputNum} value={'2'}>2</button>
                <button onClick={inputNum} value={'3'}>3</button>
                <button onClick={inputNum} value={'4'}>4</button>
                <button onClick={inputNum} value={'5'}>5</button>
                <button onClick={inputNum} value={'6'}>6</button>
                <button onClick={inputNum} value={'7'}>7</button>
                <button onClick={inputNum} value={'8'}>8</button>
                <button onClick={inputNum} value={'9'}>9</button>
                <button onClick={inputNum} value={'0'}>0</button>
                <button onClick={() => handleCalculate(num)}>=</button>
                <button>,</button>
            </div>
            <div> 
                <button onClick={clear}>AC</button>
                <button onClick={inputNum} value={'+'}>+</button>
                <button onClick={inputNum} value={'-'}>-</button>
                <button onClick={inputNum} value={'*'}>*</button>                
                <button onClick={inputNum} value={'/'}>/</button>
            </div>
        </div>  
    )
}

export default Calculator;