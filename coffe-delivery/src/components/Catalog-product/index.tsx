import { CartButton } from "../Cart-button"
import { InputNumber } from "../Input-number"
import { CatalogProductContainer } from "./styles"
import { useEffect, useRef, useState } from "react"

interface CatalogProductProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string
    alt?:string
    children: React.ReactNode
    nameCoffee: string
    coffeeDescription: string
    price: string
    delay: number
    onAddToCart: () => void
}

export function CatalogProduct ({ src, alt, children, nameCoffee, coffeeDescription, price, delay, onAddToCart, ...props }: CatalogProductProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.2 }
        )

        if (ref.current) observer.observe(ref.current)
            return () => observer.disconnect()
    }, [])

    const handleAddToCart = () => {
        onAddToCart()
    }

    return(
        <CatalogProductContainer 
        {...props}
        ref={ref}
        isVisible={isVisible}
        delay={delay}
        >
            <img src={src} alt={alt} />

            <div className="children-container">
                {children}
            </div>

            <h3>{nameCoffee}</h3>

            <p>{coffeeDescription}</p>

            <div className="container">
                <span className="span-container">
                R$
                    <span className="span-price">{price}</span>
                </span>

                <div className="cart-container">
                    <InputNumber />

                    <CartButton onClick={handleAddToCart} />
                </div>
            </div>
        </CatalogProductContainer>
    )
}