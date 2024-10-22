import { InputNumberContainer } from "./styles"
import { Minus, Plus } from "phosphor-react"
import { useState } from "react"

export function InputNumber() {
    const [value, setValue] = useState<number>(1)

    function handleIncrement () {
        setValue((currentValue) => currentValue + 1)
    }

    function handleDecrement () {
        setValue((currentValue) => (currentValue > 1 ? currentValue - 1 : currentValue))
    }

    return(
        <InputNumberContainer>
            <button onClick={handleDecrement}>
                <Minus size={14} />
            </button>

            <input type="number" min={1} value={value} readOnly />

            <button onClick={handleIncrement}>
                <Plus size={14} />
            </button>
        </InputNumberContainer>
    )
}