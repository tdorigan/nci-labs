function generateLyrics(){

  /*
    https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer

		99 bottles of beer on the wall, 99 bottles of beer
		Take one down and pass it around, 98 bottles of beer on the wall

		98 bottles of beer on the wall, 98 bottles of beer
		Take one down and pass it around, 97 bottles of beer on the wall

		97 bottles of beer on the wall, 97 bottles of beer
		Take one down and pass it around, 96 bottles of beer on the wall
		.
		.
		.
		2 bottles of beer on the wall, 2 bottles of beer
		Take one down and pass it around, 1 bottle of beer on the wall

		1 bottle of beer on the wall, 1 bottle of beer
		Take one down and pass it around, no more bottles of beer on the wall

		No more bottles of beer on the wall, no more bottles of beer
		Go to the store and buy some more, 99 bottles of beer on the wall
	*/
  
  const container = document.getElementById("container");
  container.innerHTML = "";

  for (i = 99; i >= 0; i--) {

    if (i > 2) {
      container.innerHTML += "<p>" + i + " bottles of beer on the wall, " + i + " bottles of beer<br>Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall</p>";
    }
    else if (i == 2) {
      container.innerHTML += "<p>" + i + " bottles of beer on the wall, " + i + " bottles of beer<br>Take one down and pass it around, " + (i - 1) + " bottle of beer on the wall</p>";
    }
    else if (i == 1) {
      container.innerHTML += "<p>" + i + " bottle of beer on the wall, " + i + " bottle of beer<br>Take one down and pass it around, no more bottles of beer on the wall</p>";
    } 
    else if (i == 0) {
      container.innerHTML += "<p>No more bottles of beer on the wall, no more bottles of beer<br>Go to the store and buy some more, 99 bottles of beer on the wall</p>";
    }

  }

}