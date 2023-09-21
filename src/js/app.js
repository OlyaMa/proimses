import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log(saving);
    // saving объект класса GameSaving
  })
  .catch((error) => {
    console.log(error);
  });
