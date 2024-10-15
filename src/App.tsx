import './App.css';
import {Main} from "./layout/sections/main/Main";
import {Prise} from "./layout/sections/prise/Prise";
import {Education} from "./layout/sections/education/Education";
import {WorkHistory} from "./layout/sections/work-history/WorkHistory";
import {Blog} from "./layout/sections/blog/Blog";
import {ContactInfo} from "./layout/sections/contact-information/ContactInfo";
import {Portfolio} from "./layout/sections/portfolio/Portfolio";
import {Recommendations} from "./layout/sections/recommendation/Recommendations";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Main/>
            <Prise/>
            <Recommendations/>
            <Education/>
            <WorkHistory/>
            <Portfolio/>
            <Blog/>
            <ContactInfo/>
            <Footer/>
        </div>
    );
}

export default App;
