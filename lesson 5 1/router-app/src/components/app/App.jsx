import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Contact, News, Header, Services } from "../../pages";

const App = () => {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<Header />}>

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/services" element={<Services />} />

                </Route>
            </Routes>
        </Router>
    );
};
export default App;
