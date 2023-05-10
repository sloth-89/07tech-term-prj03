import { useParams } from "react-router-dom"
import Word from "./Word";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day (){
    
    // const inputDay = 3;
    const {inputDay} = useParams();

    // const [words, setWords] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:4000/words?day=${inputDay}`) // words만 입력하면 전체를 가져오기때문에 이렇게 조회 조건을 걸어준다.
    //     .then(res => {return res.json();})
    //     .then(data => {setWords(data);})
    // },[inputDay])

    // const wordList = words.filter(word => (word.day === Number(inputDay)))
    // wordList는 filter 함수로 day가 3인 요소들을 담은 배열집합
    // words 배열집합을 filter로 재가공한 또 다른 배열집합
    // useParams는 숫자여도 문자(string)로 인식하기 때문에 inputDay를 숫자(Number)타입으로 바꿔줄 필요가 있다.(url 주소에 들어간 숫자는 문자로 인식!) 

    const words = useFetch(`http://localhost:4000/words?day=${inputDay}`)
    // Day.js와 DayList.js에서 useState와 useEffect의 반복사용을 피하기위해
    // 해당 함수 2개를 커스텀 훅스인 useFetch에 한번 작성하고 호출하여 사용

    return(
        <>
            <h2>오늘의 학습 : Day {inputDay}</h2>
                <table>
                    <tbody>
                        {words.map(word => (
                            <Word word={word} key={word.id}/>
                        ))}
                    </tbody>
                </table>
        </>
    )
}