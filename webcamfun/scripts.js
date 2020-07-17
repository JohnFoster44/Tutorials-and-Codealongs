const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function (stream){
        video.srcObject = stream;
        video.play();
    })

    .catch(err =>{
        console.log(`HELP!`, err)
    });
}

function paintToCanvas(){
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

     return setInterval(() => {
        //  ctx.scale(-1, 1);
        //  ctx.setTransform(1,0,0,-1,0,canvas.height);
         ctx.drawImage(video, 0, 0, width, height);
    }, 16);
}
 

function takePhoto() {
    // sound
    snap.currentTime = 0;
    snap.play();

    // get pics
    const data = canvas.toDataURL('image/png');
    console.log(data);
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute()
}

getVideo();

video.addEventListener('canplay', paintToCanvas);