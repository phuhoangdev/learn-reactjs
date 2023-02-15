import videoHompage from '../../assets/video-homepage.mp4'

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                    src={videoHompage} 
                    type="video/mp4" 
                />
            </video>
            <div className="homepage-content">
                <div className="title">There's a better way to ask</div>
                <div className="desc">You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</div>
                <div className="cta">
                    <button className="btn btn-dark btn-lg">
                        Get started - it's free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;