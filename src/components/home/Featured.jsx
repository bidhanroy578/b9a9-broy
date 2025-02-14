import { useEffect, useState } from "react";
import Card from "./Card";
import { Helmet } from "react-helmet";

const Featured = () => {
    const [list, setList] = useState([])
useEffect(()=>{
fetch('/featured.json')
.then(res => res.json())
.then(data => setList(data))
} , [])
    return (
        <div id="featured">
            <h2 className="text-3xl font-semibold leading-20 text-center">Own a Piece of Paradise – Top Featured Listings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {
                    list.map((i,id)=><Card key={id} list={i} ></Card>)
                }
            </div>
            <Helmet>
                <title>Featured list</title>
            </Helmet>
        </div>
    );
};

export default Featured;