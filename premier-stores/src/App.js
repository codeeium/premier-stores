// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
//
// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Header />
//
//                 <RadioNav />
//
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//
//                 <Footer />
//             </div>
//         </Router>
//     );
// }
//
// function RadioNav() {
//     const navigate = useNavigate(); // Hook to navigate programmatically
//
//     // Handle radio button change
//     const handleRadioChange = (event) => {
//         const value = event.target.value;
//         if (value === "home") {
//             navigate('/');
//         } else if (value === "about") {
//             navigate('/about');
//         } else if (value === "contactus") {
//             navigate('/contact');
//         }
//     };
//
//     return (
//         <div className="radio-buttons">
//             <label>
//                 <input
//                     type="radio"
//                     name="nav"
//                     value="home"
//                     onChange={handleRadioChange}
//                 /> Home
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="nav"
//                     value="about"
//                     onChange={handleRadioChange}
//                 /> About
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="nav"
//                     value="contactus"
//                     onChange={handleRadioChange}
//                 /> Contact Us
//             </label>
//         </div>
//     );
// }
//
// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <RadioNav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

function RadioNav() {
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Handle radio button change
    const handleRadioChange = (event) => {
        const value = event.target.value;
        if (value === "home") {
            navigate('/');
        } else if (value === "about") {
            navigate('/about');
        } else if (value === "contactus") {
            navigate('/contact');
        }
    };

    return (
        <div className="radio-buttons yellow-bar">
            <label>
                <input
                    type="radio"
                    name="nav"
                    value="home"
                    onChange={handleRadioChange}
                /> Home
            </label>
            <label>
                <input
                    type="radio"
                    name="nav"
                    value="about"
                    onChange={handleRadioChange}
                /> About
            </label>
            <label>
                <input
                    type="radio"
                    name="nav"
                    value="contactus"
                    onChange={handleRadioChange}
                /> Contact Us
            </label>
        </div>
    );
}

export default App;
