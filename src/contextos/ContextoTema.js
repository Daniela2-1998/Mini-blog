import React, { useState } from 'react';

// creamos contexto = estado global.
const ContextoTema = React.createContext();

// componente proveedor del estado
const ProveedorTema = ({children}) => {

    const [tema, cambiarTema] = useState(
        {
            alineado: 'left',
            fuente: 20
        }
    );
    
    const aumentarFuente = () => {
        cambiarTema({...tema,fuente: tema.fuente + 1});
    }

    const disminuirFuente = () => {
        cambiarTema({...tema,fuente: tema.fuente - 1});
    }

    const alinearIzquierda = () => {
        cambiarTema({...tema, alineado: 'left'});
    }

    const alinearCentro = () => {
        cambiarTema({...tema, alineado: 'center'});
    }

    const alinearDerecha = () => {
        cambiarTema({...tema, alineado: 'right'});
    }

    return (
        <ContextoTema.Provider value={{tema, aumentarFuente, disminuirFuente, alinearIzquierda, alinearCentro, alinearDerecha}}>
            {children}
        </ContextoTema.Provider>
    );
}
 
export {ContextoTema, ProveedorTema};