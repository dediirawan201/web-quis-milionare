import { useEffect } from "react"
import { useState } from "react"

const Soal = ({data,questionNumber,setQuestionNumber,setStop}) => {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [classNama,setClassName] = useState('jawaban')
    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])
    
    const delay = (durasi, callback) => {
        setTimeout(() => {
            callback()
        }, durasi);
    }
    const handleClick = (a) => {
        setSelectedAnswer(a)
        setClassName('jawaban active')
        delay(3000, () => setClassName(a.correct ? 'jawaban correct' : 'jawaban wrong'))
        delay(6000, () => {
            if(a.correct){
                setQuestionNumber((prev) => prev + 1)
                setSelectedAnswer(null)
            } else{
                setStop(true)
            }
        })
    }
  return (
    <div className="soal">
        <div className="pertanyaan">{question?.pertanyaan}</div>
        <div className="jawabans">
            {question?.jawabans.map((a,indek) => (
                <div key={indek} className={selectedAnswer === a ? classNama : 'jawaban'} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}

export default Soal