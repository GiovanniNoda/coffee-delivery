import React from "react"
import { InputFormContainer } from "./styles"

interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    widthPercentage?: number;
}

export function InputForm({ widthPercentage = 100, ...props }: InputFormProps) {
   return(
        <InputFormContainer widthPercentage={widthPercentage} {...props} />
   )
}