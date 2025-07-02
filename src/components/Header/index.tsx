import Image from "next/image";
import { Container } from "./style";
import Link from "next/link";
import Button from "../Button";
import { useState } from "react";

const Header = () => {
  const [tokenVisible, setTokenVisible] = useState(false);

  return (
    <>
      <Container>
        <div className="headerWrapper">
          <h1>
            <Image
              alt="Logo Lacrei Saúde"
              src="logo-lacrei.svg"
              width={200}
              height={24}
            ></Image>
          </h1>
          <nav>
            <ul className="buttonWrapper">
              <li>
                <Link href="/">
                  <Button type="button" title="Quem somos" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Button type="button" title="Ajuda" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <Button
                    onClick={() => {
                      setTokenVisible(!tokenVisible);
                    }}
                    type="button"
                    title="Entrar"
                  >
                    <Image
                      alt="Logo Lacrei Saúde"
                      src="arrow_down.svg"
                      width={24}
                      height={16}
                    />
                    {tokenVisible}
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {tokenVisible && (
          <div className="tokenWrapper">
            <div className="token">
              <div className="label">
                <div className="label_container">
                  <Image
                    height={24}
                    width={24}
                    alt="Perfil profissional"
                    src="person.svg"
                  />
                  Paciente
                </div>
                <div className="divider" />
                <div className="label_container">
                  <Image
                    height={24}
                    width={24}
                    alt="Perfil profissional"
                    src="medical.svg"
                  />
                  Profissional
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Header;
