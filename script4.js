function printMiddleLetterOfWords(inputString) {
    const words = inputString.split(/\s+/); // Split the input string into an array of words
  
    console.log("Middle letter of words with odd length:");
  
    for (const word of words) {
      const wordLength = word.length;
  
      // Check if the word length is odd
      if (wordLength % 2 !== 0) {
        const middleIndex = Math.floor(wordLength / 2);
        const middleLetter = word[middleIndex];
        console.log(middleLetter);
      }
    }
  }
  
  // Given string
  const inputString = `A thing of beauty is a joy forever, 
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
  Pouring unto us from the heaven's brink.`;
  
  // Call the function to print the middle letter of words with odd length
  printMiddleLetterOfWords(inputString);
  