import { SuccessContainer } from "./styles"
import image from "../../assets/Illustration.png"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"

export function Success() {
   return(
        <SuccessContainer>
            <div className="container">
                <div className="text-container">
                    <span className="success-message">Uhu! Pedido confirmado</span>

                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>

                <div className="informations-container">
                    <div className="information-wrapper">
                        <span className="icon-container" id="local">
                            <MapPin size={16} />
                        </span>

                        <div className="text-wrapper">
                            <p>Entrega em <strong className="street">Rua João Daniel Martinelli</strong>, <span className="number">102</span></p>

                            <p><span className="neighborhood">Farrapos</span> - <span className="city">Porto Alegre</span>, <span className="state">RS</span></p>
                        </div>
                    </div>

                    <div className="information-wrapper">
                        <span className="icon-container" id="time">
                            <Timer size={16} />
                        </span>

                        <div className="text-wrapper">
                            <p>Previsão de entrega</p>

                            <strong>20min - 30min</strong>
                        </div>
                    </div>

                    <div className="information-wrapper">
                        <span className="icon-container" id="payment">
                            <CurrencyDollar size={16} />
                        </span>

                        <div className="text-wrapper">
                            <p>Pagamento na entrega</p>

                            <strong className="payment-method">Cartão de Crédito</strong>
                        </div>
                    </div>
                </div>
            </div>

            <img src={image} alt="Desenho de um motoboy" />
        </SuccessContainer>
   )
}