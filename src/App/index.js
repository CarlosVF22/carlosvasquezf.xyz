import './App.css';
import '../index.css';
import '../IconSocial/IconSocial.css'
import { NavBar } from '../NavBar';
import { GithubIcon } from '../IconSocial/GitHubIcon';
import { LinkedlinIcon } from '../IconSocial/LinkedlinIcon';
import { PlatziIcon } from '../IconSocial/PlatziIcon';
// import { HeaderBackground } from '../HeaderBackground';
import { Title } from '../Title';
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <header className="header">
                <div className="icon-section">
                    <GithubIcon />
                    <LinkedlinIcon />
                    <PlatziIcon />
                </div>
                <NavBar
                    items={['Home', 'Contactame', 'ayuda','otro']}
                />
            </header>
            <main className="main-section">
                <Title
                    strings={[
                        'soy desarrollador frontend',
                        'soy desarrollador backend'
                    ]}
                    string_base={"¡Hola soy Carlos Eduardo y"}
                />
            </main>
        </React.Fragment>

    );
}

export { App };
