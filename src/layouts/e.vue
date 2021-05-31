<template>
    <div>
        <header>
            <ul class="nav">
              <li><router-link class="link" to="/"><b>HOME</b></router-link></li>
                <li><router-link class="link" to="/page2"><b>Page1</b></router-link></li>
                <li><router-link class="link" to="/page3"><b>History</b></router-link></li>
            </ul>
        </header>
        <section class="content">

           
            <slot/>

        </section>
      
    </div>
</template>

<script>
    export default {
        name: "Red"
    }
</script>

<style scoped>
    header{
        background-color: rgb(238, 255, 0);
        height: 70px;
        display: flex;
        align-items: center;
    }

    footer{
        background-color: #eee344;
        height: 70px;
        color:aqua;
    }

    .content{
        min-height: calc(100vh - 140px);
        background-image: url('https://images.wallpaperscraft.ru/image/zheltyj_kapli_fon_164322_3840x2160.jpg'); 
    }

    ul{
        list-style: none;
        margin: 0;
        color: rgb(0, 0, 0);
    }

    li{
        color: rgb(0, 0, 0);
        display: inline;
        margin: 0 5px;
    }

    .link{
        color: rgb(0, 0, 0);
        text-decoration: none;
    }

</style>