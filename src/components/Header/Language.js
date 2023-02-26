import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

const Language = () => {
    const { t, i18n } = useTranslation();

    const handleChangeLanuage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <>
            <NavDropdown 
                className="language" 
                title={i18n.language === 'vi' ? "Việt Nam" : "English"}
                id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => handleChangeLanuage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleChangeLanuage('vi')}>Việt Nam</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}
export default Language;