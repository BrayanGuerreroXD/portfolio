import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import StarfieldBackground from './components/StarfieldBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <Box id="top" sx={{ position: 'relative', minHeight: '100vh', color: 'text.primary' }}>
      <StarfieldBackground />
      <Navbar />

      <Container
        component="main"
        maxWidth="lg"
        sx={{ pt: { xs: 14, md: 16 }, px: { xs: 2.5, md: 4 }, position: 'relative', zIndex: 1 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Container>

      <Footer />
    </Box>
  )
}
