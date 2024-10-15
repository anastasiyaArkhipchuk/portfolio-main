import {RightMenu} from "../rightMenu/RightMenu";
import {LeftMenu} from "../left-menu/LeftMenu";
import {MainMenu} from "../main-menu/MainMenu";
import {Services} from "../services/Services";

export const Main = () => {
    return (
        <div>
            <RightMenu/>
            <LeftMenu/>
            <MainMenu/>
            <Services/>
        </div>
    )
}

