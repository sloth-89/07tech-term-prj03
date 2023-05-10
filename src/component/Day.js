import { useParams } from "react-router-dom"
import dummy from "../db/data.json"
import Word from "./Word";

export default function Day (){

    // const inputDay = 3;
    const {inputDay} = useParams();
    const wordList = dummy.words.filter(word => (word.day === Number(inputDay)))
    // wordList는 filter 함수로 day가 3인 요소들을 담은 배열집합
    // words 배열집합을 filter로 재가공한 또 다른 배열집합
    // useParams는 숫자여도 문자(string)로 인식하기 때문에 inputDay를 숫자(Number)타입으로 바꿔줄 필요가 있다.(url 주소에 들어간 숫자는 문자로 인식!) 
    return(
        <>
            <h2>오늘의 학습 : Day {inputDay}</h2>
                <table>
                    <tbody>
                        {wordList.map(word => (
                            <Word word={word} key={word.id}/>
                        ))}
                    </tbody>
                </table>
        </>
    )
}