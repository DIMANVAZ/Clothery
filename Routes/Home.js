export const Home = {
    template: `    <router-link to="/collections">
                <div class="Home main-container">
                    <div class="Home title-container">
                           <p class="Home title" id="magazine">войти в <br>магазин одежды</p>
                    </div>

                    <img src="./pics/main-mobs-cut.jpg" alt="image of man and woman" class="for-mobs">
                        <img src="./pics/main-Man-tabs-1024x768.jpg" alt="image of man" class="for-tabs">
                        <img src="./pics/main-woMan-tabs-1024x768.jpg" alt="image of woman" class="for-tabs">
                            <img src="./pics/main-Man-PC-900x900.jpg" alt="image of man" class="for-PC">
                            <img src="./pics/main-woMan-PC-900x900.jpg" alt="image of woman" class="for-PC">
                </div>
                    </router-link>
                `,
    methods:{
        moveTitle(){
            let magTitle = document.getElementById('magazine');
            let top = 10;
            let vector;
            setTimeout(()=>{
                setInterval(()=>{
                    if(top  >= 600){
                        vector = -1;
                    }
                    if(top <= 10){
                        vector = 1
                    }
                    magTitle.style = `top:${top += vector}px`
                },20)

            },1000)
        },
    },
    mounted(){
        this.moveTitle()
    }
}