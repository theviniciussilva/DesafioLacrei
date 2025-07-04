import Image from "next/image";
import { HeroButton, HeroTitle, HeroContainer, Section } from "./style";
import Button from "../Button";

const Hero = () => {
  return (
    <Section>
      <HeroContainer>
        <Image
          alt="Dois homens deitados juntos em um sofá, um deles deitado no colo do outro, em um momento de afeto"
          src="/hero.webp"
          fill
          objectFit="cover"
          style={{ filter: "brightness(0.4) contrast(0.8)" }}
          quality={100}
        ></Image>
        <HeroTitle>
          <h1>Olá, você está na Lacrei Saúde!</h1>
          <p>
            Conectamos pessoas LGBTQIAPN+L G B T Q I A P N mais com
            profissionais de saúde qualificados, proporcionando experiências de
            cuidado seguras e inclusivas.
          </p>
        </HeroTitle>
        <HeroButton>
            <Button description="Sou Paciente" title="Botão para ir para aba de pacientes" type="button"/>
            <Button description="Sou Profissional" title="Botão para ir para aba de profissionais" type="button"/>
        </HeroButton>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
