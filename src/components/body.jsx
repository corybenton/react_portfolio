//import Project from './project';
import { useState } from 'react';
import Navigation from './navigation';
import Resume from './pages/resume';
import About from './pages/about';
import Contact from './pages/contact';

function Body() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
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