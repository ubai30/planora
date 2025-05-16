import { BsSearch } from "react-icons/bs";
import '../App.css'

function Sidebar() {

    return (
        <>
            <aside className="sidebar">
                <h2>My Workspace</h2>

                <div class="nav-item" onclick="toggle(this)">
                    <span class="icon">📄</span> Notes
                </div>
                <div class="sub-items">
                    <div class="nav-item">📌 Daily</div>
                    <div class="nav-item">🧠 Ideas</div>
                </div>

                <div class="nav-item" onclick="toggle(this)">
                    <span class="icon">📚</span> Projects
                </div>
                <div class="sub-items">
                    <div class="nav-item">💼 Portfolio</div>
                    <div class="nav-item">📈 Marketing</div>
                </div>

                <div class="nav-item">⚙️ Settings</div>
            </aside>
        </>
    )
}

export default Sidebar