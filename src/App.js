
import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from './context/globales/UserContext';
import logo from './logo.svg'
import { Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import MdlDetalleUsuario from './components/MdlDetalleUsuario';
function App() {


  const { dataUser } = useContext(UserContext); //
  const usercontext = useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    usercontext.getListarUsuarios()
  }, [])

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleVerDetalle = (id) => {
    handleOpenModal();
    usercontext.getDetalleUser(id);

  };

  return (
    <div className="App">
      <MdlDetalleUsuario openModal={openModal} handleOpenModal={handleOpenModal} />
      <header className="App-header">
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {dataUser && dataUser.map((data, index) => (

            <Grid item xs={12} sm={12} md={2} lg={2} xl={2} key={index + 1}>
              <Card >
                <CardMedia
                  component="img"
                  height="140"
                  image={data.avatar}
                  alt="green iguana" />
                <CardContent>
                  <h1 className="fs-4">{data.first_name} {data.last_name}</h1>
                  <Button variant="outlined" color="primary" onClick={() => handleVerDetalle(data.id)}>Ver Ficha</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        </Grid>


      </header>
    </div>
  );
}

export default App;
