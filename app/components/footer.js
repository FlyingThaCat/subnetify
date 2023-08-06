import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
            © 2023 Subnetify.
        </span>
        <span className="text-sm sm:text-center">
            Created With : 🤔
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
            <li>
                <a href="https://www.instagram.com/XII_TKJ_1_JOHN/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
        </ul>
        </div>
    </footer>
    );
};

export default Footer