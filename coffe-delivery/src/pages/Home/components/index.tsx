import { useEffect, useState } from "react"
import { CatalogProduct } from "../../../components/Catalog-product"
import { CatalogContainer } from "./styles"
import { TypeCoffee } from "../../../components/Type-coffee"
import tradicional from "../../../assets/coffe-types-assets/tradicional.svg"
import americano from "../../../assets/coffe-types-assets/americano.svg"
import cremoso from "../../../assets/coffe-types-assets/cremoso.svg"
import gelado from "../../../assets/coffe-types-assets/gelado.svg"
import cafeComLeite from "../../../assets/coffe-types-assets/cafe-com-leite.svg"
import latte from "../../../assets/coffe-types-assets/latte.svg"
import capuccino from "../../../assets/coffe-types-assets/capuccino.svg"
import macchiato from "../../../assets/coffe-types-assets/macchiato.svg"
import mocaccino from "../../../assets/coffe-types-assets/mocaccino.svg"
import chocolateQuente from "../../../assets/coffe-types-assets/chocolate-quente.svg"
import cubano from "../../../assets/coffe-types-assets/cubano.svg"
import havaiano from "../../../assets/coffe-types-assets/havaiano.svg"
import arabe from "../../../assets/coffe-types-assets/arabe.svg"
import irlandes from "../../../assets/coffe-types-assets/irlandes.svg"
import { ItemData, useCart } from "../../../hooks/useCart"


export function Catalog() {
    const {addItemCart} = useCart()

    const [delayValues, setDelayValues] = useState<number[]>([]);

    useEffect(() => {
        const updateDelays = () => {
            const width = window.innerWidth

            // Define delays based on the viewport width
            if (width >= 1440) { 
                setDelayValues([0.2, 0.4, 0.6, 0.8])
            } else if (width >= 1024) { 
                setDelayValues([0.2, 0.4, 0.6])
            } else if (width >= 768) { 
                setDelayValues([0.2, 0.4])
            } else {
                setDelayValues([0.2])
            }
        };

        updateDelays()
        window.addEventListener("resize", updateDelays)
        
        return () => window.removeEventListener("resize", updateDelays)
    }, [])

    const products: ItemData[] = [
        {
            photo: tradicional,
            title: "Expresso Tradicional",
            coffeeDescription: "O tradicional café feito com água quente e grãos moídos",
            price: 990
        },
        {
            photo: americano,
            title: "Expresso Americano",
            coffeeDescription: "Expresso diluído, menos intenso que o tradicional",
            price: 990
        },
        {
            photo: cremoso,
            title: "Expresso Cremoso",
            coffeeDescription: "Café expresso tradicional com espuma cremosa",
            price: 990
        },
        {
            photo: gelado,
            title: "Expresso Gelado",
            coffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
            price: 990,
        },
        {
            photo: cafeComLeite,
            title: "Café com Leite",
            coffeeDescription: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 990,
        },
        {
            photo: latte,
            title: "Latte",
            coffeeDescription: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 990,
        },
        {
            photo: capuccino,
            title: "Capuccino",
            coffeeDescription: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 990,
        },
        {
            photo: macchiato,
            title: "Macchiato",
            coffeeDescription: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 990,
        },
        {
            photo: mocaccino,
            title: "Mocaccino",
            coffeeDescription: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 990,
        },
        {
            photo: chocolateQuente,
            title: "Chocolate Quente",
            coffeeDescription: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 990,
        },
        {
            photo: cubano,
            title: "Cubano",
            coffeeDescription: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 990,
        },
        {
            photo: havaiano,
            title: "Havaiano",
            coffeeDescription: "Bebida adocicada preparada com café e leite de coco",
            price: 990,
        },
        {
            photo: arabe,
            title: "Árabe",
            coffeeDescription: "Bebida preparada com grãos de café árabe e especiarias",
            price: 990,
        },
        {
            photo: irlandes,
            title: "Irlandês",
            coffeeDescription: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 990,
        },
    ];

    function handleAddToCart(product: ItemData) {
        console.log("Produto adicionado", product)

        addItemCart(product)
    }

    return (
        <CatalogContainer>
            {products.map((product, index) => (
                <CatalogProduct
                key={index}
                photo={product.photo}
                nameCoffee={product.title}
                coffeeDescription={product.coffeeDescription}
                price={product.price}
                className="animation-item"
                delay={delayValues[index % delayValues.length] || 0}
                addToCart={() => handleAddToCart(product)}
                >
                    <TypeCoffee 
                        text={index < 10 ? "tradicional" : "especial"} // Ajustar texto conforme o índice
                    />
                    {index >= 3 && <TypeCoffee text="com leite" />} 
                    {index === 0 && <TypeCoffee text="gelado" />} 
                    {index === 10 && <TypeCoffee text="alcoólico" />} 
                </CatalogProduct>
            ))}
        </CatalogContainer>
    );
}