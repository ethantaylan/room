import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer
} from 'react';
import { Dates } from '../components/les-salles/date-picker';
import { Member } from '../models/members';
import { Salle } from '../models/salles';

export interface GlobalContext {
  member: Member | null;
  cart: Salle | null;
  dateValues: Dates | null;
}

const initialState: GlobalContext = {
  member: null,
  cart: null,
  dateValues: null
};

const reducer = (state: GlobalContext, action: any): GlobalContext => {
  switch (action.type) {
    case 'CONNECTED':
      return {
        ...state,
        member: new Member(action.payload)
      };
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: action.payload
      };
    }
    case 'BOOKING_DATE': {
      return {
        ...state,
        dateValues: action.payload
      };
    }
    case 'REMOVE_CART':
      return {
        ...state,
        cart: null,
        dateValues: null
      };
    case 'DISCONNECTED':
      return {
        ...state,
        member: null
      };

    default:
      return state;
  }
};

export const StateContext = createContext<GlobalContext>(initialState);

export const DispatchContext = createContext<Dispatch<any> | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState
  });

  React.useEffect(() => {
    console.log(state); // Log the updated state here
  }, [state]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContext => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('Must be used within a ThemeProvider');
  }
  return context;
};

export const useGlobalDispatch = (): Dispatch<any> => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Must be used within a ThemeProvider');
  }
  return dispatch;
};
