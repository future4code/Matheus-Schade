import React from 'react';
import GlobalStyle from './globalStyles.js';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno"
import fotomat from "./img/fotomat.png"
import styled from "styled-components"
import seta from './img/seta.png'
import mail from './img/mail.png'
import locale from './img/locale.png'
import exp1 from './img/exp1.png'
import exp2 from './img/exp2.png'
import skills from "../src/img/skills.png"

const AppGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
  h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`
const H2Seletor = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <AppGeral>
      <GlobalStyle/>
      <PageSectionContainer>
        <H2Seletor>Dados pessoais</H2Seletor>
        <CardGrande
          imagem={fotomat}
          nome="Matheus Schade"
          descricao="Oi, eu sou o Matheus, e sou contador formado pela Universidade Estadual de Ponta Grossa (UEPG). Trabalhei na área contábil por quase 5 anos, e agora estou em transição de carreira. Atualmente faço o curso de Desenvolvimento Web Full Stack na Labenu."
        />
        <br />

        <ImagemButton
          imagem={seta}
          texto="Ver mais"
        />
      </PageSectionContainer>
      <br />

      <div>
        <CardPequeno
          imagem={mail}
          descricao="E-mail: matheus@hotmail.com" />
        <CardPequeno
          imagem={locale}
          descricao="Endereço: Rua do Matheus, nº 173" />
      </div>
      <br />

      <PageSectionContainer>
        <H2Seletor>Experiências profissionais</H2Seletor>
        <CardGrande
          imagem={exp1}
          nome="GFA Fogaça Contabilidade"
          descricao="Trabalhei por 2 anos e 9 meses como analista contábil, começando como estagiário, realizando fechamento de demonstrativos contábeis como Balanço Patrimonial e DRE, entregas de declarações contábeis ao fisco, como Sped ECD, ECF, DEFIS e outras."
        />

        <CardGrande
          imagem={exp2}
          nome="RA Contabilidade"
          descricao="Trabalhei por 1 ano e 5 meses como estagiário no departamento contábil, realizando lançamentos contábeis, conciliação bancária, conferência e atendimento ao cliente, bem como demais atribuições da função."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <H2Seletor>Skills</H2Seletor>
        <CardGrande
          imagem={skills}
          nome="Soft e Hard Skills"
          descricao="Soft Skills: Comunicação, relações interpessoais, paciência, dinamismo. Hard Skills: Contabilidade, imposto de renda, demonstrativos contábeis, inglês intermediário, html, javascript, github"
          
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <H2Seletor>Minhas redes sociais</H2Seletor>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>

      
    </AppGeral>
  );
}

export default App;
