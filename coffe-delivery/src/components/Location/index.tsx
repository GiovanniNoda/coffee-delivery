import { useEffect, useState } from "react"
import { LocationContainer } from "./styles"
import { MapPin } from "phosphor-react"
import axios from "axios"

export function Location() {
    const [location, setLocation] = useState<string>(""); // Estado para armazenar a localização
    const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento

    useEffect(() => {
        const fetchLocation = async () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                // Faz uma requisição para a API Nominatim
                const response = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );

                const { address } = response.data;

                // Extraindo a cidade e o estado do endereço
                const city = address.city || address.town || address.village || "Localização não encontrada";
                const state = address.state;

                setLocation(`${city}, ${state}`);
                } catch (error) {
                console.error("Erro ao buscar a localização:", error);
                setLocation("Localização não encontrada");
                } finally {
                setLoading(false);
                }   
            },
            (error) => {
                console.error("Erro ao obter a localização:", error);
                setLocation("Localização não disponível");
                setLoading(false);
            }
            );
        } else {
            setLocation("Geolocalização não suportada pelo navegador");
            setLoading(false);
        }
        };

        fetchLocation();
    }, []);

    return(
        <LocationContainer>
            <MapPin size={22} />
        
            <span>
            {loading ? "Carregando localização..." : location}
            </span>
        </LocationContainer>
    )
}