
import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord(){

    const days = useFetch("http://localhost:4000/days");
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault();
        
        console.log(engRef.current.value)
        console.log(korRef.current.value)
        console.log(dayRef.current.value)

        fetch(`http://localhost:4000/words`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            }),
        }).then(res => {
            if(res.ok){
                alert("단어 생성이 완료 되었습니다.")
                navigate(`/day/${dayRef.current.value}`)
            }
        })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return(
        // input창에 데이터를 넣어서 DB에 활용 및 전송할 때는 form 태그로 감싸준다.
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>English Word</label>
                <input type="text" placeholder="Type IT term in English" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>Korean Word</label>
                <input type="text" placeholder="한국어 뜻을 입력하세요" ref={korRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button className="button">단어 저장</button>
        </form>
    )
}