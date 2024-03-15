import backgroundImage from '../assets/cover.jpg';
const Banner = () => {
        return (
                <div className='w-4/5 mx-auto mt-8'>
                        <div className="hero h-[600px] rounded-2xl" style={{ backgroundImage: `url(${backgroundImage})` }}>
                                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                                <div className="hero-content text-center text-neutral-content">
                                        <div className="max-w-5xl">
                                                <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                                                <p className="mb-5">Embark on a personalized culinary journey with expert chefs, mastering knife skills, global flavors, creative plating, and wine pairing.</p>
                                                <div className='flex gap-4 justify-center'>
                                                        <button className="btn bg-green-500 rounded-3xl border-none px-8">Explore Now</button>
                                                        <button className="btn bg-transparent rounded-3xl px-8 text-white">Our Feedback</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Banner;