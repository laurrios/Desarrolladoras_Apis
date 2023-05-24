let video = document.getElementById("input");

video.addEventListener("change", function() {
    if(this.files[0].type==="video/*"){
        swal({
            title:"Formato no válido. Inserte .mp4 o .mov",
            text:"  ",
            buttons: false,
            closeOnClickOutside: false,
            icon: "warning",
            closeOnEsc: false,
            timer: 3000
        });
        this.files = null;
    } else {
        console.log(this.files[0]);
        cargarVideo(this.files[0]);
        
    };
});

function cargarVideo(video) {
    swal({
        title:"Su video se está cargando, espere",
        text:"  ",
        closeOnClickOutside: false,       
        timer: 4500
    });

  var media = URL.createObjectURL(video);
  var video = document.getElementById("video");

  video.src = media;
  video.style.display = "block";

  cerrar();
}

function cerrar() {
  swal.close();
}