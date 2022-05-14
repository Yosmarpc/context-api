import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from '@mui/material'
import React, { useContext } from 'react'
import UserContext from '../context/globales/UserContext'

const MdlDetalleUsuario = (props) => {
    const { openModal, handleOpenModal } = props
    const { dataDetalleUser } = useContext(UserContext);
    console.log('dataDetalleUser', dataDetalleUser)
    return (
        <div>
            <Dialog
                open={openModal}
                onClose={handleOpenModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    {dataDetalleUser && dataDetalleUser.length == 0 ?

                        <h4>Loading...</h4> :
                        <>
                            <img src={dataDetalleUser && dataDetalleUser.avatar} alt={dataDetalleUser && dataDetalleUser.first_name} />
                            <Typography variant="h4" component="h5">
                                {dataDetalleUser && dataDetalleUser.first_name} {dataDetalleUser && dataDetalleUser.last_name}
                            </Typography>
                            <Divider />
                            <Typography variant="h6" component="h5">
                                {dataDetalleUser && dataDetalleUser.email}
                            </Typography>
                        </>

                    }
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleOpenModal}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default MdlDetalleUsuario