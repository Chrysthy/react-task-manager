import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from "react";

const TodoHeader = () => {

    const { theme, toogleTheme } = useContext(ThemeContext);

    return (
        <header className="flex justify-between mb-6 pt-20">

            <h1 className="text-white text-[2.5rem] font-bold tracking-[1rem]">TODO</h1>

            <button className="cursor-pointer" onClick={toogleTheme}>
                <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Toggle Theme" />
            </button>

        </header>
    )
}

export default TodoHeader;