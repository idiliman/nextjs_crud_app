const BASE_URL = 'https://nextjs-crud-app.vercel.app';

// Return all user object
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

// Return single user object
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

// Create new user
export const addUser = async (FormData) => {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(FormData),
    };

    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// Update user data
export const updateUser = async (userId, formData) => {
  try {
    const Options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// Delete user data
export const deleteUser = async (userId) => {
  try {
    const Options = {
      method: 'DELETE',
      // Optional parameters, can be removed
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};
