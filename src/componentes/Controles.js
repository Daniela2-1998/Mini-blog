import React, {useContext} from 'react';
import styled from 'styled-components';
import {ContextoTema} from '../contextos/ContextoTema';

const Controles = () => {

    const {aumentarFuente} = useContext(ContextoTema);
    const {disminuirFuente} = useContext(ContextoTema);
    const {alinearIzquierda} = useContext(ContextoTema);
    const {alinearCentro} = useContext(ContextoTema);
    const {alinearDerecha} = useContext(ContextoTema);

    return ( 
        <ContenedorControles>
            <div>
                <Boton onClick={aumentarFuente}>Aumentar fuente</Boton>
                <Boton onClick={disminuirFuente}>Disminuir fuente</Boton>
            </div>
            <div>
                <Boton onClick={alinearIzquierda}>Izquierda</Boton>
                <Boton onClick={alinearCentro}>Centro</Boton>
                <Boton onClick={alinearDerecha}>Derecha</Boton>
            </div>
        </ContenedorControles>
     );
}
 
export default Controles;


const ContenedorControles = styled.div`
    margin-top: 20px;
`;
 
const Boton = styled.button`
    background: #165168;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 12px;
    padding: 7px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
 
    &:hover {
        background: #191668;
    }
`;