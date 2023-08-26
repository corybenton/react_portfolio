//import Project from './project';
import { useState } from 'react';
import Navigation from './navigation';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

function Body() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className='container'>
            <div className='row'>
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                <main className="mx-3">{renderPage()}</main>
            </div>
        </div>

    );
}

export default Body;