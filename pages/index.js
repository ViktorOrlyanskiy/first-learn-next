import { Inter } from "@next/font/google";
import Link from "next/link";
import cls from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <h1 className={`${cls.title} font-effect-fire-animation`}>Главная</h1>
            <p className={cls.text}>
                Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих
                начинки можно поспорить, ведь это дело вкуса.
            </p>
            <p className={cls.text}>
                Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера
                заведения.
            </p>
            <Link href="/burgers" className={cls.btn}>
                Бургеры
            </Link>
        </>
    );
}
