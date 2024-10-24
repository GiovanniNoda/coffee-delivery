import { HomeContainer } from "./styles"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import CoffeImage from "../../assets/image.svg"

export function Home() {
    return(
        <HomeContainer>
            <div className="container">
                <div className="title-container">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>

                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <div className="items-container">
                        <div className="two-items-container">
                            <div className="item-wrapper">
                                <span>
                                    <ShoppingCart size={16} />
                                </span>

                                <span>
                                    Compra simples e segura
                                </span>
                            </div>

                            <div className="item-wrapper">
                                <span>
                                    <Package size={16} />
                                </span>

                                <span>
                                Embalagem mantém o café intacto
                                </span>
                            </div>
                        </div>

                        <div className="two-items-container">
                            <div className="item-wrapper">
                                <span>
                                    <Timer size={16} />
                                </span>

                                <span>
                                Entrega rápida e rastreada
                                </span>
                            </div>

                            <div className="item-wrapper">
                                <span>
                                    <Coffee size={16} />
                                </span>

                                <span>
                                O café chega fresquinho até você
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={CoffeImage} alt="" />
            </div>
        </HomeContainer>
    )
}