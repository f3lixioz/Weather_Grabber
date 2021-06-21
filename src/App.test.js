import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const setup = () => {
  const app = render(<App />)

  const appName = app.getByText("Weather Grabber", { exact: false });
  const homeLink = app.getByText("Home", { exact: true });
  const appLink = app.getByText("App", { exact: true });

  return {
    appName,
    homeLink,
    appLink
  }
}

describe('Weather grabber web-application is being rendered correctly', () => {

  test('Home page is rendered properly', async () => {
    const { homeLink, appLink, appName } = setup();
    expect(appName).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(appLink).toBeInTheDocument();
  })

  test('Clicking the "App" navlink brings the user to the app page', async () => {
    const { appLink } = setup();
    await userEvent.click(appLink);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Zip Code')).toBeInTheDocument();
  })

})
