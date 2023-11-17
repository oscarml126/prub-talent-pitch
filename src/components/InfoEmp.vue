<template>
    <div class="hello">
        <div class="card" style="width: 23rem;">
  <img src="../assets/Imagen1.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">A.C TeleCom</h5>
    <p class="card-text text1">@ac-telecom</p>
    <p class="card-text text2">Startup-tecnologia</p>
    <p class="card-text text3"><span class="material-icons">
radio_button_checked
</span> Empresa Activa</p>
    <p class="card-text text4"><span class="material-icons">
location_on
</span> Floridablanca - Colombia </p>
<p class="card-text">
    <i class='bx bxs-star start1' ></i>
    <i class='bx bxs-star start1' ></i>
    <i class='bx bxs-star start1' ></i>
    <i class='bx bxs-star start1' ></i>
    <i class='bx bxs-star start2' ></i>
    (10 Reviews)</p>
<p class="card-text">
    <i class='bx bxl-facebook-square social' ></i>
    <i class='bx bxl-instagram social' ></i>
    <i class='bx bxl-twitter social'></i>
    <i class='bx bxl-linkedin-square social' ></i>
</p>
<a href="https://www.actelecom.net/telecom" class="linkpage"><i class='bx bx-link' ></i>https://www.actelecom.net/telecom</a>

<video ref="videoPlayer" width="300"  controls>
      <source :src="videoSource" type="video/mp4">
      Tu navegador no soporta el elemento de video.
    </video>
    <img src="../assets/qr.png" class="card-img-top" alt="...">

<a href="#" class="btn btn-primary full-width coloresbtn"><i class='bx bx-share ' ></i>Compartir Perfil</a>
<a href="#" class="btn btn-primary full-width  bordered-btn"><i class='bx bxs-download' ></i>Descarga resumen</a>

<ul class="list-group list-group-flush">
  <li class="list-group-item"><i class='bx bx-group' ></i>TALENTOS <a class="veinte">20</a></li>
  <li class="list-group-item"><i class='bx bx-low-vision' ></i>VISTAS DEL PERFIL <a class="veinte">20</a></li>
  <li class="list-group-item"><i class='bx bx-camera-movie' ></i>PITCHES RECIBIDOS <a class="veinte">20</a></li>
  <li class="list-group-item"><i class='bx bxs-user-voice' ></i>EXHIBICIONES <a class="veinte">20</a></li>
  <li class="list-group-item"><i class='bx bx-user-pin' ></i>VACANTES <a class="veinte">20</a></li>
  <li class="list-group-item"><i class='bx bx-user-pin' ></i>CONTENIDOS <a class="veinte">20</a></li>
</ul>
  </div>
</div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      videoSource: 'ruta/a/tu/video.mp4', 
    };
  },
  methods: {
    playPause() {
      const video = this.$refs.videoPlayer;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
  },
};
</script>
  <style scoped>
.card-title{
    color: #1A237E;
    font-size: 20px;
    font-weight: bold;
}
.hello{
    display: flex;
      justify-content: center; 
}
  .card-text{
    margin: 0;
  }
  .text1{
    color: #666666;

  }
  .text2{
    color: #9FA8DA;

}
.text3{
    color: #8BC34A;

}
.text4{
    color: #666666;

}
.start1{
    color: #FFD54F;
}
.start2{
    color: #FFF8E1;
}
.social{
    color: #1A237E;
    font-size: 35px;
}
.linkpage{
    color: #DE1C7D;
    font-weight: bold;
}
.bx-link{
    font-size: 20px;
}
.full-width{
    width: 100%;
  display: block; 
  text-align: center; 
  margin-top: .5rem;
}
.bxs-download{
    background-color: #DE1C7D;
    font-size: 20px;
    color: aliceblue;

}
.bx-share{
    color: aliceblue;
    font-size: 20px;

}
.coloresbtn{
    background-color: #DE1C7D;
    color: aliceblue;

}
.bordered-btn{
    background-color: transparent;
  border: 2px solid #DE1C7D;
  color: #DE1C7D;

}
.list-group-item{
    font-size: 10PX;
}
.veinte{
    text-align:right;
    color: #666666;
    font-size: 12px;

}

  </style>
