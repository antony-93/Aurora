import './global.css';
import Root from '@shared/infra/Root';
import Router from '@routes/Router';

export default function App() {
  return (
    <Root>
      <Router />
    </Root>
  );
}
