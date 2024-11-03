import React from "react";
import { InputFormContainer } from "./styles";

//interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //widthPercentage?: number;
//}

export function InputForm({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <InputFormContainer {...props}/>;
}
