import Image from 'next/image'
import './components/footer'
import Footer from './components/footer'
import Header from './components/header'
import LevelSelector from './components/levelSelector'

export default function Home() {
  return (
    <>
    <Header></Header>
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
