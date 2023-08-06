"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const AnswerBlock = ({ datas, onAllAnswersCorrect }) => {
    console.log(datas)
    const [answers, setAnswers] = useState({
        ipNetwork: '',
        subnetMask: '',
        wildcardMask: '',
        cidr: '',
        broadcast: '',
        totalHost: '',
        ipStart: '',
        ipLast: '',
        ipGateway: ''
      });

      const handleInputChange = (event) => {
        const { id, value } = event.target;
        setAnswers((prevAnswers) => ({ ...prevAnswers, [id]: value }));
      };

      const checkAllAnswers = () => {
        const correctAnswers = datas.correctAnswer;
        for (const key in correctAnswers) {
          if (answers[key] !== correctAnswers[key]) {
            return false;
          }
        }
        return true;
      };

      useEffect(() => {
        if (checkAllAnswers()) {
          onAllAnswersCorrect();
        }
      }, [answers, datas.correctAnswer, onAllAnswersCorrect]);

    return (
        <div className="flex bg-white my-4 flex-col items-center justify-center rounded-lg mx-4 p-4">
            <h1>Answer</h1>
            <div className="flex flex-col items-center mt-5 justify-center">
            <input
          type="text"
          id="ipNetwork"
          className={`border text-sm rounded-lg p-2.5 ${
            answers.ipNetwork === datas.correctAnswer.ipNetwork ? 'border-green-500' : 'border-red-500'
          }`}
          placeholder="IP Network"
          value={answers.ipNetwork}
          onChange={handleInputChange}
        />
        <input
            type="text"
            id="subnetMask"
            className={`border text-sm rounded-lg p-2.5 ${
                answers.subnetMask === datas.correctAnswer.subnetMask ? 'border-green-500' : 'border-red-500'
            }`}
            placeholder="Subnet Mask"
            value={answers.subnetMask}
            onChange={handleInputChange}
        />
        <input
            type="text"
            id="wildcardMask"
            className={`border text-sm rounded-lg p-2.5 ${
                answers.wildcardMask === datas.correctAnswer.wildcardMask ? 'border-green-500' : 'border-red-500'
            }`}
            placeholder="Wildcard Mask"
            value={answers.wildcardMask}
            onChange={handleInputChange}
        />
        <input
            type="text"
            id="cidr"
            className={`border text-sm rounded-lg p-2.5 ${
                answers.cidr == datas.correctAnswer.cidr ? 'border-green-500' : 'border-red-500'
            }`}
            placeholder="CIDR"
            value={answers.cidr}
            onChange={handleInputChange}
        />
        <input
            type="text"
            id="broadcast"
            className={`border text-sm rounded-lg p-2.5 ${
                answers.broadcast === datas.correctAnswer.broadcast ? 'border-green-500' : 'border-red-500'
            }`}
            placeholder="Broadcast"
            value={answers.broadcast}
            onChange={handleInputChange}
        />
        <input
            type="text"
            id="totalHost"
            className={`border text-sm rounded-lg p-2.5 ${
                answers.totalHost == datas.correctAnswer.totalHost ? 'border-green-500' : 'border-red-500'
            }`}
            placeholder="Total Host"
            value={answers.totalHost}
            onChange={handleInputChange}
        />
        <div className="flex items-center justify-between">
            <div className="flex flex-row items-center justify-center">
                <input
                    type="text"
                    id="ipStart"
                    className={`border text-sm rounded-lg p-2.5 ${
                        answers.ipStart === datas.correctAnswer.ipStart ? 'border-green-500' : 'border-red-500'
                    }`}
                    placeholder="IP Start"
                    value={answers.ipStart}
                    onChange={handleInputChange}
                />
                    -
                <input
                    type="text"
                    id="ipLast"
                    className={`border text-sm rounded-lg p-2.5 ${
                        answers.ipLast === datas.correctAnswer.ipLast ? 'border-green-500' : 'border-red-500'
                    }`}
                    placeholder="IP Last"
                    value={answers.ipLast}
                    onChange={handleInputChange}
                />
            </div>
            </div>
            <input
                type="text"
                id="ipGateway"
                className={`border text-sm rounded-lg p-2.5 ${
                    answers.ipGateway == datas.correctAnswer.ipGateway ? 'border-green-500' : 'border-red-500'
                }`}
                placeholder="IP Gateway"
                value={answers.ipGateway}
                onChange={handleInputChange}
            />
           
            </div>
        </div>
    )
}

export default AnswerBlock