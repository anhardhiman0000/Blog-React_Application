import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Components Importing
import Header from './Components/Header'; // (./)->same Folder, (../)-> one folder outside
import Home from './Components/HomePage/Home';
import CreateNewBlog from './Components/PostPage/CreateNewBlog';
import DetailViewPost from './Components/PostPage/DetailViewPost';
import UpdateView from './Components/PostPage/UpdateView';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Box style={{ marginTop: 64 }}>    {/* <Box></Box> Replacement of <div></div> in material ui*/}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/detailsViewPost/:id' element={<DetailViewPost />} />
          <Route path='/createView' element={<CreateNewBlog />} />
          <Route path='/updateView/:id' element={<UpdateView />} />

        </Routes>
      </Box>

    </BrowserRouter>

  );
}
export default App;
