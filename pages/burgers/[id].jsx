import Head from "next/head";
import Image from "next/image";
import cls from "../../styles/Burgers.module.css";

export const getStaticPaths = async () => {
    const response = await fetch("http://localhost:8000/items");
    const data = await response.json();

    const paths = data.map((burger) => ({ params: { id: burger.id } }));
    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const response = await fetch(`http://localhost:8000/items/${id}`);
    const data = await response.json();

    return { props: { burger: data } };
};

const Details = ({ burger }) => {
    return (
        <>
            <Head>
                <title>Жирные бургеры | {burger.name}</title>
                <meta name="title" content="Жирные бургеры" />
            </Head>
            <div className={cls.singleBurger}>
                <h1>{burger.name}</h1>
                <div className={cls.imageContainer}>
                    <Image
                        src={`${burger.image}`}
                        alt={`${burger.name}`}
                        width={100}
                        height={100}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </div>
                <div>
                    <p>{burger.desc}</p>
                </div>
            </div>
        </>
    );
};

export default Details;
