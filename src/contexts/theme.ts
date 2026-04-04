import IconSun from '../../public/images/icon-sun.svg';
import MoonIcon from '../../public/images/icon-moon.svg';

export const themeConfig = {

    light: {
        name: 'light',
        layout: {
            background: 'bg-color-light-bg',
            textColor: 'text-color-dark-text',
        },
        todo: {
            background: 'bg-color-light-todo-bg',
            border: 'border-color-light-border',
            textColor: 'text-color-light-todo-text',
        },
        icon: IconSun,
    },

    dark: {
        name: 'dark',
        layout: {
            background: 'bg-color-light-bg',
            textColor: 'text-color-dark-text',
        },
        todo: {
            background: 'bg-color-dark-todo-bg',
            border: 'border-color-light-border',
            textColor: 'text-color-light-todo-text',
        },
        icon: MoonIcon,
    }
}