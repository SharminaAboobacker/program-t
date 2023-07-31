function countRepeatingLetters(inputString) {
    const letterCount = {};
    const inputStringLower = inputString.toLowerCase();
  
    // Iterate through the string and count the occurrences of each letter
    for (const char of inputStringLower) {
      if (char.match(/[a-z]/)) {
        letterCount[char] = (letterCount[char] || 0) + 1;
      }
    }
  
    // Print the repeating letters and their counts
    console.log("Repeating letters and their counts:");
    for (const letter in letterCount) {
      if (letterCount[letter] > 1) {
        console.log(`${letter}: ${letterCount[letter]}`);
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
  
  countRepeatingLetters(inputString);
  