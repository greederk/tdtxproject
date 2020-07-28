<template>
    <div class="navheaderC">
        <!-- <transition name="fade" mode="out-in"> -->
          <router-view></router-view>
        <!-- </transition> -->
      
    </div>
</template>
<script>

export default {
    
}
</script>
<style lang="scss">
    .navheaderC{
        width:100%;
        min-height:calc(100vh - 50px);
        // height:1800px;
        position:fixed;
        left: var(--width--sidebar);
        top:60px;
        background: #fff;
        padding-left:10px;
        overflow:auto;
    }
.fade-enter-active,
.fade-leave-active {
   transition: all 0.1s ;
}

// .fade-enter,
// .fade-leave-active {
//   opacity: 0;
// }

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
//   transform: translateX(500px);
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.1s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>