import styled from "styled-components"

export const CatalogContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;

    @keyframes appear {
        0% {
            opacity: 0;
            transform: scale(0.7);
        }

        50% {
            transform: scale(1.2);
        }
    }

    .animation-item {
        animation: appear .4s backwards;
        animation-delay: var(--delay);
    }
`