import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';

export const SharedLayuot = () => {
  return (
    <>
      <main>
        <Container>
          <p>asdsad</p>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
