export const saveKey = (key, value) => {
  if (Object.getPrototypeOf(value) === Object.prototype) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const getKey = key => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
};

export const deleteKey = key => localStorage.removeItem(key);
