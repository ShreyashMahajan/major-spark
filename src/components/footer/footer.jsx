import '../footer/footer.css';
import person from '../../assets/images/person.png'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="social-links">
                    <a href className="item--link"><img src={person} className="img--icon-social" alt="Twitter" /></a>
                    <a href className="item--link"><img src={person} className="img--icon-social" alt="Github" /></a>
                    <a href className="item--link"><img src={person} className="img--icon-social" alt="LinkedIn" /></a>
                </div>
                <div className="footer--text">
                    Designed by <span className="footer-credit">Shreyash Mahajan</span>
                </div>
            </footer>

        </>
    )
}