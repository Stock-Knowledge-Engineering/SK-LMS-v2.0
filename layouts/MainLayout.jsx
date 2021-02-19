import MiniProfile from '../components/MiniProfile';
import Menu from '../components/Menu';

export default function MainLayout(props){
    return(
        <>
            <div id="dashboard" className="flex">
                <div id="dash-menu" className="text-white w-1/5 h-screen">
                    <MiniProfile />
                    <div className="clear-both"></div>
                    <Menu />
                </div>
                <div id="dash-content" className="p-4 w-4/5">
                    <div id="dash-home">
                        <div id="search" className="text-right">
                            <input type="text" placeholder="Quick search..." />
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}

