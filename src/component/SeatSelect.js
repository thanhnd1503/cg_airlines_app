import Form from 'react-bootstrap/Form';
import {useState} from "react";


function SeatSelect(props) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <Form>
            {["Ghế Thương gia", "Ghế thường"].map((value) => (
                <span key={value} className="mb-6">
                    <Form.Check
                        style={{padding:'15px',marginLeft:'10px'}}
                        label={value}
                        name="group1"
                        type="radio"
                        id={`inline-radio-${value}`}
                        value={value}
                        checked={selectedOption === value}
                        onChange={e =>{
                            handleOptionChange(e);
                            props.onChange(e);
                        }}
                    />
                </span>
            ))}
        </Form>
    );

}

export default SeatSelect;