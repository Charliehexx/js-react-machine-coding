

import { useState, useEffect } from 'react'
function FaqItem({ value, adi }) {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow((show) => !show)
    }


    useEffect(() => {
        if (adi == 0) {
            setShow(true)
        }
    }, [])
    return (
        <div>
            <div>
                <div className="faq-box">
                    <div className="que" onClick={handleClick}>
                        <div>{value.question}</div>
                        <button className={show ? 'arrow' : ''}>></button>


                    </div>
                    {show && <div>{value.answer}</div>}
                </div>

            </div>
        </div>
    )

}


export default FaqItem
