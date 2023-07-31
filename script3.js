const readline = require('readline');

// Function to print words that start with or end with the specific letter
function printWordsWithSpecificLetter(arr, letter) {
  const words = arr.join(' ').split(/\s+/);

  console.log(`Words that start with or end with the letter '${letter}':`);

  let found = false;

  for (const word of words) {
    const firstLetter = word[0].toLowerCase();
    const lastLetter = word[word.length - 1].toLowerCase();

    if (
      (firstLetter === letter.toLowerCase() && lastLetter !== letter.toLowerCase()) ||
      (firstLetter !== letter.toLowerCase() && lastLetter === letter.toLowerCase())
    ) {
      console.log(word);
      found = true;
    }
  }

  if (!found) {
    console.log(`No word found that starts with or ends with the letter '${letter}'.`);
  }
}

// Function to take user input for the specific letter
function getInputLetter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a letter: ', (letter) => {
    // Close the readline interface
    rl.close();

    // Given array of strings
    const inputArray = [
      `A thing of beauty is a joy forever, 
      Its loveliness increases, it will never 
      Pass into nothingness; But still keep 
      A bower quiet for us, and a sleep 
      Full of sweet Dreams, health, and quiet breathing. 
      Therefore, on every morrow, are we wreathing? 
      A flowery band to bind Us to the earth, 
      Spite of despondence, of the inhuman dearth 
      Of noble natures, of gloomy days, 
      Of all the Unhealthy and over-darkened ways 
      Made for our searching: yes, in spite of all, 
      Some shape of beauty moves away the pall 
      From our dark spirits. Such the sun, the moon, 
      Trees old, and Young, sprout a shady boon 
      For simple sheep; and such are daffodils 
      With the green world they live in; and clear rivers 
      That for themselves, a cooling covert makes 
      'Gainst the hot season; the mid-forest brake, 
      Rich with a Sprinkling of fair musk-rose blooms: 
      And such Too is the Grandeur of the dooms 
      We have imagined for the mighty dead; 
      All lovely tales that we have heard or read: 
      An endless Fountain of immortal drink, 
      Pouring unto us from the heaven's brink.`
      // Add the rest of the array here...
    ];

    // Call the function to print words with the specific letter
    printWordsWithSpecificLetter(inputArray, letter);
  });
}

// Call the function to get user input for the specific letter
getInputLetter();
