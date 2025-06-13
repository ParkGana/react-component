import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import PageLayout from './components/layout/PageLayout';

const App = () => {
  return (
    <BrowserRouter>
      <PageLayout>
        <Router />
      </PageLayout>
    </BrowserRouter>
  );
};

export default App;
