import IconSun from '../../public/images/icon-sun.svg';
import MoonIcon from '../../public/images/icon-moon.svg';

export const themeConfig = {

    light: {
        name: 'light',
        layout: {
            background: 'bg-light-bg',
            textColor: 'text-color-dark-text',
        },
        todo: {
            background: 'bg-light-bg',
            border: 'border-light-border',
            textColor: 'text-light-text',
        },
        icon: MoonIcon,
    },
    
    dark: {
        name: 'dark',
        layout: {
            background: 'bg-dark-bg',
            textColor: 'text-dark-text',
        },
        todo: {
            background: 'bg-dark-surface',
            border: 'border-dark-border',
            textColor: 'text-dark-primary',
        },
        icon: IconSun,
    }
}