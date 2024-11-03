import { HeaderContainer } from "./styles"
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.svg'
import { Location } from "../Location"
import { Cart } from "../Cart"

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={logo} alt="" />
            </NavLink>

            <div>
                <Location />

                <nav>
                    <NavLink to="/checkout" title="Checkout">
                        <Cart />
                    </NavLink>
                </nav>
            </div>
        </HeaderContainer>
    )
}