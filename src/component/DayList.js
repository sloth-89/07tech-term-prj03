import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DayList (){
    // const [days, setDays] = useState([])

    // // useEffect(함수, [변화할 변수 또는 조건]) --> 빈 배열로 넣으면 초기 화면 랜더링 이후 한번만 실행!
    // // 즉, 랜더링 이후, json 데이터를 한번 가져옴
    // useEffect(() => {
    //     fetch("http://localhost:4000/days") // 데이터 연결하려는 url 주소
    //     .then(res => {return res.json();}) // url 주소상에 있는 데이터를 json형태로 바꿔준다(key-value 형태)
    //     .then(data => {setDays(data);}) // data로 상태 관리할 데이터를 넣어준다
    // },[])

    const days = useFetch("http://localhost:4000/days")

    return(
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                        Day {day.day}
                    </Link>
                </li>
            ))}
        </ul>
    )
} 