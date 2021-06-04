import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImgPerfil from './components/CardGrande/img/ImgPerfil.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import EmailIcon from '@material-ui/icons/Email';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import WorkIcon from '@material-ui/icons/Work';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

`;

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;


function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <PageSectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = { ImgPerfil }
          nome="Jaqueline Lourenço" 
          descricao="Oi, sou a Jaqueline. Sou estudante da Labenu. Amo esta em casa, sou apaixonada em tecnologia e abrir e resolver tal problema em relação, e gosto de assistir filmes e series."
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </PageSectionContainer>

      <div>
        <CardPequeno iconEmail={<EmailIcon/>} email={"jaquelineloure50@gmail.com"}/>
        <CardPequeno iconEndereco={<PersonPinCircleIcon/>} endereco={"Rua antiga 10, nº94"}/>
      </div>

      <PageSectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante" 
        />
        
        <CardGrande 
          iconWork={<WorkIcon/>}
          nome="Calvin Klein" 
          descricao="Estoquista" 
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer>
  );
}

export default App;
