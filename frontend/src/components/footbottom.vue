<template>
<!--Footer-->
    <div class="containerfooter">
        <footer class="page-footer font-small special-color-dark pt-1">
            <div class="container">
                <div id="foot" class="footer-copyright text-center py-4">Copyright © 2020
                    <a href="https://groupomania.com/">Groupomania</a>
                </div>
            </div>
        </footer>
    </div>
    
</template>

<script>

export default {
    name: 'footbottom',
}
</script>

<style lang="scss" scoped>

.containerfooter{
position: fixed;
bottom :0;
width: 100%;
height: 50px;
}

footer{
    background-color: #17a2b8;
    
    @media screen and (min-width: 320px) and (max-width: 830px) {    
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;   
    }
}

a{
    color: black;
   
}

a:hover{
    color: red;
}

#foot{
    position: relative;
    bottom: 10px;
    color: black;
}


</style>
