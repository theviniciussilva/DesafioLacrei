import Image from "next/image";
import { FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <Image
          width={169}
          height={48}
          alt="logo lacrei"
          src="footer-logo.svg"
        />
      </footer>
    </FooterContainer>
  );
};

export default Footer;
