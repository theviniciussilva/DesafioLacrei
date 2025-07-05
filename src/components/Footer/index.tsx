import Image from "next/image";
import { FooterContainer, FooterCopy, UlLink } from "./style";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <Image
            width={169}
            height={48}
            alt="logo lacrei"
            src="footer-logo.svg"
          />
        </div>
        <nav>
          <UlLink>
            <h2>Lacrei Sáude</h2>
            <li>
              <a href="/" title="Lacrei Saúde">
                Quem somos
              </a>
            </li>
            <li>
              <a href="/" title="Nosso Propósito">
                Nosso Propósito
              </a>
            </li>
            <li>
              <a href="/" title="Missão, Visão e Valor">
                Missão, Visão e Valor
              </a>
            </li>
            <li>
              <a href="/" title="Acessibilidade">
                Acessibilidade
              </a>
            </li>
          </UlLink>
          <UlLink>
            <h2>Saúde</h2>
            <li>
              <a href="/" title="Buscar atendimento">
                Buscar atendimento
              </a>
            </li>
            <li>
              <a href="/" title="Oferecer atendimento ">
                Oferecer atendimento
              </a>
            </li>
          </UlLink>
          <UlLink>
            <h2>Segurança e Privacidade</h2>
            <li>
              <a href="/" title="Política de Privacidaderei Saúde">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/" title=" Termos de Uso">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="/" title=" Direitos de Titular">
                Direitos de Titular
              </a>
            </li>
          </UlLink>
        </nav>
      </FooterContainer>
      <FooterCopy>
        <p>
          A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de
          emergência procure o hospital mais próximo.
        </p>
        <p>
          Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site
          www.cvv.org.br
        </p>
        <p className="copy">
          Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ:
          51.265.351/0001-65
        </p>
      </FooterCopy>
    </>
  );
};

export default Footer;
