import React, {useState} from 'react';
import cl from './App.module.css'
import './all.css'
import Myinput from "./components/input/myinput";
import Mybutton from "./components/button/mybutton";

const App = () => {
    const [entry, setEntry] = useState(0)
    const [action, setAction] = useState('')
    const [result, setResult] = useState(0)
    const [number1, setNumber1] = useState(0)

    const addNumber = (num) => {
        if (entry === 0){
            setEntry(String(entry).slice(1, -0) + num)
        }
        else{
            setEntry(entry + num)
        }
    }
    const clear = () => {
        setEntry(0)
    }
    const command = (comm) => {
        setAction(comm)
        setNumber1(entry)
        setEntry(0)
    }
    const getResult = () => {
        if (action === '+'){
            const res = parseInt(number1) + parseInt(entry)
            setResult(res)
            setEntry(res)
            setAction('')
        }
        else if (action === '-'){
            const res = parseInt(number1) - parseInt(entry)
            setResult(res)
            setEntry(res)
            setAction('')
        }
        else if (action === '*'){
            const res = parseInt(number1) * parseInt(entry)
            setResult(res)
            setEntry(res)
            setAction('')
        }
        else if (action === '/'){
            const res = parseInt(number1) / parseInt(entry)
            setResult(res)
            setEntry(res)
            setAction('')
        }
    }
    const del = () => {
        let str = String(entry)
        str = str.slice(0, -1)
        setEntry(Number(str))
    }

    return (
        <div className={cl.container}>
            <div className={cl.main}>
                <Myinput text={'Число'} value={entry} onChange={e => setEntry(e.target.value)}/>
                <div className={cl.buttons}>
                    <div className={cl.numbers}>
                        <Mybutton text={'СL'} onClick={clear}/>
                        <Mybutton text={'/'} onClick={() => command('/')}/>
                        <Mybutton text={'*'} onClick={() => command('*')}/>
                        <Mybutton text={'7'} onClick={() => addNumber('7')}/>
                        <Mybutton text={'8'} onClick={() => addNumber('8')}/>
                        <Mybutton text={'9'} onClick={() => addNumber('9')}/>
                        <Mybutton text={'4'} onClick={() => addNumber('4')}/>
                        <Mybutton text={'5'} onClick={() => addNumber('5')}/>
                        <Mybutton text={'6'} onClick={() => addNumber('6')}/>
                        <Mybutton text={'1'} onClick={() => addNumber('1')}/>
                        <Mybutton text={'2'} onClick={() => addNumber('2')}/>
                        <Mybutton text={'3'} onClick={() => addNumber('3')}/>
                    </div>
                    <div className={cl.commands}>
                        <Mybutton text={'<'} onClick={del}/>
                        <Mybutton text={'-'} onClick={() => command('-')}/>
                        <Mybutton onClick={() => command('+')} text={'+'} style={{height: '230px'}}/>
                    </div>

                </div>
                <Mybutton onClick={getResult} text={'='} style={{width: '490px', height: '80px'}}/>
            </div>
        </div>
    );
};

export default App;