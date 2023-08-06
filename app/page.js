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

  const ipOctets = block.base.split('.');
  const cidrValue = parseInt(cidr, 10);

  let gateway;
  if (cidrValue <= 8) {
    // Class A: Only the last octet is incremented by 1
    gateway = `${ipOctets[0]}.${ipOctets[1]}.${ipOctets[2]}.${parseInt(ipOctets[3]) + 1}`;
  } else if (cidrValue <= 16) {
    // Class B: The last two octets are incremented by 1
    gateway = `${ipOctets[0]}.${ipOctets[1]}.${parseInt(ipOctets[2]) + 1}.${parseInt(ipOctets[3]) + 1}`;
  } else if (cidrValue <= 24) {
    // Class C: Only the last octet is incremented by 1
    gateway = `${ipOctets[0]}.${ipOctets[1]}.${ipOctets[2]}.${parseInt(ipOctets[3]) + 1}`;
  }

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
      ipLast: block.last,
      ipGateway: gateway
    }
  }

  return (
    <>
    <Header></Header>
    <Announcement></Announcement>
    {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
    <main>
      <div className="">
      {/* <LevelSelector></LevelSelector> */}
      <QuestionBlock datas={datas}></QuestionBlock>
      <AnswerBlock datas={datas}></AnswerBlock>
      </div>
    </main>
    <Footer></Footer>
    </>
  )
}