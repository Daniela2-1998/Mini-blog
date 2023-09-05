import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Inicio';
import Blogs from './componentes/Blogs';
import Post from './componentes/Post';
import AcercaDe from './componentes/Acerca-de';
import styled from 'styled-components';
import Error404 from './componentes/Error404';
import {ContextoTema} from './contextos/ContextoTema';

const App = () => {

  const {tema} = useContext(ContextoTema);

  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main tema={tema}>
          <Routes>
            {/* ERROR 404*/}
            <Route path='*' element={<Error404 />}/>
            {/*código JSX o componentes*/}
            <Route path='/' element={
              <Inicio />
            }
            />
            <Route path='/blog' element={
              <Blogs />
            }
            />
            {/* RUTA DINÁMICA / : indican que es parámetros*/}
            <Route path='/post/:id' element={
              <Post />
            }
            />
            <Route path='/acerca-de' element={
              <AcercaDe />
            }
            />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
   );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 98%;
  max-width: 700px;
`;

const Main = styled.main`
  
  font-size: ${props => props.tema ? props.tema.fuente + 'px' : '16px'}; 
  text-align: ${props => props.tema ? props.tema.alineado : 'right'};

  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;