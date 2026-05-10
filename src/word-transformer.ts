const reverseWord = (word: string) => word.split('').reverse().join('');

const capitalizeWord = (word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const repeatWord = (word: string, times: number) => word.repeat(times);

// catered for swedish - feel free to change 😊
const countVowels = (word: string) => (word.match(/[aeiouyåäö]/gi) || []).length;

const transformWord = (operation: string, word: string, param: number) => {
  switch (operation) {
    case 'reverse':
      return reverseWord(word);
    case 'capitalize':
      return capitalizeWord(word);
    case 'repeat':
      return repeatWord(word, param);
    case 'countVowels':
      return countVowels(word);
    default:
      return "Invalid operation";
  }
};

const runTransformation = () => {
  const word = (document.getElementById('word') as HTMLInputElement).value;
  const operation = (document.getElementById('operation') as HTMLSelectElement).value;
  const param = parseInt((document.getElementById('param') as HTMLInputElement).value);
  const result = transformWord(operation, word, param);
  const resultContainer = document.getElementById('result') as HTMLElement;
  resultContainer.textContent = `Result: ${result}`;
  resultContainer.classList.toggle('active', result !== '');
};

// Show/hide param input based on selected operation
(document.getElementById('operation') as HTMLSelectElement).addEventListener('change', function () {
  const paramContainer = document.getElementById('paramContainer') as HTMLElement;
  paramContainer.classList.toggle('active', this.value === 'repeat');
});

// Event listener for transform button
(document.getElementById('transformButton') as HTMLButtonElement).addEventListener('click', runTransformation);
