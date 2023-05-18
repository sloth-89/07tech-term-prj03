import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from "react";

export default function CreateDay(){
    
    const days = useFetch("http://localhost:4000/days");
    const navigate = useNavigate();

    function addDay(){
        fetch(`http://localhost:4000/days`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                day: days.length+1
            }),
        }).then(res => {
            if(res.ok){
                alert("날짜 생성이 완료되었습니다.")
                navigate(`/`)
            }
        })
    }

    return(
        <div className="create_day_container">
            <div className="create_day_box">
                <h2 style={{color: "red"}}>현재 존재하는 일수 : {days.length} 일</h2>
                <button className="button" onClick={addDay}>Day 추가</button>
                <div className="input_area">
                    <select>
                        {days.map(day => (
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="btn_del2">Day 삭제</button>
            </div>
            
        </div>
    )

}