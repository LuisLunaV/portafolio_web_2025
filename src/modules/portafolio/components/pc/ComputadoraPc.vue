<template>
  <div class="contenedor-pc">
    <div class="monitor">
      <div class="marco">
        <div class="pantalla">
          <div class="barra">
            <div class="circulo"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="stand">
      <div class="neck"></div>
      <div class="base"></div>
    </div>
  </div>
</template>
<style scoped>
.contenedor-pc {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.monitor {
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
  overflow: hidden;
  background-color: #ccd4e1;
  width: 500px;
  height: 380px;
  border-radius: 20px;
}
.marco {
  background-color: #435d76;
  height: 82%;
  width: 100%;
  padding: 30px;
}

.pantalla {
  background-color: #fbe14e;
  height: 100%;
  width: 100%;
}

.barra {
  width: 100%;
  height: 20%;
  background-color: #1E2A38;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
}

.circulo{
  margin: 0 6px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #ccd4e1;
}
.stand {
  height: 100px;
  width: auto;
  /* margin-top: px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.neck {
  width: 200px;
  height: 30px;
  background: #435d76;
  margin: 5px 0;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
.base {
  margin-top: 5px;
  width: 300px;
  height: 0px;
  border-top: solid 0px transparent;
  border-right: solid 50px transparent;
  border-bottom: solid 30px #cfd5df;
  border-left: solid 50px transparent;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.8));
}
</style>
