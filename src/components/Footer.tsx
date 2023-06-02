import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-section mb-80 xl:container mx-auto px-4 xl:px-0">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <Image
            className="logo-img"
            alt="logo"
            width={88}
            height={88}
            src="/images/common/logo.png"
          />
        </div>
        <div className="lg:w-1/4">
            <ul>
                <li><a href="/cookie">Cookie Policy</a></li>
                <li><a href="/terms">Terms and Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="lg:w-1/4">
        <ul className="contact">
                <li><div className="img"><Image alt="phone" width={40} height={40} src={'/images/common/phone.png'}/></div><a href="tel:+44 755 700 0000">+44 755 700 0000</a></li>
                <li><div className="img"><Image alt="phone" width={40} height={40} src={'/images/common/email.png'}/></div><a href="mailto:a.shittu@appbuildr.tech">a.shittu@appbuildr.tech</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
