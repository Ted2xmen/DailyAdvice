<template>
  <div class="container centered">
    <article
      class="
        p-10rem
        min-h-116
        max-w-3xl
        w-full
        rounded-xl
        text-gray-100
        xl:col-span-2
        bg-center bg-cover
        transform
        duration-500
        hover:-translate-y-5
        
      "
      style="
        background-image: url(https://source.unsplash.com/1600x900/?darkness,space);
        box-shadow: rgba(2, 109, 8, 0.35) 0px 5px 15px;
      "
    >
      <h1 class="mt-5 text-4xl text leading-snug ">
        {{ advice }}


        
      </h1>

      
    </article>
  </div>
</template>


   

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {},

  data() {
    return {
     advice: "",
    };
  },

  mounted() {
 
    var that = this;
    axios
      .get("https://api.adviceslip.com/advice")
      .then(function (response) {
        // handle success
        console.log(response.data.slip.advice);
        that.advice = response.data.slip.advice;
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        
      })
      .then(function () {
        // always executed
      });
  },
};
</script>




<style>
body {
  background-color: rgb(15, 17, 17);
}

.text {
  font-style: italic;
}
.centered {
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  
}
.p-10rem {
padding: 10rem;
}

</style>
