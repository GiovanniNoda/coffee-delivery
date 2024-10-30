import { useState } from "react";
import { InputForm } from "../../components/Input-form"
import { SelectCard } from "../../components/Select-card"
import { CheckoutContainer } from "./styles"
import { MapPinLine, CurrencyDollar, Bank, CreditCard, Money } from "phosphor-react"
import { CartProduct } from "../../components/Cart-product"
import { ConfirmButton } from "../../components/Confirm-button"
import tradicional from "../../assets/coffe-types-assets/tradicional.svg"
import latte from "../../assets/coffe-types-assets/latte.svg"

export function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const handleSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
    }

    return(
        <CheckoutContainer>
            <form action="">
                <h2>Complete seu pedido</h2>

                <fieldset className="address-form">
                    <legend>
                        <MapPinLine size={22} /> Endereço de Entrega 
                    </legend>

                    <p>Informe o endereço onde deseja receber seu pedido</p>

                    <InputForm
                    id="zip-code" 
                    name="zip-code"
                    widthPercentage={40}
                    type="text" 
                    placeholder="CEP"
                    pattern="\d{5}-\d{3}"
                    title="Digite o CEP no formato 00000-000"  
                    required
                    />

                    <InputForm 
                    id="street"
                    name="street"
                    widthPercentage={100}
                    type="text"
                    placeholder="Rua"
                    title="Digite o nome da Rua sem o número."
                    required
                    />

                    <div className="number-complement-container">
                        <InputForm
                        id="number"
                        name="number"
                        widthPercentage={40}
                        type="number"
                        placeholder="Número"
                        title="Digite o número da rua."
                        required
                        />

                        <InputForm
                        id="complement"
                        name="complement"
                        widthPercentage={60}
                        type="text"
                        placeholder="Complemento"
                        title="Digite o complemento de sua residência." 
                        />
                    </div>

                    <div className="city-state-container">
                        <InputForm 
                        id="neighborhood"
                        name="neighborhood"
                        widthPercentage={40}
                        type="text"
                        placeholder="Bairro"
                        title="Digite o bairro de seu endereço."
                        required
                        />

                        <InputForm 
                        id="city"
                        name="city"
                        widthPercentage={50}
                        type="text"
                        placeholder="Cidade"
                        title="Digite o nome de sua cidade."
                        required
                        />

                        <InputForm 
                        id="state"
                        name="state"
                        list="state-list"
                        widthPercentage={10}
                        type="text"
                        placeholder="UF"
                        title="Selecione seu Estado. (EX: SP)"
                        required
                        pattern="[A-Z]{2}"
                        />

                        <datalist id="state-list">
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="DF">DF</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                        </datalist>
                    </div>
                </fieldset>

                <fieldset className="payment-method">
                    <legend>
                        <CurrencyDollar size={22} /> Pagamento
                    </legend>

                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                    <div>
                        <SelectCard 
                        icon={<CreditCard size={16} />}
                        text="Cartão de crédito"
                        selected={selectedPayment == 'Cartão de crédito'}
                        onClick={() => handleSelectPayment('Cartão de crédito')}
                        />

                        <SelectCard 
                        icon={<Bank size={16} />}
                        text="Cartão de débito"
                        selected={selectedPayment == 'Cartão de débito'}
                        onClick={() => handleSelectPayment('Cartão de débito')}
                        />

                        <SelectCard 
                        icon={<Money size={16} />}
                        text="Dinheiro"
                        selected={selectedPayment == 'Dinheiro'}
                        onClick={() => handleSelectPayment('Dinheiro')}
                        />
                    </div>
                </fieldset>
                <div className="selected-coffees-container">
                    <h2>Cafés selecionados</h2>

                    <fieldset className="selected-coffees">
                        <CartProduct 
                        src={tradicional}
                        name="Expresso Tradicional"
                        price="9,90"
                        />

                        <CartProduct 
                        src={latte}
                        name="Latte"
                        price="9,90"
                        />

                        <div className="total-items-container">
                            <div className="total-items"> 
                                <span>Total de itens</span>

                                <span>R$ 29,70</span>
                            </div>

                            <div className="delivery">
                                <span>Entrega</span>

                                <span>R$ 3,50</span>
                            </div>

                            <div className="total">
                                <span>Total</span>

                                <span>R$ 33,20</span>
                            </div>
                        </div>
                        <ConfirmButton
                        text="confirmar pedido"
                        />
                    </fieldset>
                </div>
            </form>
        </CheckoutContainer>
    )
}