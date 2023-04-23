import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import {store, mygames} from './games'
import GameShopPage from './pages/GameShopPage';
import MyGamesPage from './pages/MyGamesPage';
import MyFavPage from './pages/MyFavPage';
import './games.css';
import GamePage from './pages/GamePage'; 


function App() {
  console.log(mygames)
  console.log(store)

  const myfav =  mygames.filter((game) => game.fav === true)
  console.log(myfav)

  return (
    <Routes >
        <Route element={<Layout/>}>
          <Route index element={<Dashboard store={store} mygames={mygames} myfav={myfav}/>} />
          <Route path='/gameshop' element={<GameShopPage store={store} />}/>
          <Route path='/mygames' element={<MyGamesPage mygames={mygames} />}/>
          <Route path='/favourites' element={<MyFavPage myfav={myfav}/>}/>
          { /*Routinga /game/:link inspirert fra https://github.com/toremake/UIN23_sanity_sandbox/blob/main/frontend/src/App.js */}
          <Route path="/game">
                <Route path=':link' element={<GamePage games={mygames} />}/>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
