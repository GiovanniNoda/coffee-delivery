import { InputForm } from "../../components/Input-form"
import { CheckoutContainer } from "./styles"
import { MapPinLine } from "phosphor-react"

export function Checkout() {
    return(
        <CheckoutContainer>
            <form action="">
                <h3>Complete seu pedido</h3>

                <fieldset className="address-form">
                    <legend>
                        <MapPinLine /> Endereço de Entrega 
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
            </form>
        </CheckoutContainer>
    )
}