import Image from "next/image";
import { CardAbout, Section } from "./style";
import Button from "../Button";

const Card = () => {
  return (
    <Section>
      <div className="grid">
        <div className="image_container">
          <Image
            width={662}
            height={461}
            alt="pessoas segurando bandeira LGBTQIAPN+"
            src="/people-holding-flag.avif"
          />
        </div>
        <CardAbout>
          <h2>O que é a Lacrei Saúde?</h2>
          <p>
            O nosso papel é construir a conexão entre as pessoas da
            comunidadeLGBTQIAPN+ L G B T Q I A P N mais que precisam de
            atendimento clínico com profissionais da saúde.
          </p>
          <p>Tudo isso com segurança, inclusão e representatividade.</p>
          <p>
            Surgimos da esperança de ter um atendimento clínico qualificado,
            seguro e empático para todas as pessoas.
          </p>
          <Button
            description="Conhecer"
            title="Botão que leva ao endereço para conhecer a lacrei"
            type="button"
          />
        </CardAbout>
      </div>
    </Section>
  );
};

export default Card;
