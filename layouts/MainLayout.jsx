import MiniProfile from '../components/MiniProfile';
import Menu from '../components/Menu';

export default function MainLayout(props){
    return(
        <>
            <div id="dashboard">
                <div id="dash-menu">
                    <MiniProfile />
                    <div className="clear-both"></div>
                    <Menu />
                </div>
                <div id="dash-content">
                    <div id="dash-home" className="block">
                        <div id="search" className="text-right">
                            <input type="text" placeholder="Quick search..." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

