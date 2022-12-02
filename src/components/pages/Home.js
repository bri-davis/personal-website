import headshot from './images/headshot.jpg';
import sap_logo from "./images/sap_logo.svg";
import okta_logo from "./images/okta_logo.svg";


export default function Home() {
    return (
    <div>
        <div className='container'>
            <div>
                <p>Hi, I'm Brian! I am a software engineer in the Greater Philadelphia area who is currently looking for opportunities.</p>
                <p>I am an alumnus of Temple University with a B.S. in Computer Science and Mathematics. I'm interested in opportunities that combine my knowledge of software engineering, machine learning, and algorithms to solve real-world problems.</p>
            </div>
            <img className='circular_image' src={headshot} />
        </div>
        <div className='container'>
            <p>test</p>
        </div>
        <div className='container'>
            <img className='company_logo' src={okta_logo} />
            <img className='company_logo' src={sap_logo} />
        </div>
    </div>
    )
  }