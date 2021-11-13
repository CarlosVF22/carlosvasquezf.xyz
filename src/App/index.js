import './App.css';
import '../index.css';
import {NavBar} from '../NavBar';
import {Header} from '../Header';
import {GithubIcon} from '../IconSocial/GitHubIcon';
import {LinkedlinIcon} from '../IconSocial/LinkedlinIcon';
import {PlatziIcon} from '../IconSocial/PlatziIcon';
import {HeaderBackground} from '../HeaderBackground';
import {Title} from '../Title';

function App() {
    const navBarItems = ['Home','Contactame','ayuda'];
    return (
        <Header>
            <HeaderBackground/>
            <section className="icon-section">
                <GithubIcon/>
                <LinkedlinIcon/>
                <PlatziIcon/>
            </section>
            <NavBar
                items = {navBarItems}
            />
            <Title
                strings={[
                    'Desarrollador frontend',
                    'Desarrollador backend'
                ]}
            />
        </Header>
        
    );
}

export {App};
