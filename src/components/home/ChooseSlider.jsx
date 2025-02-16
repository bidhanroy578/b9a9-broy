import { useEffect, useState } from "react";

const Chooseslider = () => {
    const [choose, setChoose] = useState([])
    useEffect(() => {
        fetch('/choose.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center my-10'>Experience Luxury Like Never Before</h2>
            <div className="flex justify-center">
                <div className="py-3 carousel carousel-vertical rounded-box w-[80vw] h-[70vh] shadow-2xl">
                    {
                        choose.map(i =>
                            <div className="my-2 flex flex-col md:flex-row gap-2 carousel-item h-full w-full" key={i.id}>
                                <div className="h-full flex-1 border border-red-400 text-center content-center w-full bg-slate-200 rounded-2xl overflow-hidden">
                                    <div style={{ backgroundImage: `url(${i.image})` }} className="bg-cover bg-center h-full w-full"></div>
                                </div>
                                <div className="text-center flex-1 content-center px-5">
                                    <h3 className="font-bold text-3xl mb-4">{i.title}</h3>
                                    <p className="text-lg">{i.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Chooseslider;