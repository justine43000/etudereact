import { Link } from "react-router-dom";
export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={"articles"}>Articles</Link>
        </div>)
}