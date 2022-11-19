import headerPic from '../assets/1.png'

const Hero = () => {
    return (   <>
        <div className="hero">
            <div className="heroD">
                <h1>About Nexum</h1>
                <p>Brief description about the platform.</p>
                <button className="chooseBtn">Choose Your Plan</button>
            </div>
            <div>
                <img className="headPic" src={headerPic} alt="logo"/>
            </div>
        </div>
        
        </>
    );
}
 
export default Hero;

