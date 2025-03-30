//Adding activity inputs
const emissionsBox = document.getElementById("emissionsbox");



const userEntries = [];
function entryObj(title, amount, date) {
this.date = date;
this.title = title;
this.amount = amount;
}



function addemissioninstance(desc = "description", am = "amount", da = "date") {
  const secondElement = emissionsBox.children[1];
    const secondElement = emissionsBox.children[1];
    let ntry = new entryObj(desc, am, da);
    userEntries.push(ntry);

  const emissionInstance = document.createElement("div");
  emissionInstance.classList.add("emissioninstance");

  const descriptiondiv = document.createElement("div");
  const description = document.createElement("h3");
  description.textContent = desc;
  descriptiondiv.appendChild(description);

  const amountdiv = document.createElement("div");
  const amount = document.createElement("h3");
  amount.textContent = am;
  amountdiv.appendChild(amount);

  const datediv = document.createElement("div");
  const date = document.createElement("h3");
  date.textContent = da;
  datediv.appendChild(date);

  emissionInstance.appendChild(descriptiondiv);
  emissionInstance.appendChild(amountdiv);
  emissionInstance.appendChild(datediv);

  emissionInstance.addEventListener("click", function () {
    emissionInstance.remove();
  });

  emissionInstance.addEventListener("mouseover", function () {
    emissionInstance.style.cursor = "pointer";
  });
    emissionInstance.appendChild(descriptiondiv);
    emissionInstance.appendChild(amountdiv);
    emissionInstance.appendChild(datediv);

  if (secondElement) {
    emissionsBox.insertBefore(emissionInstance, secondElement);
  } else {
    emissionsBox.appendChild(emissionInstance);
  }
}

//Getting Activity inputs
const confirm = document.getElementById("confirm");
const inputWindow = document.getElementById("inputwindow");
const addActivity = document.getElementById("addemissioninstance");
confirm.addEventListener("click", function () {
  addemissioninstance();
  inputWindow.style.display = "none";

confirm.addEventListener("click", function() {
    const title = document.getElementById("eventTitle").value;
    var subDate = document.getElementById("eventdate").value;
    const emissionsAm = document.getElementById("eventAmount").value;
    entry = new entryObj(subDate.split("/"), emissionsAm, title);
    userEntries.push(entry);
    addemissioninstance(title, emissionsAm + "g", subDate);
    inputWindow.style.display = "none";
});

addActivity.addEventListener("click", function () {
  inputWindow.style.display = "flex";
});

addActivity.addEventListener("mouseover", function () {
  addActivity.style.cursor = "pointer";
});

//Drawing the graph

const next = document.getElementById("next");
const back = document.getElementById("prev");
var page = 0;

next.addEventListener("click", function () {
  page += 1;
  console.log("++");
  showpage();
});

back.addEventListener("click", function () {
  page -= 1;
  if (page == -1) {
    page = 3;
  }
  console.log("--");
  showpage();
});

var canvas = document.getElementById("display");
var canvascontext = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

canvascontext.fillStyle = "white";
canvascontext.fillRect(
  width * 0.1,
  height * 0.1,
  width - width * 0.2,
  height - height * 0.2
);
var date = new Date();

function showpage() {
  canvascontext.clearRect(
    width * 0.1,
    height * 0.1,
    width - width * 0.2,
    height - height * 0.2
  );
  canvascontext.fillRect(
    width * 0.1,
    height * 0.1,
    width - width * 0.2,
    height - height * 0.2
  );
  if (page % 4 == 0) {
    showInfo();
  } else if (page % 4 == 1) {
    showGraph(7, 5, "week");
  } else if (page % 4 == 2) {
    var date = new Date();
    const d = getDays(date);
    showGraph(d, 11, "month");
  } else {
    showGraph();
  }
}

function getMonth(int) {
  if (int == 0) {
    return "January";
  } else if (int == 1) {
    return "February";
  } else if (int == 2) {
    return "March";
  } else if (int == 3) {
    return "April";
  } else if (int == 4) {
    return "May";
  } else if (int == 5) {
    return "June";
  } else if (int == 6) {
    return "July";
  } else if (int == 7) {
    return "August";
  } else if (int == 8) {
    return "September";
  } else if (int == 9) {
    return "October";
  } else if (int == 10) {
    return "November";
  } else {
    return "December";
  }
}

function getDay(int) {
  if (int == 0) {
    return "Sunday";
  } else if (int == 1) {
    return "Monday";
  } else if (int == 2) {
    return "Tuesday";
  } else if (int == 3) {
    return "Wednesday";
  } else if (int == 4) {
    return "Thursday";
  } else if (int == 5) {
    return "Friday";
  } else {
    return "Saturday";
  }
}

function showGraph(row = 12, col = 11, string = "year") {
  const wgap = width * 0.1;
  const hgap = height * 0.1;
  canvascontext.font = "15px Arial";
  canvascontext.textAlign = "center";
  canvascontext.textBaseline = "middle";
  for (i = 0; i < row; i += 1) {
    if (i < col) {
      canvascontext.fillStyle = "black";
      if (string == "year") {
        const numBase = (col - 1) * 2;
        canvascontext.fillText(
          numBase - i * 2,
          width * 0.1 + wgap / 1.5,
          height * 0.1 +
            (i * (height - height * 0.2 - hgap * 2)) / (col - 1) +
            hgap
        );
      }
      if (string == "week") {
        const numBase = (col - 1) * 5;
        canvascontext.fillText(
          numBase - i * 5,
          width * 0.1 + wgap / 1.5,
          height * 0.1 +
            (i * (height - height * 0.2 - hgap * 2)) / (col - 1) +
            hgap
        );
      }
      if (string == "month") {
        const numBase = (col - 1) * 50;
        canvascontext.fillText(
          numBase - i * 50,
          width * 0.1 + wgap / 1.5,
          height * 0.1 +
            (i * (height - height * 0.2 - hgap * 2)) / (col - 1) +
            hgap
        );
      }
      canvascontext.fillStyle = "white";
      canvascontext.beginPath();
      canvascontext.moveTo(
        width * 0.1 + wgap,
        height * 0.1 +
          (i * (height - height * 0.2 - hgap * 2)) / (col - 1) +
          hgap
      );
      canvascontext.lineTo(
        width * 0.1 + width - width * 0.2 - wgap,
        height * 0.1 +
          i * ((height - height * 0.2 - hgap * 2) / (col - 1)) +
          hgap
      );
      canvascontext.stroke();
    }
        const wgap = width * .1;
        const hgap = height * .1;
        canvascontext.font = "15px Arial";
        canvascontext.textAlign = "center";
        canvascontext.textBaseline = "middle";
        var dates = [];
        for (entry of userEntries) {
            dates.push(entry.date);
        }
        for (i = 0; i < row; i += 1) {
            if (i < col) {
                canvascontext.fillStyle = 'black';
                if (string == "year") {
                    const numBase = (col - 1) * 2;
                    canvascontext.fillText(numBase - (i * 2), width * .1 + wgap / 1.5, height * .1 + (i * (((height - height * .2 - hgap * 2)))) / (col - 1) + hgap)
                }
                if (string == "week") {
                    const numBase = (col - 1) * 5;
                    canvascontext.fillText(numBase - (i * 5), width * .1 + wgap / 1.5, height * .1 + (i * (((height - height * .2 - hgap * 2)))) / (col - 1) + hgap);       
                }
                if (string == "month") {
                    const numBase = (col - 1) * 50;
                        canvascontext.fillText(numBase - (i * 50), width * .1 + wgap / 1.5, height * .1 + (i * (((height - height * .2 - hgap * 2)))) / (col - 1) + hgap);

                }
                canvascontext.fillStyle = 'white';
                canvascontext.beginPath();
                canvascontext.moveTo(width * .1 + wgap, height * .1 + (i * (((height - height * .2 - hgap * 2)))) / (col - 1) + hgap);
                canvascontext.lineTo(width * .1 + width - width * .2 - wgap,  height * .1 + i * (((height - height * .2 - hgap * 2))/ (col - 1)) + hgap);
                canvascontext.stroke();
            }

    canvascontext.fillStyle = "black";
    if (string == "year") {
      canvascontext.font = "11px Arial";
      const numBase = (row - 2) * 2;
      canvascontext.fillText(
        getMonth(i),
        width * 0.1 + (i * (width - width * 0.2 - wgap * 2)) / (row - 1) + wgap,
        height * 0.1 + height - height * 0.2 - hgap / 1.5
      );
      canvascontext.font = "15px Arial";
    }
    if (string == "week") {
      const numBase = (row - 2) * 2;
      canvascontext.fillText(
        getDay(i),
        width * 0.1 + (i * (width - width * 0.2 - wgap * 2)) / (row - 1) + wgap,
        height * 0.1 + height - height * 0.2 - hgap / 1.5
      );
    }
    if (string == "month") {
      const numBase = (row - 2) * 2;
      canvascontext.fillText(
        i,
        width * 0.1 + (i * (width - width * 0.2 - wgap * 2)) / (row - 1) + wgap,
        height * 0.1 + height - height * 0.2 - hgap / 1.5
      );
    }
    canvascontext.fillStyle = "white";

    canvascontext.beginPath();
    canvascontext.moveTo(
      width * 0.1 + (i * (width - width * 0.2 - wgap * 2)) / (row - 1) + wgap,
      height * 0.1 + hgap
    );
    canvascontext.lineTo(
      width * 0.1 + (i * (width - width * 0.2 - wgap * 2)) / (row - 1) + wgap,
      height * 0.1 + height - height * 0.2 - hgap
    );
    canvascontext.stroke();
  }
}

function getDays(date) {
  m = date.getMonth();
  y = date.getYear();
  if (
    m == 0 ||
    m == 2 ||
    m == 3 ||
    m == 5 ||
    m == 6 ||
    m == 8 ||
    m == 10 ||
    m == 12
  ) {
    return 31;
  } else if (d == 1) {
    if (y % 4 == 0) {
      return 29;
    } else {
      return 28;
    }
  } else {
    return 30;
  }
}

function showInfo() {
    return null;
}
