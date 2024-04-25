import React from 'react';
import styles from './App.module.scss'
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Header from './Header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <Main className={styles.main}/>
    </div>
  );
}

export default App;
