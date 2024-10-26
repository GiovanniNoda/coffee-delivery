import { HomeContainer, IconSpan } from "./styles"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import CoffeImage from "../../assets/image.svg"
import { Catalog } from "./components"


export function Home() {
    return(
        <HomeContainer>
            <div className="header-container">
                <div className="title-container">
                    <h2>Encontre o café perfeito para qualquer hora do dia</h2>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <div className="items-container">
                        <div className="two-items-container">
                            <div className="item-wrapper">
                                <IconSpan id="cart-icon">
                                    <ShoppingCart size={16} />
                                </IconSpan>

                                <span>
                                    Compra simples e segura
                                </span>
                            </div>

                            <div className="item-wrapper">
                                <IconSpan id="package-icon">
                                    <Package size={16} />
                                </IconSpan>

                                <span>
                                    Embalagem mantém o café intacto
                                </span>
                            </div>
                        </div>

                        <div className="two-items-container">
                            <div className="item-wrapper">
                                <IconSpan id="timer-icon">
                                    <Timer size={16} />
                                </IconSpan>

                                <span>
                                    Entrega rápida e rastreada
                                </span>
                            </div>

                            <div className="item-wrapper">
                                <IconSpan id="coffee-icon">
                                    <Coffee size={16} />
                                </IconSpan>

                                <span>
                                    O café chega fresquinho até você
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={CoffeImage} alt="" />
            </div>

            <h3 className="catalog-title">Nossos cafés</h3>
    
            <Catalog />
        </HomeContainer>
    )
}