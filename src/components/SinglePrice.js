import Header from "./Header";
import Price from "./Price";
import Content from "./Content";

function SinglePrice() {
    return (
        <div className="w-[36rem] grid grid-cols-1 sm:grid-cols-2 shadow-xl rounded-xl ">
            <Header/>
            <Price/>
            <Content/>
        </div>
    );
}

export default SinglePrice;