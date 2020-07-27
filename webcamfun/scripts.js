const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })

    .catch((err) => {
      console.log(`HELP!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //  take pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    //  mess around with pixels

     pixels = rgbSplit(pixels);

    //  put pixels back
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // sound
  snap.currentTime = 0;
  snap.play();

  // get pics
  const data = canvas.toDataURL("image/jpeg");
  console.log(data);
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "cutie");
  link.innerHTML = `<img src="${data}" alt="CUTIEBOYY"/>`;
  strip.insertBefore(link, strip.firstChild);
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 100] = pixels.data[i + 1] - 20; //g
    pixels.data[i - 50] = pixels.data[i + 2] * 1000; //b
  }
  return pixels;
}

function mouseMover(e) {
  console.log(e);
}

getVideo();

canvas.addEventListener("mousemove", mouseMover);
video.addEventListener("canplay", paintToCanvas);
