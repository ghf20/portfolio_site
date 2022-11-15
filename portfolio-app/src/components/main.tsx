import React from 'react';
import HomePage from './home';
import About from './about';
import Projects from './projects';
import Contact from "./contact";

const Main = () => {
    return (
        <main>
            <div>
                <HomePage/>
                <About/>
                <Projects />
                <Contact />
            </div>

        </main>
    );
};
export default Main;