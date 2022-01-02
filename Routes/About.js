import {Styler} from "../Classes/Styler.js"
let styler = new Styler();

export const About = {
    template:
   `<div class="About-whole-container">
        <p class="About-description">
        Почти вековая история модного дома Clothery начинается в довоенном Лондоне.<br/>
        Его основатель Чезаре Феллини приходился потомком самому Маринони Дезенцано - портному при дворе короля Генриха VIII Тюдора.<br/>                                   
        </p>
        <div class="About-figures" id="medievalPics">
           <figure>
                <img src="./pics/Morignoni_Desenciano.jpg" class="about-pic" alt="portrait of young tailor Morignoni Desenciano">
                <figcaption> Портрет Маринони Дезенцано, Лондон, 1525г.</figcaption>
           </figure>
           <figure>
                <img src="./pics/Henry_8.jpeg" class="about-pic" alt="portrait of King Henry VIII">
                <figcaption> Портрет Короля Генриха VIII, Лондон, 1528г.</figcaption>
           </figure>            
        </div>
        <p class="About-description"> 
        В 1930 году юный Чезаре, тогда ещё помощник закройщика, открывает небольшую мастерскую по ремонту одежды. <br/>
        Поначалу дела шли неважно. Волею случая, его клиенткой становится Виктория Хьюз, жена офицера королевской гвардии.<br/>
        Вскоре мастерская Чезаре начинает сотрудничать с армией Её Величества. 
        Сначала шли заказы только на ремонт офицерских мундиров. <br/>
        Но в 1932 году открылась военная Академия Британской Индийской армии, и слушателям потребовалась униформа нового образца. 
        Тогда Чезаре получает свой первый заказ на пошив.<br/> 
        Успешно выполнив его, в 1933 году он даёт мастерской название <b><i>Clothery</i></b> <i>(по аналогии с привычными англичанам 
        "grocery"(бакалея) или "bakery"(булочная))</i> и открывает при ней магазин готовой одежды. 
        </p>
        <div class="About-figures" id="20th_pics">
            <figure>
                <img src="./pics/Chesare_Fellini_1930s.jpg" class="about-pic" alt="portrait of tailor Chesare Fellini">
                <figcaption> Чезаре Феллини в мастерской, 1930-е гг, Лондон</figcaption>
            </figure>      
            <figure>
                <img src="./pics/British_Indian_Army.png" class="about-pic" alt="three British Indian Army officers">
                <figcaption>Выпускники Академии, 1930-е гг, Лондон</figcaption>
            </figure>          
        </div>
        <p class="About-description"> 
        Сотрудничество с войсками стало основной движущей силой и вектором развития. Лишь к 1938 году
        имя Clothery приобретает широкую известность среди мирного населения. Вторым витком развития стало
        появление коллекции от Чезаре на Неделе Моды в Лондоне в 1940 году.<br/>
        Начало Второй Мировой войны могло бы вновь вернуть бренд к "военным истокам", но
        Чезаре решает не оставлять гражданскую моду, ибо войны рано или поздно заканчиваются.
        Тем не менее, заработав себе имя именно как армейский поставщик, он создаёт для потребностей армии
        дочерний филиал, который в дальнейшем выделится в отдельный бренд,  сменит хозяина и станет известен как <a href="https://aeronauticamilitare.eu/">Aeronautica Militare</a>.    
        
        </p>
    </div>`,
    data(){
        return{
            //ширина экрана - будем следить за ней через Watch
            screenWidth:document.documentElement.clientWidth,
        }
    },
    mounted(){
        window.onload = ()=> {
            styler.findPics('.about-pic').forEach(el => {
                styler.pics.push(styler.findNGive(el))
            })
            console.log(styler.pics)

        };

    },
    created(){

    },
    methods:{

    },
    computed:{

    },
    watch:{
        screenWidth(){ //если ресайзнули окно - делать это:
            //styler.pics[0].el.style = 'width:300px'
            console.log('resize')
            //styler.calcStyles(styler.pics[0], styler.pics[1])
        }
    }

}