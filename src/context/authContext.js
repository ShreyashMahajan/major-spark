import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return { ...state, isUserLoggedIn: true, token: action.payload.encodedToken };
        case 'LOGOUT':
            return { ...state, isUserLoggedIn:false, token: null };  
        case 'SIGNUP':
            return {...state, isUserLoggedIn: true , token: action.payload.encodedToken } ;   
        default:
            return state;      
    }
}
const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [authState, authDispatch] = useReducer( authReducer, {isUserLoggedIn: false, token: null} );
    const navigate = useNavigate();
    const { isUserLoggedIn } = authState;
    const location = useLocation();
    let from = location.state?.from?.pathname || '/' ;
     
    
    const login = async ( {email, password} ) => {
        try {
            const { data } = await axios.post('/api/auth/login', { email, password});
            console.log('from context',data);
           
            localStorage.setItem('user',JSON.stringify(data));
            authDispatch( { type: 'LOGIN', payload: data});
            navigate(from, { replace: true });
    

        } catch (error) {
             console.log(error);
        }
    }

    const signUp = async ( user) => {
        try {
           const { data } = await axios.post('/api/auth/signup', user);
           console.log('from context: signup: ',data);
           localStorage.setItem('user', JSON.stringify(data));
           authDispatch( { type: 'SIGNUP' , payload: data});
           navigate(from, { replace: true });
        } catch (error) {
             console.log(error);
        }
    }

    const logOut = async () => {
        try {
            localStorage.removeItem('user');
            authDispatch( { type: 'LOGOUT'});
            navigate('/')
        } 
        catch (error) {
            console.log(error);
       }
    }

    useEffect( () => {
        const  data = JSON.parse(localStorage.getItem('user'));
        data && authDispatch( { type: "LOGIN", payload: data});
    }, []);

    return (
        <AuthContext.Provider value={{login,signUp, logOut, authState, isUserLoggedIn }}>
        {children}
    </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider }; 