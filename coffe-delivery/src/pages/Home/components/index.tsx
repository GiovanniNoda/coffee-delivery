import { useEffect, useState } from "react";
import { CatalogProduct } from "../../../components/Catalog-product";
import { CatalogContainer } from "./styles";
import { TypeCoffee } from "../../../components/Type-coffee";
import tradicional from "../../../assets/coffe-types-assets/tradicional.svg";
import americano from "../../../assets/coffe-types-assets/americano.svg";
import cremoso from "../../../assets/coffe-types-assets/cremoso.svg";
import gelado from "../../../assets/coffe-types-assets/gelado.svg";
import cafeComLeite from "../../../assets/coffe-types-assets/cafe-com-leite.svg";
import latte from "../../../assets/coffe-types-assets/latte.svg";
import capuccino from "../../../assets/coffe-types-assets/capuccino.svg";
import macchiato from "../../../assets/coffe-types-assets/macchiato.svg";
import mocaccino from "../../../assets/coffe-types-assets/mocaccino.svg";
import chocolateQuente from "../../../assets/coffe-types-assets/chocolate-quente.svg";
import cubano from "../../../assets/coffe-types-assets/cubano.svg";
import havaiano from "../../../assets/coffe-types-assets/havaiano.svg";
import arabe from "../../../assets/coffe-types-assets/arabe.svg";
import irlandes from "../../../assets/coffe-types-assets/irlandes.svg";

export function Catalog() {
    const [delayValues, setDelayValues] = useState<number[]>([]);

    useEffect(() => {
        const updateDelays = () => {
            const width = window.innerWidth;

            // Define delays based on the viewport width
            if (width <= 425) { 
                setDelayValues([0.2]);
            } else if (width <= 768) { 
                setDelayValues([0.2, 0.4]);
            } else if (width <= 1024) { 
                setDelayValues([0.2, 0.4, 0.6]);
            } else {
                setDelayValues([0.2, 0.4, 0.6, 0.8]);
            }
        };

        updateDelays();
        window.addEventListener("resize", updateDelays);
        
        return () => window.removeEventListener("resize", updateDelays);
    }, []);

    const products = [
        {
            src: tradicional,
            nameCoffee: "Expresso Tradicional",
            coffeeDescription: "O tradicional café feito com água quente e grãos moídos",
            price: "9,90",
        },
        {
            src: americano,
            nameCoffee: "Expresso Americano",
            coffeeDescription: "Expresso diluído, menos intenso que o tradicional",
            price: "9,90",
        },
        {
            src: cremoso,
            nameCoffee: "Expresso Cremoso",
            coffeeDescription: "Café expresso tradicional com espuma cremosa",
            price: "9,90",
        },
        {
            src: gelado,
            nameCoffee: "Expresso Gelado",
            coffeeDescription: "Bebida preparada com café expresso e cubos de gelo",
            price: "9,90",
        },
        {
            src: cafeComLeite,
            nameCoffee: "Café com Leite",
            coffeeDescription: "Meio a meio de expresso tradicional com leite vaporizado",
            price: "9,90",
        },
        {
            src: latte,
            nameCoffee: "Latte",
            coffeeDescription: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: "9,90",
        },
        {
            src: capuccino,
            nameCoffee: "Capuccino",
            coffeeDescription: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: "9,90",
        },
        {
            src: macchiato,
            nameCoffee: "Macchiato",
            coffeeDescription: "Café expresso misturado com um pouco de leite quente e espuma",
            price: "9,90",
        },
        {
            src: mocaccino,
            nameCoffee: "Mocaccino",
            coffeeDescription: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: "9,90",
        },
        {
            src: chocolateQuente,
            nameCoffee: "Chocolate Quente",
            coffeeDescription: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: "9,90",
        },
        {
            src: cubano,
            nameCoffee: "Cubano",
            coffeeDescription: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: "9,90",
        },
        {
            src: havaiano,
            nameCoffee: "Havaiano",
            coffeeDescription: "Bebida adocicada preparada com café e leite de coco",
            price: "9,90",
        },
        {
            src: arabe,
            nameCoffee: "Árabe",
            coffeeDescription: "Bebida preparada com grãos de café árabe e especiarias",
            price: "9,90",
        },
        {
            src: irlandes,
            nameCoffee: "Irlandês",
            coffeeDescription: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: "9,90",
        },
    ];

    return (
        <CatalogContainer>
            {products.map((product, index) => (
                <CatalogProduct
                    key={index}
                    src={product.src}
                    nameCoffee={product.nameCoffee}
                    coffeeDescription={product.coffeeDescription}
                    price={product.price}
                    className="animation-item"
                    delay={delayValues[index % delayValues.length] || 0} // Repetir os valores de delay
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
