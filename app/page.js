'use client';
import React from 'react';
import './components/footer';
import Footer from './components/footer';
import Header from './components/header';
import Announcement from './components/announcement';
import QuestionBlock from './components/questionBlock';
import AnswerBlock from './components/answerBlock';
import { randomIp, getRandomCidr } from './datas/IPs';
import { Netmask } from 'netmask';

export default function Home() {
  // Initialize the datas state with the initial data
  const [datas, setDatas] = React.useState({
    question: {
      ip: '',
      cidr: 24,
    },
    correctAnswer: {
      ipNetwork: '',
      subnetMask: '',
      cidr: 24,
      wildcardMask: '',
      broadcast: '',
      totalHost: 256,
      ipStart: '',
      ipLast: '',
      ipGateway: '',
    },
  });

  // Function to update the datas state with new data
  const updateDatas = () => {
    const givenIp = randomIp();
    const cidr = getRandomCidr(givenIp);
    var block = new Netmask(`${givenIp}/${cidr}`);

    const ipOctets = block.base.split('.');
    const cidrValue = parseInt(cidr, 10);

    let gateway;
    if (cidrValue <= 8) {
      gateway = `${ipOctets[0]}.${ipOctets[1]}.${ipOctets[2]}.${parseInt(ipOctets[3]) + 1}`;
    } else if (cidrValue <= 16) {
      gateway = `${ipOctets[0]}.${ipOctets[1]}.${parseInt(ipOctets[2]) + 1}.${parseInt(ipOctets[3]) + 1}`;
    } else if (cidrValue <= 24) {
      gateway = `${ipOctets[0]}.${ipOctets[1]}.${ipOctets[2]}.${parseInt(ipOctets[3]) + 1}`;
    }

    setDatas({
      question: {
        ip: givenIp,
        cidr: cidr,
      },
      correctAnswer: {
        ipNetwork: block.base,
        subnetMask: block.mask,
        cidr: block.bitmask,
        wildcardMask: block.hostmask,
        broadcast: block.broadcast,
        totalHost: block.size,
        ipStart: block.first,
        ipLast: block.last,
        ipGateway: gateway,
      },
    });
  };

  // Call the updateDatas function to generate the initial data on component mount
  React.useEffect(() => {
    updateDatas();
  }, []);

  return (
    <>
      <Header />
      <Announcement />
      <main>
        <div className="">
          <QuestionBlock datas={datas} />
          <AnswerBlock datas={datas} />
        </div>
      </main>
      <Footer />
    </>
  );
}
