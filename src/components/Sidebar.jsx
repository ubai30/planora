import { HiMiniChevronRight } from "react-icons/hi2";
import '../App.css'

function Sidebar() {

    return (
        <>
            <aside className="sidebar">
                <button 
                className="image-text"
                type="button">
                    <span className="image">
                        <img src="./src/assets/img/planoralogo.png" alt="planora logo"/>
                    </span>
                    <span className="name">PLANORA</span>
                    <HiMiniChevronRight className="toggle"/>
                </button>
            </aside>
        </>
    )
}

export default Sidebar