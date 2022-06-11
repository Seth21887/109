import "./about.css";
import {useState} from 'react';

const About = () => {
    const [visible, setVisible] = useState(false);
        //if visible is true, we want the email h6 to show, if false, we want it to be not visible. Default useState value will be set to false.

        const showEmail = () => {
            setVisible(true);
        };

        const hideEmail = () => {
            setVisible(false);
        }
        const getContent = () => {
            if (visible) {
                return (<div>
                            <h6 className="contactEmail">seth.d.lafountain@gmail.com</h6>
                            <button onClick={hideEmail} className="btn btn-primary"> Hide Info</button>
                        </div>);
            }else{
                return (<div>
                    <p>Click the button below for contact information.</p>
                    <button onClick={showEmail} className="btn btn-primary">Show Info</button>
                    </div>);
            }
        }

    return (
        <div className="about">
            <h1 className="contactName">Seth LaFountain</h1>
            {getContent()}
            {/* { visible ? <h6 className="contactEmail">seth.d.lafountain@gmail.com</h6> : <p>Click the button below for contact information.</p>}
            { !visible ? <button onClick={showEmail} className="btn btn-primary">Show Info</button> : <button onClick={hideEmail} className="btn btn-primary"> Hide Info</button>} */}
        </div>
    );
};

export default About;