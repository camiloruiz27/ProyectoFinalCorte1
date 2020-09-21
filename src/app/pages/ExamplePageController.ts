import { before } from "lodash";

export class ExamplePageController {
    view: any;
    component = {
        id: 'example-page',
        view: 'ExamplePage.html',
        style: 'ExamplePage.scss',
        start: () => { this.start(); }
    }

    constructor() {
        this.loadView();

    }
    
    start() {
        const box: any = this.findInsideMe(".box");
        const boxi: any = this.findInsideMe(".box2");
        const TDBox: any = this.findInsideMe(".TDBox");
        const cubito: any =this.findInsideMe(".cubitoejemplo");
        const contenedor: any =this.findInsideMe(".contenedorgrande");
        const clouds: any = this.findInsideMe(".cloud", true);
        const seccion2: any =this.findInsideMe(".Seccion2");
        const linea2: any =this.findInsideMe(".linea2");
        window.onscroll = (_:any) => {
            console.log(`X: ${window.scrollX} Y: ${window.scrollY}`)
            const p = (window.scrollY / window.innerWidth) * 100;
            const j = (window.scrollY /2499)*60;
            console.log(`valor j ${j}`)
            //const scrollDerecha = (contenedor.scrollTop/ contenedor.clientWidth) * 100;
            let numero=window.scrollY
            
            window.moveBy(numero,0 );
            
            if (window.scrollY >= 2399) {
                if (linea2.style.width ==`${60}`) {
                    linea2.style.width=`${60}%`
                    
                }else{

                    linea2.style.width =`${j}%`
                    linea2.style.maxwidth=`${60}%`
                    if (window.scrollY == 2499) {
                        linea2.style.maxwidth=`${60}%`
                    }
                }
            }
            
           // console.log(`left movement ${window.screenLeft}`);
            //console.log(WheelEvent.deltaY())
            

            /*console.log(window.scrollY);
            console.log(`este es p: ${p}`);
            box.style.left = `${p}%`;
            box.style.opacity = `${p / 100}`;
            clouds[0].style.left = `${p * 2}%`;
            clouds[1].style.left = `${p * 1.3}%`;
            
            if (window.scrollY >= 340) {
                TDBox.style.opacity = 1;
                if (window.scrollY >= 350) {
                    TDBox.style.transform = `rotateY(${window.scrollY}deg)`;
                }
            } else {
                TDBox.style.opacity = 0;
            }*/
        }
       /*cubito.onscroll = (_:any) => {
           console.log(cubito.clientWidth)
            const scrolli = (cubito.scrollTop/ cubito.clientHeight) * 100;
            console.log(`X: ${cubito.clientWidth} Y: ${cubito.scrollTop}`)
            console.log(scrolli);
            boxi.style.left = `${scrolli}%`;
            let opacidad= (1-(scrolli / 100));
            boxi.style.opacity = `${opacidad}`;
        }*/

    }
    findInsideMe(selector: string, all = false) {
        const query = `#app #${this.component.id} ${selector}`;
        if (!all) {
            return document.querySelector(query);
        } else {
            return document.querySelectorAll(query);

        }
    }

    loadView() {
        require(`./${this.component.style}`);
        this.view = require(`./${this.component.view}`);
    }

    getView(): [string, DocumentFragment] {
        return [this.component.id, document.createRange().createContextualFragment(this.view)];
    }

    getTrainingName(n:number){
        // button click handler
     }

}
