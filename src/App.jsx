import AppLayout from './components/Layout/AppLayout'
import HeroSection from './components/Sections/HeroSection'
import FeaturesBento from './components/Sections/FeaturesBento'
import HowItWorks from './components/Sections/HowItWorks'
import StatsMarquee from './components/Sections/StatsMarquee'
import TeamSection from './components/Sections/TeamSection'

function App() {
  return (
    <AppLayout>
      <HeroSection />
      <StatsMarquee />
      <FeaturesBento />
      <HowItWorks />
      <TeamSection />
    </AppLayout>
  )
}

export default App
