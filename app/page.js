import Image from 'next/image'
import './components/footer'
import Footer from './components/footer'
import Header from './components/header'
import LevelSelector from './components/levelSelector'
import Announcement from './components/announcement'

export default function Home() {
  return (
    <>
    <Header></Header>
    <Announcement></Announcement>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
    <main>
      <div className="flex">
      <LevelSelector></LevelSelector>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}
