import { SuccessContainer } from "./styles"
import image from "../../assets/Illustration.png"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import { useLocation } from "react-router-dom"

interface Address {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
}

export function Success() {
    const location = useLocation()
    const { address, selectedPayment } = location.state as { address: Address; selectedPayment: string }

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
                            <p>Entrega em <strong className="street">{address.street}</strong>,{" "}<span className="number">{address.number}</span></p>

                            <p><span className="neighborhood">{address.neighborhood}</span> -{" "}<span className="city">{address.city}</span>,{" "}<span className="state">{address.state}</span></p>
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

                            <strong className="payment-method">{selectedPayment}</strong>
                        </div>
                    </div>
                </div>
            </div>

            <img src={image} alt="Desenho de um motoboy" />
        </SuccessContainer>
   )
}