<template>
    <div class="container">
        <div class="subtitle">
            <h5>Where are you?</h5>
        </div>
        <div class="location">
            <div class="left">
                <van-icon name="shop" size="75"/>
                <div class="address">
                    <p>Rua Marcial, 25</p>
                    <p>Mooca</p>
                    <p>ETEC Professor Camargo Aranha</p>
                </div>
            </div>
            <div class="right">
                <van-icon name="exchange" size="30"/>
                <p>CHANGE</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&display=swap');

.container{
    margin-top: 10%;
    width: 95%;
    margin-left: 1.25%;
    background-image: linear-gradient(135deg,#016640, #002215);
    border-radius: 5px;
    padding: 5px;
}

.subtitle{
    font-family: 'Oswald', sans-serif;
    color: rgba(189, 189, 189, 0.933);
    font-weight: 700;
    margin-left: 15px;
}

h5, p{
    margin:0;
}




.location, .left{
    color: white;
    display: flex;
    align-items: center;
}

.left .address{
    margin-left: 5px;
    font-family: 'Oswald', sans-serif;
    color: white;
    font-weight: 600;
    font-size: 15px;
    line-height: 17px; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.left{
    width: 60%;
}

.right{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    font-family: 'Oswald', sans-serif;
    font-family: 'Oswald', sans-serif;
    color: rgba(189, 189, 189, 0.933);
    font-weight: 700;
    padding-left: 20%;
    padding-bottom: 5%;
}

.right p{
    
    font-size: 10px;

}
</style>