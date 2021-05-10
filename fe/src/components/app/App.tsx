import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

import Toolbar from '../main-sections/Toolbar';
import QuickBar from '../main-sections/QuickBar';
import ProgressBoard from '../main-sections/ProgressBoard';
import MissionBoard from '../main-sections/MissionBoard';

import styles from './styles.module.scss';

const App = () => {
  return (
    <StylesProvider injectFirst>
      <div className={styles.app}>
        <Toolbar />

        <QuickBar />

        <ProgressBoard />

        <MissionBoard />
      </div>
    </StylesProvider>
  );
};

export default App;
