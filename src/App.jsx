import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
import About from './components/sections/About.jsx';
import Contact from './components/sections/Contact.jsx';
import DesignProjects from './components/sections/DesignProjects.jsx';
import Intro from './components/sections/Intro.jsx';
import WorkIndex from './components/sections/WorkIndex.jsx';
import { siteContent } from './content.ts';

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        {siteContent.accessibility.skipLink}
      </a>
      <Header />
      <main id="main-content">
        <Intro />
        <DesignProjects />
        <WorkIndex />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
