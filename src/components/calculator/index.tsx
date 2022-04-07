import React, {useState} from 'react';
import './style.scss';

const Calculator = () => {
    const [num, setNum] = useState<string>('');
    const [result, setResult] = useState()

/*     function inputNum(e){
        
        
    }
 */


    function handleCalculate(expression: string){
        setResult(eval(expression))
    }

    return (
        <div>
            {result && result.map()}
            <p> {result} </p>
            <input type="text" />
            <div> 
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button onClick={() => handleCalculate('2 + 3 + 4 * 1')}>=</button>
                <button>,</button>
            </div>
            <div> 
                <button>+</button>
                <button>-</button>
                <button>*</button>                
                <button>/</button>
            </div>


        </div>  
    )

}

export default Calculator;