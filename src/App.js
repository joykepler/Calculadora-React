import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation("+")
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)  
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation("-")
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)  
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation("x")
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)  
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDiviNumbers = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation("/")
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)  
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(!firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
          case '-':
            handleMinusNumbers();
            break;
            case 'x':
              handleMultiNumbers();
              break;
              case '/':
                handleDiviNumbers();
                break;
          default:
          break;
      }
    } 
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultiNumbers}></Button>
          <Button label="/" onClick={handleDiviNumbers}></Button>
          <Button label="C" onClick={handleOnClear}></Button>
          <Button label="0" onClick={() => handleAddNumber('0')}></Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="-" onClick={handleMinusNumbers}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="+" onClick={handleSumNumbers}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="=" onClick={handleEquals}></Button>
        </Row>
{/* 9 / X C
6 7 8 -
3 4 5 + 
0 1 2 =  */}
      </Content>
    </Container>
  );
}

export default App;
