import Image from "next/image";
import { Container, Modal } from "./style";
import Button from "../Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

const Header = () => {
  const [tokenVisible, setTokenVisible] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: Url) => {
    router.push(path);
    setTokenVisible(false);
  };

  return (
    <>
      <Modal
        isVisible={tokenVisible}
        onClick={() => {
          setTokenVisible(false);
        }}
      />
      <Container>
        <div className="headerWrapper">
          <Link href="/">
            <Image
              alt="Logo Lacrei Saúde"
              src="logo-lacrei.svg"
              width={202}
              height={24}
            ></Image>
          </Link>
          <nav>
            <ul className="buttonWrapper">
              <li className="button_one">
                <Button
                  onClick={() => handleNavigation("/quem-somos")}
                  type="button"
                  title="Quem somos"
                  description="Quem somos"
                />
              </li>
              <li className="button_two">
                <Button type="button" description="Ajuda" title="Ajuda" />
              </li>
              <li className="button_three">
                <Button
                  onClick={() => {
                    setTokenVisible(!tokenVisible);
                  }}
                  type="button"
                  title="Entrar"
                  description="Entrar"
                >
                  <Image
                    alt="Icone de seta"
                    src="arrow_down.svg"
                    width={24}
                    height={16}
                  />
                  {tokenVisible}
                </Button>
              </li>
              <li className="button_mobile">
                <Button
                  onClick={() => {
                    setTokenVisible(!tokenVisible);
                  }}
                  title="entrar"
                  type="button"
                >
                  <Image
                    alt="Icone de Pessoa"
                    src="person.svg"
                    width={26}
                    height={26}
                  />
                  {tokenVisible}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
        {tokenVisible && (
          <div className="tokenWrapper">
            <div className="token">
              <div className="label">
                <button
                  type="button"
                  title="Entrar como Paciente"
                  className="label_container"
                >
                  <Image
                    height={24}
                    width={24}
                    alt="Imagem indicando Paciente"
                    src="person.svg"
                  />
                  Paciente
                </button>
                <div className="divider"></div>
                <button
                  type="button"
                  title="Entrar como Profissional"
                  className="label_container"
                >
                  <Image
                    height={24}
                    width={24}
                    alt="Imagem indicando Profissional"
                    src="medical.svg"
                  />
                  Profissional
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Header;
