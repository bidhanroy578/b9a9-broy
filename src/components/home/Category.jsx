import { Link } from "react-router";

const Category = () => {
    const categories = [
        {
            name: 'Penthouse ',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/penthouse'
        },
        {
            name: 'Beachfront Properties',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/beachfront'
        },
        {
            name: 'Private Islands',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/private-islands'
        },
        {
            name: 'Villas',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/villas'
        },
        {
            name: 'Resorts',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/resorts'
        },
        {
            name: 'Mansions ',
            image: 'https://i.ibb.co.com/0yy0R2rR/2200xxs.webp',
            link:'/category/mansions'
        }
    ]
    return (
        <div className="text-center ">
            <h2 className="text-3xl font-semibold leading-20">Browse properties by Category...</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-center text-white">
                {
                    categories.map((category, id) => {
                        return (
                            <div key={id} style={{ backgroundImage: `url(${category.image})` }} className="hover:scale-105 ease-in-out duration-300 bg-cover bg-center h-40 w-3xs rounded-lg cursor-pointer">
                                <Link to={category.link} className="h-full flex justify-center items-center bg-black/60 hover:bg-black/20 font-semibold text-xl">{category.name}</Link >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Category;