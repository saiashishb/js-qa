// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis.";

// Add a list of colors to this array
const colors = [
  "Grey",
  "White",
  "Red",
  "Green",
  "Yellow",
  "Crimson",
  "Pink",
  "Blue",
  "Brown",
  "Purple",
  "Magenta",
  "Gold",
  "Silver",
];

// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names = [
  {
    firstName: "John",
    lastName: "Doe",
  },
  {
    firstName: "Sanchez",
    lastName: "Main",
  },
  {
    firstName: "James",
    lastName: "Gun",
  },
  {
    firstName: "Ross",
    lastName: "Taylor",
  },
  {
    firstName: "Sai Ashish",
    lastName: "Boddupalli",
  },
  {
    firstName: "Mary",
    lastName: "Joseph",
  },
  {
    firstName: "Chaitanya",
    lastName: "Sharda",
  },
];

function btn1_100Clicked() {
  var numb = Math.floor(Math.random() * 100 + 1);
  document.getElementById("lbl1_100").innerText = numb;
}

function btnsrtendClicked() {
  var start = parseInt(document.getElementById("srtrand1").value);
  var end = parseInt(document.getElementById("endrand1").value);
  var randNum = Math.floor(Math.random() * end + start);

  if (start < end) {
    document.getElementById("lblrandNum1").innerHTML = randNum;
  } else {
    document.getElementById("lblrandNum1").innerHTML =
      "Please enter a valid start and end number";
  }
}

function btnString() {
  document.getElementById("lblString").innerHTML = lorem;
}

function btnDateClicked() {
  var newDate = new Date();
  if (newDate.getMonth() < 10 || newDate.getDate() < 10) {
    document.getElementById("lblDate").innerHTML =
      newDate.getDate() +
      "-0" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getFullYear();
  } else {
    document.getElementById("lblDate").innerHTML =
      newDate.getDate() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getFullYear();
  }
}

function btnTimeClicked() {
  var newDate = new Date();
  if (newDate.getMinutes() < 10) {
    document.getElementById("lblTime").innerHTML =
      "0" +
      newDate.getHours() +
      ":0" +
      newDate.getMinutes() +
      ":" +
      newDate.getSeconds();
  } else {
    document.getElementById("lblTime").innerHTML =
      newDate.getHours() +
      ":" +
      newDate.getMinutes() +
      ":" +
      newDate.getSeconds();
  }
}

function btnInchToFeetClicked() {
  document.getElementById("lblInchToFeet").innerHTML =
    document.getElementById("txtInchToFeet").value / 12;
}

function btnFeetToInchClicked() {
  document.getElementById("lblFeetToInch").innerHTML =
    document.getElementById("txtFeetToInch").value * 12;
}

function btnComparewordsClicked() {
  var word1 = document.getElementById("txtWord1").value.length;
  var word2 = document.getElementById("txtWord2").value.length;

  if (word1 == word2) {
    document.getElementById("lblWordResult").innerHTML =
      "Both words length are same";
  } else {
    document.getElementById("lblWordResult").innerHTML =
      "Both words length are different. First word length is " +
      word1 +
      " and Second word length is " +
      word2;
  }
}

function btnEvenOddClicked() {
  var numb = document.getElementById("txtEvenOdd").value;
  if (numb == "") {
    document.getElementById("lblEvenOdd").innerText = "Enter a number";
  } else if (numb % 2 == 0) {
    document.getElementById("lblEvenOdd").innerText = "Number is Even";
  } else {
    document.getElementById("lblEvenOdd").innerText = "Number is Odd";
  }
}

function btnRandomColorPressed() {
  // Math.floor((Math.random())--Math.floor((Math.random() * 10) + 1)
  var ranColor = Math.floor(Math.random() * colors.length);
  document.getElementById("lblRandomColor").innerHTML = colors[ranColor];
}

function btnRandomNamePressed() {
  var ranName = Math.floor(Math.random() * names.length);
  document.getElementById("lblRandomName").innerHTML =
    names[ranName].firstName + " " + names[ranName].lastName;
}

function btnNoOfSentences() {
  var noOfSentence = document.getElementById("txtNoOfSentence").value;
  var newLoremSentence = lorem.split(".");
  var newSentence = "";

  for (var i = 0; i < noOfSentence; i++) {
    newSentence = newSentence + newLoremSentence[i] + ".";
  }
  document.getElementById("lblNoOfSentence").innerHTML = newSentence;
}

function btnNoOfCharsClicked() {
  var noOfChars = document.getElementById("txtNoOfChars").value;
  var newLoremChars = lorem.split("");
  var newChars = "";

  for (var i = 0; i < noOfChars; i++) {
    newChars = newChars + newLoremChars[i];
  }
  document.getElementById("lblNoOfChars").innerHTML = newChars;
}

function btnRandompasswordClicked() {
  document.getElementById("lblRandomPassword").innerHTML = Math.random()
    .toString(36)
    .slice(1, 9);
}
