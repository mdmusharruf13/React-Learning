export const link = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=4650&catalog_qa=undefined&submitAction=ENTER
`;
const mediaLink = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/`;
const id = `b43136fbd9b8a51aa6db4e6c0056eef6`;

const MenuList = () => {
    return (
        <>
            <h2>menuList</h2>
        </>
    )
}

const Menu = () => {

    async function getData() {
        const data = await fetch(link);
        const jsonData = await data.json();
        console.log(jsonData);
    }

    function handleClick() {
        getData();    
    }
    
    return (
        <>
            <button onClick={handleClick}>clicke me </button>
        </>
    )
}

export default Menu;