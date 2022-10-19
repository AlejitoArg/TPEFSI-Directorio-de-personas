import React, { useContext } from "react"

export const initialState = {
    productoSeleccionado: {}
}


export const ActionTypes = {
    SetProductoSeleccionado: "SET_PRODUCTO_SELECCIONADO",
}

export const reducer = (state = {}, action) => {
    switch (action.type){
        case ActionTypes.SetProductoSeleccionado:
        return {
            ...state,
            productoSeleccionado: action.value,
        };
    }
}

export const initialContext = {
    contextState:initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);

export function ContextProvider({ children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);

    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState}}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)