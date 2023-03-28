import TwitterLogo from './../../assets/img/icons/social/twitter.png'
import LinkedinLogo from './../../assets/img/icons/social/linkedin.png'
import FacebookLogo from './../../assets/img/icons/social/facebook.png'
import InstagramLogo from './../../assets/img/icons/social/instagram.png'
import CodepenLogo from './../../assets/img/icons/social/codepen.png'

const Footer = () => {
    return (
        <footer>
            <div className="social-accounts-container">
                <section className="social-accounts">
                    <a href="#">
                        <img className='footer-social-logo' src={TwitterLogo} alt="Twitter Logo" loading='lazy' />
                    </a>
                    <a href="#">
                        <img className='footer-social-logo' src={InstagramLogo} alt="Instagram Logo" loading='lazy' />
                    </a>
                    <a href="#">
                        <img className='footer-social-logo' src={FacebookLogo} alt="Facebook Logo" loading='lazy' />
                    </a>
                    <a href="#">
                        <img className='footer-social-logo' src={LinkedinLogo} alt="LinkedIn Logo" loading='lazy' />
                    </a>
                </section>
            </div>
            <p className="footer-text">&copy;Copyright 2023, Foster Z</p>
        </footer>
    )
}

export default Footer;