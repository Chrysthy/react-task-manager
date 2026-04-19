import { themeConfig } from '../../contexts/theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from "react";


interface TodoContainerProps {
    children: React.ReactNode;
}

export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);
    const config = themeConfig[theme];

    return (
        <>
            <main className={`h-screen ${config.layout.background}`}>

                <div className={`${config.layout.heroClass}`}>

                    <div className="max-w-175 w-full m-auto p-8">{children}</div>

                </div>

            </main >
        </>
    )
}