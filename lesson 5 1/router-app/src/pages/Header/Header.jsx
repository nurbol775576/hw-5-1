import { HeaderComponent } from "../../components"
import { Outlet } from "react-router-dom";



const Header = () => {
    return (
        <>
            <HeaderComponent />           
            <Outlet />
        </>
    )
}
export default Header;
