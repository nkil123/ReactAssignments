function LoadData (key) {
  try {
    let data = JSON.parse (localStorage.getItem (key));
    return data;
  } catch (err) {
    return undefined;
  }
}

function saveData (key, data) {
  localStorage.setItem (key, JSON.stringify (data));
}

export {LoadData, saveData};
