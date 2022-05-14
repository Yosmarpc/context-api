import axios from "axios";
import { useReducer } from "react";
import { types } from "../Type";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

const UserState = (props) => {
    const urlBase = "https://reqres.in/api/";

    const InitState = {
        dataUser: [],
        dataDetalleUser: []
    };

    const [state, dispatch] = useReducer(UserReducer, InitState);

    const getListarUsuarios = async () => {
        try {
            const response = await axios(`${urlBase}users?page=2`, {
                headers: { "Access-control-Allow-origin": true, }
            })

            dispatch({ type: types.LISTAR_USUARIO, payload: response.data.data })

            console.log(response);


        } catch (error) {

        }
    };

    const getDetalleUser = async (id) => {
        dispatch({ type: types.DETALLAR_USUARIO, payload: [] });
        try {
            const response = await axios(`${urlBase}users/${id}`, {
                headers: { "Access-control-Allow-origin": true }

            })
            dispatch({ type: types.DETALLAR_USUARIO, payload: response.data.data });

            console.log(response);

        } catch (error) {

        }
    }
    return (
        <UserContext.Provider
            value={{
                dataUser: state.dataUser,
                dataDetalleUser: state.dataDetalleUser,
                getListarUsuarios,
                getDetalleUser
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
