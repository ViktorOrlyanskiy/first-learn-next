import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Head>
                <title>Жирные бургеры | 404</title>
                <meta name="title" content="Жирные бургеры" />
            </Head>
            <div className="not-found">
                <h1>Ой...</h1>
                <h2>Такой страницы здесь нет!</h2>
                <p>
                    Перехожу на <Link href="/">Главную страницу</Link> через 3 секунды...
                </p>
            </div>
        </>
    );
};

export default NotFoundPage;
