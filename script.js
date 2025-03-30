var canvas = document.getElementById("speedometer");
var canvascontext = canvas.getContext('2d');
const speedometerContainer = document.getElementById('colslot1');

var width = canvas.offsetWidth;
var height = canvas.offsetHeight;

canvascontext.fillStyle = "white";
canvascontext.fillRect(canvas.width * .1, canvas.height * .1, canvas.width - canvas.width * .2, canvas.height - canvas.height * .2);
var page = 3;
var date = new Date();

if (page % 4 == 0) {
    showInfo();
} else if (page % 4 == 1) {
    showWeekly();
} else if (page % 4 == 2) {
    showMonthly();
} else {
    showYearly();
}

function showYearly() {

        for (i = 0; i < 12; i += 1) {
            if (i < 11) {
                canvascontext.beginPath();
                canvascontext.moveTo(canvas.width * .1, canvas.height * .1 + (i * (((canvas.height - canvas.height * .2)))) / 10);
                canvascontext.lineTo(canvas.width * .1 + canvas.width - canvas.width * .2,  canvas.height * .1 + i * (((canvas.height - canvas.height * .2))/ 10));
                canvascontext.stroke();
            }

            canvascontext.beginPath();
            canvascontext.moveTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / 11, canvas.height * .1);
            canvascontext.lineTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / 11, canvas.height * .1 + canvas.height - canvas.height * .2);
            canvascontext.stroke();
    }

}


function getDays(date) {
    m = date.getMonth();
    y = date.getYear();
    if (m == 0 || m == 2 || m == 3 || m == 5 || m == 6 || m == 8 || m == 10 || m == 12) {
        return 31;
    } else if (d == 1) {
        if (y % 4 == 0) {
            return 29
        } else {
            return 28;
        }
    } else {
        return 30;
    }
}
function showMonthly() {
    const d = getDays(date)
    for (i = 0; i < getDays(date); i += 1) {
        if (i < 11) {
            canvascontext.beginPath();
            canvascontext.moveTo(canvas.width * .1, canvas.height * .1 + (i * (((canvas.height - canvas.height * .2)))) / 10);
            canvascontext.lineTo(canvas.width * .1 + canvas.width - canvas.width * .2,  canvas.height * .1 + i * (((canvas.height - canvas.height * .2))/ 10));
            canvascontext.stroke();
        }

    canvascontext.beginPath();
    canvascontext.moveTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / (d - 1), canvas.height * .1);
    canvascontext.lineTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / (d - 1), canvas.height * .1 + canvas.height - canvas.height * .2);
    canvascontext.stroke();
}

}

function showWeekly() {

    for (i = 0; i < 7; i += 1) {
        if (i < 5) {
            canvascontext.beginPath();
            canvascontext.moveTo(canvas.width * .1, canvas.height * .1 + (i * (((canvas.height - canvas.height * .2)))) / 4);
            canvascontext.lineTo(canvas.width * .1 + canvas.width - canvas.width * .2,  canvas.height * .1 + i * (((canvas.height - canvas.height * .2))/ 4));
            canvascontext.stroke();
        }

    canvascontext.beginPath();
    canvascontext.moveTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / 6, canvas.height * .1);
    canvascontext.lineTo(canvas.width * .1 + (i * (((canvas.width - canvas.width * .2)))) / 6, canvas.height * .1 + canvas.height - canvas.height * .2);
    canvascontext.stroke();
}

}
 