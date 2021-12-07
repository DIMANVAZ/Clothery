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
            console.log(`magTitle = ${magTitle}`)
            let top = 10;
            setTimeout(()=>{
                setInterval(()=>{
                    if(top < 300) {
                        top += 2;
                        magTitle.style = `top:${top}px`
                    } else{
                        //как сделать возвращение обратно? while
                    }
                },30) //ограничить спуск margin-top!
            },1000)
        }
    },
    created(){
    },
    mounted(){
        this.moveTitle()
    }
}