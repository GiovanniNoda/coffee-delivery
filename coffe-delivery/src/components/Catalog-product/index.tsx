import { CartButton } from "../Cart-button"
import { InputNumber } from "../Input-number"
import { CatalogProductContainer } from "./styles"
import { useEffect, useRef, useState } from "react"

interface CatalogProductProps extends React.HTMLAttributes<HTMLDivElement> {
    photo: string;
    alt?: string;
    children: React.ReactNode;
    nameCoffee: string;
    coffeeDescription?: string;
    price: number;
    delay: number;
    addToCart: () => void
}

export function CatalogProduct({
    photo,
    alt,
    children,
    nameCoffee,
    coffeeDescription,
    price,
    delay,
    addToCart,
    ...props
}: CatalogProductProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Para parar a observação após a primeira vez
                }
            },
            { threshold: 0.2 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current); // Remover a observação no cleanup
            }
            observer.disconnect(); // Desconectar o observer
        };
    }, []);

    
    function formatPrice(value: number): string {
        return value.toFixed(2).replace(".", ",")
    }

    return (
        <CatalogProductContainer
            {...props}
            ref={ref}
            $isVisible={isVisible}
            $delay={delay} // Corrigido para $delay
        >
            <img src={photo} alt={alt} />

            <div className="children-container">
                {children}
            </div>

            <h3>{nameCoffee}</h3>

            <p>{coffeeDescription}</p>

            <div className="container">
                <span className="span-container">
                    R$
                    <span className="span-price">{formatPrice(price)}</span>
                </span>

                <div className="cart-container">
                    <InputNumber />
                    <CartButton onClick={addToCart} />
                </div>
            </div>
        </CatalogProductContainer>
    );
}
