import React from 'react';
import github from '../Images/github.svg'

const Footer = () => {

    return(
        <footer className='footer'>
            <div>
                TAE HWAN LEE ©2022
            </div>
            <a href='https://github.com/otaeotay' target='_blank' rel='noopener noreferrer' id='logo'><img src={github} alt='Github' id='github'></img></a>
        </footer>
    )
}

export default Footer;