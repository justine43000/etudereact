import './style.css';


export default function Post({ title, body, onClick, del, handleModify }) {
    return (
        <div className="post--card" >
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={onClick}>details</button>
            <button onClick={del}>Supprimer</button>
            <button onClick={handleModify}>Modifier</button>
        </div>
    );
}
