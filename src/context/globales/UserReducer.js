import { types } from "../Type";

const UserReducer = (state, action) => {

    const { payload, type } = action;

    switch (type) {

        case types.LISTAR_USUARIO:
            return { ...state, dataUser: payload };

        case types.DETALLAR_USUARIO: return { ...state, dataDetalleUser: payload };

        default:
            return state
    }

}

export default UserReducer;