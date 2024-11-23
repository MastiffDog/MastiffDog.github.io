import React from 'react';
//import logo from './logo.svg';

import './App.css';

import { Logo} from '../shared/logo/logo.component';
import { ModalWindow } from 'src/shared/modal/modal.component';
import { Header } from 'src/shared/header/header.component';
import { Layout } from 'src/shared/layout/layout.component';
import { Card } from 'src/shared/card/card.component';
import { BusketCard } from 'src/shared/busket_card/busket_card.component';
import { Operation } from 'src/shared/operation/operation.component';
import { AddButton } from 'src/shared/add_button/add_button.component';


function App() {
  return (
    <div className="App">
      {/* <Logo/>*/}
    
      {/* <ModalWindow/> */}

      {/* <Header/> */}

      {/* <Layout/> */}

      {/* <Card
        name = "123"
        img_Url=''
        price={123}
        cut_desc='туфта'
      /> */}

      {/* <BusketCard
        name = "Некий товар" 
      /> */}

      {/* <Operation
        name = "123"
        img_Url=''
        price={123}
        cut_desc='туфта'
        category = 'товары для дома'
      /> */}

      <AddButton
        sum={1}
      />  

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Небольшая самопрезентация...</h3>
        <p className="Story">
          Меня зовут Гаврилов Петр Константинович. В ИТ я на текущий момент более 7 лет. Казалось бы, относительно
          большой срок, но сложилось так, что работая на #галере в начале карьеры, у меня периодически менялся стек
          технологий. По итогу, я на данный момент #специалист широкого профиля, который успел пощупать почти все
          фреймворки на JS, немного поковырять Python и Kotlin, но нет такой технологии, где я бы мог назвать себя
          экспертом. Основная цель прихода на курс - актуализация знаний по React, а также устранить пробелы в таких
          вещах как Saga и сокеты. Потому как у меня есть опыт написания реакт-приложений, но за 5 лет много поменялось,
          и я писал в основном на классах и без хуков. Помимо прочего, в ходе курса хотел бы все-таки закрыть вопрос с
          наиболее гармоничным стейт-менеджером, поскольку очень много реакт-приложений пишутся в связке с MobX, а не
          Redux.
        </p>
      </header> */}

        
    </div>
  );
}

export default App;
