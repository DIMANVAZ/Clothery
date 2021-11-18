export const Item = {
    props:[`items`], //это переданный нам массив объектов items.
                     // Здесь к нему можно обращаться this.items
    template:` 
       <div> Вы выбрали {{ this.selectedItem.name }} </div>
              `,
    data(){
        return{
            dataParams:'initially Empty => ',
            selectedItem: {}
        }
    },
    created(){
    },
    methods:{
        selectItem(){
            let match = {}
            this.items.forEach(item => {
                if(item.id === parseInt(this.$route.params.xxx)) {
                    match = item;
                }
            });
            return match;
        }
    },
    mounted(){
        this.dataParams += this.$route.params.id;
            console.log(this.$route.params) // {"id": "344134464"} сформированный в Collection через :to = item/item.id

        this.selectedItem = this.selectItem();
        console.log('len from mounted = ',this.items.length)
        console.log('this.selectItem from mounted',this.selectItem())
        console.log('this.selectedItem from mounted = ',this.selectedItem)
        console.log(this.selectedItem.name) //выводит строку
        console.log(this.selectedItem.name.slice(8))
    }
}