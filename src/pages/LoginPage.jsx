import {Button} from "react-bootstrap"
import {useState} from "react"


export const LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
      
    const handleButtonClick = (digit) => {
        setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + digit);
    };
      
    const handleClearButtonClick = () => {
        setPhoneNumber('');
    };
      

 
    return (
        <div>
            <div>
                <span><img  src="https://in.images.search.yahoo.com/search/images?p=chicken+wrap+image&fr=mcafee&type=E210IN826G0&imgurl=https%3A%2F%2Fwww.licious.in%2Fblog%2Fwp-content%2Fuploads%2F2020%2F12%2FChicken-Wrap.jpg#id=0&iurl=https%3A%2F%2Fwww.licious.in%2Fblog%2Fwp-content%2Fuploads%2F2020%2F12%2FChicken-Wrap.jpg&action=click"/></span>
            </div>
            <h1>
                Login
            </h1>
            <p>Enter your Phone Number to proceed</p>
            <h2>Phone Number</h2>
            <div >
                 {phoneNumber}
            </div>
            <hr/>
            <Button>Continue</Button>
            <p>By clicking you accept the Terms and conditions and privacy policy</p>
            <div>
            <div>
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
             <button key={digit} onClick={() => handleButtonClick(digit)}>
                {digit}
             </button>
        ))}
      </div>
            <button onClick={handleClearButtonClick} style={{ marginTop: '10px' }}>Clear</button>
    </div>
            
        </div>

    )
}