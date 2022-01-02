export class Styler {
    pics = [];

    fillPicsArray(className){
        document.querySelectorAll(className).forEach(el => {
            this.pics.push(el)
        })
    };

    calcStyles(elData1,elData2,screenWidthFresh = document.documentElement.clientWidth){
        let wider,narrower,taller,lower;
        let sumOfWi = elData1.width + elData2.width;

        if (sumOfWi > screenWidthFresh){
            console.log(sumOfWi, 'wader!! than', screenWidthFresh);
            let k1 = elData1.width / sumOfWi;
            let k2 = elData2.width / sumOfWi;
            elData1.el.style.width = `${k1 * screenWidthFresh}px`;
            elData2.el.style.width = `${k2 * screenWidthFresh}px`;
        } else console.log(sumOfWi, 'NOT wader than', screenWidthFresh)

    };

    getParam(stylesObj, param){
        return  +stylesObj[param]
            .slice(0,stylesObj[param]
                .indexOf('px'));
    };

    findNGive(id){
        let elData = {}
        elData.el = document.getElementById(id);
        elData.id = id;
        elData.initStyles = window.getComputedStyle(elData.el);
        elData.height = this.getParam(elData.initStyles,'height');
        elData.width = this.getParam(elData.initStyles,'width');
        elData.ratio = elData.width / elData.height;
        console.log(elData)
        return elData
    }
}