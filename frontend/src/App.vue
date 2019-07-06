<template>
  <div class="min-h-screen bg-gray-700 flex">
      <div class="w-1/12 max-h-screen flex flex-col justify-around items-center pl-12 py-20">
           <div class="w-full text-white hover:text-blue-300 hover:cursor-pointer">
             <router-link to="/add">
                 <icon name="plus" class="w-full h-32"></icon>
             </router-link>
           </div>

           <div class="w-full text-white hover:text-blue-300 hover:cursor-pointer">
              <router-link to="/home">
                   <icon name="list" class="w-full h-32"></icon>  
              </router-link>
           </div>
      </div>
     <div class="w-11/12">
          <router-view/>
     </div>
  </div>   
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  mounted(){
    this.$router.push('/home')
  }
}
</script>

