import * as React from "react";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-[#FFE21B] transition-colors"
    >
      {children}
    </a>
  );
};

interface SocialLinkProps {
  href: string;
  iconSrc: string;
  alt: string;
  bgColor: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, iconSrc, alt, bgColor }) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-center w-[50px] h-[50px] rounded-[25px] hover:opacity-80 transition-opacity ${bgColor}`}
    >
      <img
        src={iconSrc}
        alt={alt}
        className="aspect-[1] object-contain w-[25px] self-stretch my-auto"
      />
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(10,9,25,1)] self-center relative z-0 flex w-full flex-col overflow-hidden items-stretch justify-center pt-10 pb-[110px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="z-0 flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <div className="self-stretch min-w-60 w-[323px] my-auto">
          <img
            src="Vontech-Logo 1.png"
            alt="VonTech Group Logo"
            className="aspect-[3.66] object-contain w-[165px] max-w-full"
          />
          <div className="flex w-full gap-5 mt-[17px]">
            <SocialLink
              href="#"
              iconSrc="facebook-icon.png"
              alt="Facebook"
              bgColor="bg-[rgba(59,89,152,1)]"
            />
            <SocialLink
              href="#"
              iconSrc="x-logo.png"
              alt="Twitter"
              bgColor="bg-black"
            />
            <SocialLink
              href="#"
              iconSrc="linkedin-icon.png"
              alt="LinkedIn"
              bgColor="bg-[rgba(0,119,181,1)]"
            />
            <SocialLink
              href="#"
              iconSrc="instagram-logo.png"
              alt="Instagram"
              bgColor="bg-neutral-800"
            />
          </div>
          <p className="text-white text-base font-normal leading-6 mt-[17px]">
            VonTech Group is a cloud consulting company
            <br />
            dedicated to helping businesses achieve their
            <br />
            cloud goals with innovative solutions.
          </p>
        </div>
        <nav className="self-stretch flex min-w-60 min-h-[186px] items-stretch gap-[40px_60px] text-base text-white font-normal flex-wrap my-auto max-md:max-w-full">
          <div className="w-[98px]">
            <h3 className="text-white text-xl font-medium">Company</h3>
            <div className="flex flex-col gap-7 mt-7">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Services</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </div>
          </div>
          <div className="whitespace-nowrap w-[89px]">
            <h3 className="text-white text-xl font-medium">Resources</h3>
            <div className="flex flex-col gap-7 mt-7">
              <FooterLink href="#">Webinars</FooterLink>
              <FooterLink href="#">Career</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </div>
          </div>
          <div className="w-[110px]">
            <h3 className="text-white text-xl font-medium">Support</h3>
            <div className="flex flex-col gap-7 mt-7">
              <FooterLink href="#">Partners</FooterLink>
              <FooterLink href="#">Support portals</FooterLink>
              <FooterLink href="#">Contact us</FooterLink>
            </div>
          </div>
          <div className="w-[153px]">
            <h3 className="text-white text-xl font-medium">Policy</h3>
            <div className="flex flex-col gap-7 mt-7">
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Cookies Policy</FooterLink>
              <FooterLink href="#">Terms and Conditions</FooterLink>
            </div>
          </div>
        </nav>
      </div>
      <div className="absolute z-0 flex w-full items-center text-sm text-white font-medium text-center leading-[1.4] justify-center p-5 border-[rgba(25,25,25,1)] border-t left-0 bottom-0 max-md:max-w-full">
        <div className="text-white text-center max-md:max-w-full">
          Copyright © 2025 VonTech Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
