import { useState } from "react"
import { InputForm } from "../../components/Input-form"
import { SelectCard } from "../../components/Select-card"
import { CheckoutContainer } from "./styles"
import { MapPinLine, CurrencyDollar, Bank, CreditCard, Money } from "phosphor-react"
import { CartProduct } from "../../components/Cart-product"
import { ConfirmButton } from "../../components/Confirm-button"
import tradicional from "../../assets/coffe-types-assets/tradicional.svg"
import latte from "../../assets/coffe-types-assets/latte.svg"

interface Address {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
  }

export function Checkout() {
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const [address, setAddress] = useState<Address>({
        cep: "",
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
      })

    const handleSelectPayment = (payment: string) => {
    setSelectedPayment(payment);
    }


  // Função para buscar o endereço ao digitar o CEP
  const fetchAddress = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado!");
        return;
      }

      setAddress((prev) => ({
        ...prev,
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      }));
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  // Atualiza o endereço e busca o CEP quando tem 8 dígitos
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Busca o endereço automaticamente quando o CEP tem 8 caracteres
    if (name === "cep" && value.length === 8) {
      fetchAddress(value);
    }
  };

    return(
        <CheckoutContainer>
            <form action="">
                <div className="address-paymanet-container">
                    <h2>Complete seu pedido</h2>

                    <div id="address-form" className="form-content">
                        <h4>
                            <MapPinLine size={22} /> Endereço de Entrega
                        </h4>

                        <p className="phrase">Informe o endereço onde deseja receber seu pedido</p>

                        <InputForm
                        id="zip-code"
                        name="cep"
                        type="text"
                        placeholder="CEP"
                        title="Digite o CEP no formato 00000000"
                        required
                        value={address.cep}
                        onChange={handleAddressChange}
                        />

                        <InputForm
                        id="street"
                        name="street"
                        type="text"
                        placeholder="Rua"
                        title="Digite o nome da Rua sem o número."
                        required
                        value={address.street}
                        onChange={handleAddressChange}
                        />

                        <div className="number-complement-container">
                            <InputForm
                            id="number"
                            name="number"
                            type="number"
                            placeholder="Número"
                            title="Digite o número da rua."
                            required
                            value={address.number}
                            onChange={handleAddressChange}
                            />

                            <InputForm
                            id="complement"
                            name="complement"
                            type="text"
                            placeholder="Complemento"
                            title="Digite o complemento de sua residência."
                            value={address.complement}
                            onChange={handleAddressChange}
                            />
                        </div>

                        <div className="city-state-container">
                            <InputForm
                            id="neighborhood"
                            name="neighborhood"
                            type="text"
                            placeholder="Bairro"
                            title="Digite o bairro de seu endereço."
                            required
                            value={address.neighborhood}
                            onChange={handleAddressChange}
                            />

                            <InputForm
                            id="city"
                            name="city"
                            type="text"
                            placeholder="Cidade"
                            title="Digite o nome de sua cidade."
                            required
                            value={address.city}
                            onChange={handleAddressChange}
                            />

                            <InputForm
                            id="state"
                            name="state"
                            list="state-list"
                            type="text"
                            placeholder="UF"
                            title="Selecione seu Estado. (EX: SP)"
                            required
                            pattern="[A-Z]{2}"
                            value={address.state}
                            onChange={handleAddressChange}
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
                    </div>

                    <div className="form-content" id="payment-method">
                        <h4>
                            <CurrencyDollar size={22} /> Pagamento
                        </h4>

                        <p className="phrase">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                        <div className="select-card-container">
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
                    </div>
                </div>

                <div className="selected-coffees-container">
                    <h2>Cafés selecionados</h2>

                    <div className="form-content" id="selected-coffees">
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
                                <span className="description">Total de itens</span>

                                <span className="price">R$ 29,70</span>
                            </div>

                            <div className="delivery">
                                <span className="description">Entrega</span>

                                <span className="price">R$ 3,50</span>
                            </div>

                            <div className="total">
                                <strong>Total</strong>

                                <strong>R$ 33,20</strong>
                            </div>
                        </div>
                        <ConfirmButton
                        text="confirmar pedido"
                        type="submit"
                        />
                    </div>
                </div>
            </form>
        </CheckoutContainer>
    )
}