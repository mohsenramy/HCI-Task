import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import HomePage from '../pages/HomePage'
import { usersAPI } from '../api/usersAPI'


test("Renders the main page", () => {
  render(<HomePage />)
})

it('should retrieve users on load', async () => {
  const users = [{ userName: 'User 1', id: 1 }, { userName: 'User 2', id: 2 }];
  const retrieveUsersMock = jest.spyOn(usersAPI, 'retrieveUsers').mockResolvedValue(users);
  render(<HomePage />);
  expect(retrieveUsersMock).toHaveBeenCalled();
});

// Other Test
// # Different rendering options
// # Different user actions and their restrictions
// # Data retrieving & binding
// # Error handling