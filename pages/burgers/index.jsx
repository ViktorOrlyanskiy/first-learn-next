import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import cls from "../../styles/Burgers.module.css";

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:8000/items");
    const data = await response.json();

    return {
        props: {
            burgers: data,
        },
    };
};

const Burgers = ({ burgers }) => {
    return (
        <>
            <Head>
                <title>Жирные бургеры | Бургеры</title>
                <meta name="title" content="Жирные бургеры" />
            </Head>
            <div>
                <h1>Наши бургеры</h1>
                {burgers.map((burger) => (
                    <Link key={burger.id} href={`/burgers/${burger.id}`} className={cls.burgerCard}>
                        <div className={cls.imageBurger}>
                            <Image
                                src={`${burger.image}`}
                                alt={`${burger.name}`}
                                width={150}
                                height={100}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                }}
                            />
                        </div>
                        <div>
                            <h3>{burger.name}</h3>
                            <p>{burger.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Burgers;
