import React from 'react';
import {useState} from 'react';
import './App.css';
const App = () =>{

    const [value, setValue] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [operator, setOperator] = useState('');

    const work = (opera) => {
        var res = value;
        if(operator === '+'){
            res = answer + res;
        }else if(operator === '-'){
            res = answer - res;
        }else if(operator === '*'){
            res = answer * res;
        }else if(operator === '/'){
            res = answer / res;
        }
        setAnswer(res);
        setValue(0);
        if(opera === ''){
            setValue(res);
        }
        setOperator(opera);
        console.log(answer);
        console.log(opera);
    }

    const clr=()=>{
        setValue(0);
        setAnswer(0);
    }

    return(
        <>
        <div className="top">
            <div className="inputbox">
                <h6 className="textinput" id="final">{value}</h6>
            </div>
            <div className="backbox" onClick={()=>setValue(Math.floor(value/10))}><p className="backspace">delete</p></div>
        </div>
        <div className="down">
            <div className="numbox" onClick={()=>setValue(value*10 + 1)}>
                <h3 className="num">1</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 2)}>
                <h3 className="num">2</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 3)}>
                <h3 className="num">3</h3>                
            </div>
            <div className="numbox" onClick={()=>work('+')}>
                <h3 className="num">+</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 4)}>
                <h3 className="num">4</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 5)}>
                <h3 className="num">5</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 6)}>
                <h3 className="num">6</h3>                
            </div>
            <div className="numbox" onClick={()=>work('-')}>
                <h3 className="num">-</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 7)}>
                <h3 className="num">7</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 8)}>
                <h3 className="num">8</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 9)}>  
                <h3 className="num">9</h3>                
            </div>
            <div className="numbox" onClick={()=>work('*')}>
                <h3 className="num">x</h3>                
            </div>
            <div className="numbox" onClick={clr}>
                <h3 className="num">C</h3>                
            </div>
            <div className="numbox" onClick={()=>setValue(value*10 + 0)}>
                <h3 className="num">0</h3>                
            </div>
            <div className="numbox" onClick={()=>work('/')}>
                <h3 className="num">/</h3>                
            </div>
            <div className="numbox" onClick={()=>work('')}>
                <h3 className="num">=</h3>                
            </div>
        </div>
        <div className="namedowm">
            <span className="name">By AK works</span>
        </div>
        </>
    );
}

export default App;