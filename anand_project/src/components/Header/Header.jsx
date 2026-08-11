import '.Header.css'

export default function Header(){
    return(
        <div className="menuNav">
            <ul>Home</ul>
            <div className="menuUser">
                <ul className="notifica">🔔</ul>
                <ul>
                    <img src={'https://cdn-icons-png.flaticon.com/512/4792/4792929.png'} alt="avatarUser" />
                </ul>
            </div>

        </div>
    )
}