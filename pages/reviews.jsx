import Head from "next/head";

const ReviewsPage = ({ reviews }) => {
    return (
        <>
            <Head>
                <title>Жирные бургеры | Отзывы</title>
                <meta name="title" content="Жирные бургеры" />
            </Head>
            <div>
                <h1>Отзывы клиентов</h1>
                <div className="reviews">
                    {reviews.length &&
                        reviews.map((review) => (
                            <div key={review.id} className="review">{`${review.id} ${review.body.slice(
                                0,
                                90
                            )}...`}</div>
                        ))}
                </div>
            </div>
        </>
    );
};

export async function getServerSideProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, 20),
        },
    };
}

export default ReviewsPage;
