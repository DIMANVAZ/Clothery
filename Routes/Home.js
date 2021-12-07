export const Home = {
    template: `    <router-link to="/collections">
                <div class="Home main-container">
                    <div class="Home title-container">
                           <p class="Home title" id="magazine">магазин одежды</p>
                    </div>

                    <img src="./pics/main-mobs-cut.jpg" alt="" class="for-mobs">
                        <img src="./pics/main-Man-tabs-1024x768.jpg" alt="" class="for-tabs">
                        <img src="./pics/main-woMan-tabs-1024x768.jpg" alt="" class="for-tabs">
                            <img src="./pics/main-Man-PC-900x900.jpg" alt="" class="for-PC">
                            <img src="./pics/main-woMan-PC-900x900.jpg" alt="" class="for-PC">
                </div>
                    </router-link>
                `,
    methods:{
        moveTitle(){
            let magTitle = document.getElementById('magazine');
            let top = 10;
            let goDown = true;
            setTimeout(()=>{
                setInterval(()=>{
                    if(goDown){
                        if(top === 600){
                            goDown = false;
                            return
                        }
                        top += 1;
                        magTitle.style = `top:${top}px;`
                    } else {
                        if(top === 10){
                            goDown = true;
                            return
                        }
                        top -= 1;
                        magTitle.style = `top:${top}px;`
                    }
                },5)
            },1000)
        }
    },
    created(){
    },
    mounted(){
        this.moveTitle()
    }
}