
import './App.css';
import React, { useContext, useEffect } from 'react';
import UserContext from './context/globales/UserContext';
import logo from './logo.svg'
import { Card, CardContent, CardMedia } from '@mui/material';
function App() {


  const { dataUser } = useContext(UserContext); //
  const usercontext = useContext(UserContext);
  useEffect(() => {
    usercontext.getListarUsuarios()
  }, [])

  console.log('dataUser::::', dataUser)

  return (
    <div className="App">
      <header className="App-header">
        {dataUser && dataUser.map((data, index) => (
          <Card key={index + 1}>
            <CardMedia
              component="img"
              height="140"
              image={data.avatar}
              alt="green iguana" />
            <CardContent>
              <h1 className="fs-4">{data.first_name} {data.last_name}</h1>
            </CardContent>
          </Card>
        ))}

      </header>
    </div>
  );
}

export default App;
