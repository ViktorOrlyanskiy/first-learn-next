const { Footer } = require("./Footer");
const { Header } = require("./Header");

export const Layout = ({ children }) => {
    return (
        <div className="content">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
