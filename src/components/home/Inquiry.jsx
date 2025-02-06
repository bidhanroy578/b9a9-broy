
const Inquiry = () => {
    return (
        <div>
            <h2 className="text-3xlz font-semibold leading-20 text-center">Let&apos;s Find Your Dream Property Together</h2>

            <div className="hero-content">
                <div className="card w-full bg-transparent max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="tel" placeholder="Phone" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Property interest : </span>
                            </label>
                            <select name="property" className="input input-bordered rounded-md ">
                                <option value="" disabled selected>Select Property Type</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="beachfront">Beachfront Villa</option>
                                <option value="mansion">Mansion</option>
                                <option value="private-island">Private Island</option>
                                <option value="luxury-condo">Luxury Condo</option>
                                <option value="castle">Castle</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Budget</span>
                            </label>
                            <input type="range" name="budget" id="" className="input input-md" min='5000' max='100000000'/>
                        </div>
                        <textarea className="textarea textarea-primary" placeholder="Your message"></textarea>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Submit Inquiry</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Inquiry;