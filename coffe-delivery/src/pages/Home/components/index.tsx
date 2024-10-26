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

export function Catalog() {
    return(
        <CatalogContainer>
            <CatalogProduct 
            src={tradicional}
            nameCoffee="Expresso Tradicional"
            coffeeDescription="O tradicional café feito com água quente e grãos moídos"
            price="9,90"
            className="animation-item"     
            delay={0.2}        
            >
                <TypeCoffee 
                text="tradicional"
                />
            </CatalogProduct>

            <CatalogProduct 
            src={americano}
            nameCoffee="Expresso Americano"
            coffeeDescription="Expresso diluído, menos intenso que o tradicional"
            price="9,90"
            className="animation-item"     
            delay={0.4}         
            >
                <TypeCoffee 
                text="tradicional"
                />
            </CatalogProduct>

            <CatalogProduct 
            src={cremoso}
            nameCoffee="Expresso Cremoso"
            coffeeDescription="Café expresso tradicional com espuma cremosa"
            price="9,90"
            className="animation-item"     
            delay={0.6}          
            >
                <TypeCoffee 
                text="tradicional"
                />
            </CatalogProduct>

            <CatalogProduct 
            src={gelado}
            nameCoffee="Expresso Gelado"
            coffeeDescription="Bebida preparada com café expresso e cubos de gelo"
            price="9,90"
            className="animation-item"     
            delay={0.8}          
            >
                <TypeCoffee 
                text="tradicional"
                />

                <TypeCoffee text="gelado" />
            </CatalogProduct>

            <CatalogProduct 
            src={cafeComLeite}
            nameCoffee="Café com Leite"
            coffeeDescription="Meio a meio de expresso tradicional com leite vaporizado"
            price="9,90"
            className="animation-item"     
            delay={0.2}          
            >
                <TypeCoffee 
                text="tradicional"
                />

                <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={latte}
            nameCoffee="Latte"
            coffeeDescription="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price="9,90"
            className="animation-item"     
            delay={0.4}          
            >
                <TypeCoffee 
                text="tradicional"
                />

                <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={capuccino}
            nameCoffee="Capuccino"
            coffeeDescription="Bebida com canela feita de doses iguais de café, leite e espuma"
            price="9,90" 
            className="animation-item"     
            delay={0.6}         
            >
                    <TypeCoffee 
                    text="tradicional"
                    />

                    <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={macchiato}
            nameCoffee="Macchiato"
            coffeeDescription="Café expresso misturado com um pouco de leite quente e espuma"
            price="9,90"  
            className="animation-item"     
            delay={0.8}        
            >
                <TypeCoffee 
                text="tradicional"
                />

                <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={mocaccino}
            nameCoffee="Mocaccino"
            coffeeDescription="Café expresso com calda de chocolate, pouco leite e espuma"
            price="9,90"
            className="animation-item"     
            delay={0.2}          
            >
                <TypeCoffee 
                text="tradicional"
                />

                <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={chocolateQuente}
            nameCoffee="Chocolate Quente"
            coffeeDescription="Bebida feita com chocolate dissolvido no leite quente e café"
            price="9,90" 
            className="animation-item"     
            delay={0.4}         
            >
                <TypeCoffee 
                text="especial"
                />

                <TypeCoffee text="com leite" />
            </CatalogProduct>

            <CatalogProduct 
            src={cubano}
            nameCoffee="Cubano"
            coffeeDescription="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price="9,90"  
            className="animation-item"     
            delay={0.6}        
            >
                <TypeCoffee 
                text="especial"
                />

                <TypeCoffee text="alcoólico" />

                <TypeCoffee text="gelado" />
            </CatalogProduct>

            <CatalogProduct 
            src={havaiano}
            nameCoffee="Havaiano"
            coffeeDescription="Bebida adocicada preparada com café e leite de coco"
            price="9,90"   
            className="animation-item"     
            delay={0.8}       
            >
                <TypeCoffee 
                text="especial"
                />
            </CatalogProduct>

            <CatalogProduct 
            src={arabe}
            nameCoffee="Árabe"
            coffeeDescription="Bebida preparada com grãos de café árabe e especiarias"
            price="9,90"   
            className="animation-item"     
            delay={0.2}       
            >
                <TypeCoffee 
                text="especial"
                />
            </CatalogProduct>

            <CatalogProduct 
            src={irlandes}
            nameCoffee="Irlandês"
            coffeeDescription="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price="9,90" 
            className="animation-item"     
            delay={0.4}         
            >
                <TypeCoffee 
                text="especial"
                />

                <TypeCoffee text="alcoólico" />
            </CatalogProduct>
        </CatalogContainer>
    )
}