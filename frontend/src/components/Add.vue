<template>
    <div class="container w-full min-h-screen flex justify-center items-center ">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-4/12">
    <h2 class="text-center mb-4" id="info"></h2>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
       Product Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Product Name">
      <p class="text-red-500 text-xs italic hidden" id="nameError">Name cannot be empty !</p>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
       Price
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number">
      <p class="text-red-500 text-xs italic hidden" id="priceError">Price cannot be empty !</p>
    </div>
    <div class="flex items-center justify-center">
      <button @click="save" class="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Save
      </button>   
    </div>
  </form>
    </div>
</template>

<script>
import { truncate } from 'fs';
export default {
  data (){
     return{
        id : 0,
        edit : false,
     }
  },
  methods : {
   save(e){
         var name = document.querySelector("#name").value
         var price = document.querySelector("#price").value  
         var priceError = document.querySelector("#priceError") 
         var nameError = document.querySelector("#nameError") 
         var valid = true
         if(name == "" || name == undefined){
           
           nameError.classList.remove('hidden')
           nameError.classList.add('block')
           valid = false
         }else{
            nameError.classList.add('hidden')
         }

         if(price == "" || price == undefined || price == 0){
           priceError.classList.remove('hidden')
           priceError.classList.add('block')
           valid = false
         }else{
           priceError.classList.add('hidden')
         }

         if(!valid){
          return
         }
         
         if(this.edit == true){
           this.$http.put(`${this.$url}products/${this.id}`,{
              id : this.id,
              name : name,
              price : price
           })
           alert('Updated item !')
           this.$router.push('/home')
         }else{
           this.$http.post(`${this.$url}products`,{
             name : name,
             price : price
           })
           .then(data=>{
              alert(data.data.message)
                  document.querySelector("#name").value = ""
                  document.querySelector("#price").value = 0
           })
         }
         
        
     }
  },
  mounted(){
    this.id = this.$route.params.id
    if(this.id != undefined){
      document.querySelector("#info").innerHTML = `Edit Product`
      this.edit = true
      this.$http.get(`${this.$url}products/${this.id}`)
      .then(data =>{
          document.querySelector("#name").value = data.data.name
          document.querySelector("#price").value = data.data.price
      })
      .catch(err => {

      })
    }else{
      document.querySelector("#info").innerHTML = `Add Product`
    }
  }
}
</script>

