import headshot from './images/headshot.jpg';
import sap_logo from "./images/sap_logo.svg";
import okta_logo from "./images/okta_logo.svg";
import temple_logo from "./images/temple_logo.svg";
import central_logo from './images/central_logo.png';
import { SocialIcon } from 'react-social-icons';

export default function Home() {
    return (
    <div>
        <div className='container'>
            <div>
                <p></p>
                <p>Hi, I'm Brian! Nice to meet you if we haven't met already. I am a software engineer in the Greater Philadelphia area who is currently looking for exciting SWE opportunities.</p>
                <p>I am an alumnus of Temple University with a B.S. in Computer Science and Mathematics. I am familiar with a variety of programming languages and cloud infrastructure. I primarily program in Python and JavaScript right now, but I am comfortable with other languages such as Java and C/C++. I have experience with AWS and other cloud infrastructure on both work and personal projects.</p>
                <p>My best advice is to never stop learning! I like to develop metrics for my goals to track my personal growth. And of course, take breaks, go for hikes, and play games so you don't get burned out.</p>
                <p>If you'd like to chat further, don't hesitate to reach out using the buttons to the right.</p>
            </div>
            <div>
                <img className='circular_image' src={headshot} alt='profile' />
                <div className='container'>
                    <SocialIcon url="mailto:brian@bri-davis.com" />
                    <SocialIcon url="https://linkedin.com/in/bri-davis" />
                    <SocialIcon url="https://www.github.com/bri-davis" />
                </div>
            </div>
        </div>
        <div className='container'>
            <p>Places I have worked:</p>
        </div>
        <div className='container'>
            <img className='company_logo' src={okta_logo} alt='logo' />
            <img className='company_logo' src={sap_logo} alt='logo' />
        </div>
        <div className='container'>
            <p>Schools I have attended:</p>
        </div>
        <div className='container'>
            <img className='company_logo' src={temple_logo} alt='logo' />
            <img className='company_logo' src={central_logo} alt='logo' />
        </div>
    </div>
    )
  }