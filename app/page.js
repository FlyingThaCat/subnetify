import './components/footer'
import Footer from './components/footer'
import Header from './components/header'
import Announcement from './components/announcement'
import QuestionBlock from './components/questionBlock'
import AnswerBlock from './components/answerBlock'
import {randomIp, getRandomCidr} from './datas/IPs'
import {Netmask} from 'netmask'


export default function Home() {
  const givenIp = randomIp();
  const cidr = getRandomCidr(givenIp);
  var block = new Netmask(`${givenIp}/${cidr}`);

  const datas = {
    "question" : {
      ip: givenIp,
      cidr: cidr
    },
    "correctAnswer" : {
      ipNetwork: block.base,
      subnetMask: block.mask,
      cidr: block.bitmask,
      wildcardMask: block.hostmask,
      broadcast: block.broadcast,
      totalHost: block.size,
      ipStart: block.first,
      ipLast: block.last
    }
  }

  console.log(datas)

  return (
    <>
    <Header></Header>
    <Announcement></Announcement>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
    <main>
      <div className="">
      {/* <LevelSelector></LevelSelector> */}
      <QuestionBlock datas={datas}></QuestionBlock>
      <AnswerBlock></AnswerBlock>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}