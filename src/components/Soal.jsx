import { useEffect } from "react"
import { useState } from "react"

const Soal = ({data,questionNumber,setQuestionNumber,setTimeout}) => {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [classNama,setClassName] = useState('jawaban')
    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])

    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName('jawaban active')
        console.log(a)
    }
  return (
    <div className="soal">
        <div className="pertanyaan">{question?.pertanyaan}</div>
        <div className="jawabans">
            {question?.jawabans.map(a => (
                <div className={setSelectedAnswer === a ? classNama : 'jawaban'} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}

export default Soal