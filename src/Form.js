import React, {useState} from 'react'

let Form = () => {

    const [nums, setNums] = useState()
    const [date, setDate] = useState()
    const [cvv, setCvv] = useState()




    let styleNums
    let styleDate
    let styleCvv

    if (/^[0-9]{16}$/.test(nums)) {
        styleNums = {
            border: '1px solid #00ff35'
        }
    }
    else if (!/^[0-9]{16}$/.test(nums)) {
        console.log('Invalid card number')
        styleNums = {
            border: '1px solid #ff004b'
        }
    }

    if (/^[0-9]{4}$/.test(date)) {
        styleDate = {
            border: '1px solid #00ff35'
        }
    }
    else if (!/^[0-9]{4}$/.test(date)) {
        styleDate = {
            border: '1px solid #ff004b'
        }
    }

    if (/^[0-9]{3}$/.test(cvv)) {
        styleCvv = {
            border: '1px solid #00ff35'
        }
    }
    else if (!/^[0-9]{3}$/.test(cvv)) {
        styleCvv = {
            border: '1px solid #ff004b'
        }
    }

    return (
        <div className = 'form'>
            <input style={styleNums} className = 'cardNumber' value = {nums} type = 'text' placeholder = 'Card number' maxLength = '16' onChange={(event) => setNums(event.target.value)}/>
            <input style = {styleDate} className = 'cardDate' type = 'text' placeholder = 'MM/YY' maxLength = '4' onChange={(event) => setDate(event.target.value)}/>
            <input style = {styleCvv} className = 'cardCVV' type = 'text' placeholder = 'CVV2' maxLength = '3' onChange={(event) => setCvv(event.target.value)}/>
        </div>
    )
}

export default Form

