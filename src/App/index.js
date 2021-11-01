import './App.css';
import {NavBar} from '../NavBar';
import {Header} from '../Header';
import {GithubIcon} from '../IconSocial/GitHubIcon';
import {LinkedlinIcon} from '../IconSocial/LinkedlinIcon';
import {PlatziIcon} from '../IconSocial/PlatziIcon';
import {HeaderBackground} from '../HeaderBackground';
import {Section} from '../Section';

function App() {
    const navBarItems = ['Home','Contactame','ayuda'];
    const iconSection = ['icon-section']; 
    return (
        <Header>
            <HeaderBackground/>
            <Section>
                <GithubIcon/>
                <LinkedlinIcon/>
                <PlatziIcon/>
            </Section>
            <NavBar
                items = {navBarItems}
            />
        </Header>
        
    );
}

export {App};
