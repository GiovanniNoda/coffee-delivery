import { SelectCardContainer } from "./styles"

interface PaymentOptionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode
    text: string
    selected: boolean
    onClick: () => void
}

export function SelectCard({ icon, text, selected, onClick, ...props }: PaymentOptionButtonProps) {
    return(
        <SelectCardContainer 
        {...props}
        type="button"
        className={`payment-option ${selected ? 'selected' : ''}`}
        onClick={onClick}
        >
            {icon}
        
            <span>{text}</span>
        </SelectCardContainer>
    )
}


//const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

//const handleSelectPayment = (payment: string) => {
    //setSelectedPayment(payment);
//}


    //<SelectCard 
        //icon={<Bank />}
        //text="Cartão de débito"
        //selected={selectedPayment == 'Cartão de débito'}
        //onClick={() => handleSelectPayment('Cartão de débito')}
      ///>