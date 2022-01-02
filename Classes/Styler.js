export class Styler {
    pics = [];

    findPics(className){ //выдаёт массив из нод-узлов (элементов)
        return document.querySelectorAll(className);
    }

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

    getParam(stylesObj, param){ //получает исчисленный объект стилей и имя параметра, возвращает численное значение параметра
        return  +stylesObj[param]
            .slice(0,stylesObj[param]
                .indexOf('px'));
    };

    findNGive(elem){ // иметь в виду, что компьютед-стили надо бы запрашивать после прогрузки ДОМ!
        let elData = {}
        elData.el = elem;
        //elData.id = id;
        elData.initStyles = window.getComputedStyle(elem);
        elData.height = this.getParam(elData.initStyles,'height');
        elData.width = this.getParam(elData.initStyles,'width');
        elData.ratio = elData.width / elData.height;
        console.log(elData)
        return elData
    }
}