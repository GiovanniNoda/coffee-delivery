const sizes = {
    mobile: '768px',
    tablet: '1024px',
    laptop: '1440px',
}

export const media = {
    mobile: `@media (width < ${sizes.mobile})`,
    tablet: `@media (width < ${sizes.tablet})`,
    laptop: `@media (width < ${sizes.laptop})`,
}