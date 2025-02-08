import { useEffect, useState } from "react";

const Chooseslider = () => {
    const [choose, setChoose] = useState([])
    useEffect(() => {
        fetch('/choose.json')
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-semibold text-center leading-20'>Experience Luxury Like Never Before</h2>
            <div className="flex justify-center">
                <div className=" carousel carousel-vertical rounded-box w-[80vw] h-[60vh] shadow-2xl">
                    {
                        choose.map(i =>
                            <div key={i.id} className="my-2 grid grid-cols-2 gap-4 carousel-item h-full w-full">
                                <div className="h-full text-center content-center w-full bg-slate-200 rounded-2xl overflow-hidden">
                                    <div style={{ backgroundImage: `url(${i.image})` }} className="bg-cover bg-center h-full w-full"></div>
                                </div>
                                <div className="text-center content-center p-5">
                                    <h3 className="font-bold text-3xl leading-20">{i.title}</h3>
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