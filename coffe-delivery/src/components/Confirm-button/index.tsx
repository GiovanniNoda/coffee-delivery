import { ConfirmButtonContainer } from "./styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
}

export function ConfirmButton({ text, ...props }: ButtonProps) {
    return(
        <ConfirmButtonContainer {...props}>
            {text}
        </ConfirmButtonContainer>
    )
}