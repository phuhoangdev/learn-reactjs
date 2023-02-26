import videoHompage from '../../assets/video-homepage.mp4';
import { useTranslation, Trans } from 'react-i18next';

const HomePage = (props) => {
    const { t } = useTranslation();

    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source 
                    src={videoHompage} 
                    type="video/mp4" 
                />
            </video>
            <div className="homepage-content">
                <div className="title">
                    {t('homepage.title')}
                </div>
                <div className="desc">{t('homepage.desc')}</div>
                <div className="cta">
                    <button className="btn btn-dark btn-lg">
                        {t('homepage.button')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;