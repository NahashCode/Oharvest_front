import './ContactInfo.scss';

const ContactInfo = () => {
    return (
        <div className="contact__info">
            <p>
                <i className="fa-solid fa-location-dot"></i> 22, rue de la moisson 54000 MUIZON
            </p>
            <p>
                <i class="fa-solid fa-envelope"></i> cueillette-oharvest@mail.com
            </p>
            <p>
                <i class="fa-solid fa-phone"></i> 00 00 00 00 00
            </p>
        </div>
    );
}

export default ContactInfo;