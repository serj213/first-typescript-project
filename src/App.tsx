import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Cart, { CartVariant } from './Components/Cart';
import EventsExample from './Components/EventsExample';
import UserPage from './Components/UsersPage';
import TodosPage from './Components/TodosPage';
import UserItemDetail from './UserItemDetail';



const App = () => {

  return (
    <div>
      <EventsExample />
      <Cart click={(num) => console.log(num)} variable={CartVariant.primary} width='300px' height='400px' >
        <button>
          Нажать
        </button>
      </Cart>

      <BrowserRouter>
        <NavLink to={'/users'}>
          Страница пользователей
        </NavLink>
        <NavLink to={'/todos'}>
          Тудушки
        </NavLink>
        <Routes>
          <Route path={'/users'} element={<UserPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemDetail />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App;