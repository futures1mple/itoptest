import React, { useRef, useState } from 'react'
import { Col, Container } from 'reactstrap'
import './Convert.scss'
import { ReactComponent as CSign } from '../../assets/convert.svg'

interface ConvertProps {
    usd: number,
    eur: number,
    azn: number,
}

const Convert:React.FC<ConvertProps> = ({usd, eur, azn}) => {
    const [ firstValue, setFirstValue ] = useState<number>(0);
    const [ secondValue, setSecondValue ] = useState<number>(0);
    const select1 = useRef<HTMLSelectElement>(null);
    const select2 = useRef<HTMLSelectElement>(null);
    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);


    const handleChange = (first: boolean, element: HTMLInputElement) => {
        if(element.value == null || firstValue == null || secondValue == null) {
            return
        } else {

            let firstSelect = select1.current
            let selectValue1 = 0
            if(firstSelect) {
                selectValue1 = parseFloat(firstSelect.value)
            }
            
            
            let secondSelect = select2.current
            let selectValue2 = 0
            if(secondSelect) {
                selectValue2 = parseFloat(secondSelect.value)
            }
            
            
            if (first) {
                setFirstValue(parseFloat(element.value))
                setSecondValue(Math.floor((selectValue1/selectValue2) * parseFloat(element.value)*100)/100)
            } else {
                setSecondValue(parseFloat(element.value))
                setFirstValue(Math.floor((selectValue2/selectValue1) * parseFloat(element.value)*100)/100)
            }
        }
        
    }

    const clearInputs = () => {
        let inputOne = input1.current
        let inputTwo = input2.current
        
        if(inputOne) inputOne.value = ""
        if(inputTwo) inputTwo.value = ""
    }

    return (
        <div className='Convert'>
            <Container className="convert-container mt-5">
                <Col xs="12" md='5' className="convert-block">
                    <div className="convert-currency-block">   
                        <select ref={select1} id='first-select' onChange={()=>{clearInputs()}}>
                            <option value={usd}>USD</option>
                            <option value={1}>UAH</option>
                            <option value={eur}>EUR</option>
                            <option value={azn}>AZN</option>
                        </select>
                        <input ref={input1} value={firstValue} id='first-input' type="number" 
                            onChange={(el) => {
                                handleChange(true, el.target)
                            }} />
                    </div>
                </Col>
                <Col className='sign' xs='12' md='2'>
                    <CSign/>
                </Col>
                <Col xs="12" md='5' className="convert-block">
                    <div className="convert-currency-block">   
                        <select ref={select2} id='second-select' onChange={()=>{clearInputs()}}>
                            <option value={1}>UAH</option>
                            <option value={usd}>USD</option>
                            <option value={eur}>EUR</option>
                            <option value={azn}>AZN</option>
                        </select>
                        <input ref={input2} value={secondValue} id='second-input' type="number" 
                            onChange={(el) => {
                                handleChange(false, el.target)
                            }} />
                    </div>
                </Col>
            </Container>
            
        </div>
    )
}

export default Convert