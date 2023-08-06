import Image from 'next/image'
import './components/footer'
import Footer from './components/footer'
import Header from './components/header'
import LevelSelector from './components/levelSelector'
import Announcement from './components/announcement'
import QuestionBlock from './components/questionBlock'
import AnswerBlock from './components/answerBlock'
// import generate ip address
import {randomIp, getRandomCidr} from './datas/IPs'

export default function Home() {
  const givenIp = randomIp();
  const cidr = getRandomCidr(givenIp);

  console.log(cidr);

  return (
    <>
    <Header></Header>
    <Announcement></Announcement>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
    <main>
      <div className="flex">
      {/* <LevelSelector></LevelSelector> */}
      <QuestionBlock datas={{ ip: givenIp, cidr: cidr }}></QuestionBlock>
      <AnswerBlock></AnswerBlock>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}
