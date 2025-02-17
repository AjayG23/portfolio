import './Navbar.css'


    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    function showSideBar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    function hideSideBar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }
function Navbar() {
    return(
        <div className="navbar" id='navbar'>
            <span>Ajay G</span>
            <ul className='sidebar'>
                <li onClick={() => hideSideBar()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                <li onClick={() => scrollToSection('projects')}>Projects</li>
                <li onClick={() => scrollToSection('skills')}>Skills</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
                
            </ul>
            <ul>
                <li className='hideOnMobile'>About</li>
                <li className='hideOnMobile' onClick={() => scrollToSection('projects')}>Projects</li>
                <li className='hideOnMobile' onClick={() => scrollToSection('skills')}>Skills</li>
                <li className='hideOnMobile' onClick={() => scrollToSection('contact')}>Contact</li>
                <li onClick={() => showSideBar()} className='menubutton'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
            </ul>
        </div>
    )
}

export default Navbar