import { Link } from "react-router-dom";

export default function Header (){
    return(
        <div className="header">
            <h1>
                <Link to="/">Tech 기술 용어</Link>
            </h1>
            <div className="menu">
                <Link to="/create_word" className="link">단어 추가</Link>
                <Link to="/create_day" className="link">day 추가</Link>
            </div>
        </div>
    )
}