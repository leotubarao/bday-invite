import EventHeader from './components/EventHeader'
import EventDate from './components/EventDate'
import EventDescription from './components/EventDescription'
import VenueCard from './components/VenueCard'
import RSVPSection from './components/RSVPSection'
import WeatherTimeline from './components/WeatherTimeline'

export default function AppContainer() {
  return (
    <div className="app-container relative flex min-h-screen w-full items-center justify-center overflow-auto bg-gradient-to-br from-orange-950 via-purple-950 to-gray-950 p-4">
      {/* Elementos decorativos animados */}
      <div className="animate-float absolute top-10 left-10 h-20 w-20 rounded-full bg-orange-500/10"></div>
      <div className="animate-float-delayed absolute top-40 right-20 h-16 w-16 rounded-full bg-purple-500/10"></div>
      <div className="animate-float absolute bottom-20 left-1/4 h-24 w-24 rounded-full bg-orange-400/10"></div>
      <div className="animate-float-delayed absolute right-1/3 bottom-40 h-12 w-12 rounded-full bg-purple-400/10"></div>

      <div className="animate-fade-in-up animate-spooky-glow relative z-10 w-full max-w-4xl rounded-3xl border border-orange-600/30 bg-black/40 p-8 shadow-2xl backdrop-blur-lg md:p-12">
        <EventHeader />

        <EventDate />

        <EventDescription />

        <VenueCard />

        <RSVPSection />

        <WeatherTimeline />
      </div>
    </div>
  )
}
