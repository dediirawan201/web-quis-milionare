import { useEffect } from "react"
import { useState } from "react"
import useSound from "use-sound"
import play from "../sounds/play.mp3"
import correct from '../sounds/correct.mp3'
import wait from '../sounds/wait.mp3'
import wrong from '../sounds/wrong.mp3'

const Soal = ({data,questionNumber,setQuestionNumber,setStop,setNavOpen,navOpen}) => {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer,setSelectedAnswer] = useState(null)
    const [classNama,setClassName] = useState('jawaban')

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        letsPlay();
    },[letsPlay])

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
        delay(5000, () => {
            if(a.correct){
                correctAnswer()
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    // setClassName('')
                    setSelectedAnswer(null)
                    setNavOpen(!navOpen)
                })

            } else{
                wrongAnswer()
                delay(1000, () => {
                    setStop(true)
                })
            }
        })

        delay(10000, () => setNavOpen(a.correct ? false : true))
            
    }
  return (
    <div className="soal">
        <div className="pertanyaan">{question?.pertanyaan}</div>
        <div className="jawabans">
            {/* <div onClick={() => letsPlay()}>cek</div> */}
            {question?.jawabans.map((a,indek) => (
                <div key={indek} className={selectedAnswer === a ? classNama : 'jawaban'} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}

export default Soal