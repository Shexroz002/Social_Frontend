import './style.css'
export default function Theme(props){
    const {openshow,showTeheme} = props;
    var root = document.querySelector(':root');
    // const theme = document.querySelector('#theme');
    // const themeModal = document.querySelector('.customize-theme');
    const colorPalette = document.querySelectorAll('.choose-color span');
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
    };

    const removeSizeSelector = () => {
        const fontSizes = document.querySelectorAll('.choose-size span');
        fontSizes.forEach(size => {
            size.classList.remove('active');
        })
    };
    
const FontSizeFunction =(e)=>{
    let size = e.target;
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }

    document.querySelector('html').style.fontSize = fontSize;
}
            
       

    const changeActiveColorClass = () => {
        colorPalette.forEach(colorPicker => {
            colorPicker.classList.remove('active');
        })
    };

const colorPalettefunction =(e)=>{
    let color = e.target;
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1')){
        primaryHue = 252;
    }else if(color.classList.contains('color-2')){
        primaryHue = 52;
    }else if(color.classList.contains('color-3')){
        primaryHue = 352;
    }else if(color.classList.contains('color-4')){
        primaryHue = 152;
    }else if(color.classList.contains('color-5')){
        primaryHue = 202;
    }
    color.classList.add('active');

    root.style.setProperty('--color-primary-hue', primaryHue);
}
    


    // const closeThemeModal = (e) => {
    //     if(e.target.classList.contains('customize-theme')){
    //         themeModal.style.display = 'none';
    //     }
    // }

    // theme.addEventListener('click', openThemeModal);

    function BG1(){
        const Bg1 = document.querySelector('.bg-1');
        const Bg2 = document.querySelector('.bg-2');
        const Bg3 = document.querySelector('.bg-3');
        Bg1.classList.add('active');
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        darkColorLightness = '17%';
        whiteColorLightness = '95%';
        lightColorLightness = '100%';

        changeBG();
        // window.location.reload();
    }

    function BG2(){
        const Bg1 = document.querySelector('.bg-1');
        const Bg2 = document.querySelector('.bg-2');
        const Bg3 = document.querySelector('.bg-3');
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        Bg2.classList.add('active');

        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
    }
    function BG3(){
        const Bg1 = document.querySelector('.bg-1');
        const Bg2 = document.querySelector('.bg-2');
        const Bg3 = document.querySelector('.bg-3');
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        Bg3.classList.add('active');

        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
        changeBG();
    }

    return(
        <div  className="customize-theme" style={{display:openshow ?'grid' : 'none'}} >
    <div className="card">
    <h1 onClick={showTeheme}  style={{display:'block',textAlign: 'right'}}><i  className="uil uil-exit"></i></h1> 
        <h2>Customize your view</h2>
        <p className="text-muted">Manage your font size, color, and background.</p>

        <div className="font-size">
            <h4>Font Size</h4>
            <div>
                <h6>Aa</h6>
                <div className="choose-size">
                    <span onClick={FontSizeFunction} className="font-size-1"></span>
                    <span onClick={FontSizeFunction} className="font-size-2"></span>
                    <span onClick={FontSizeFunction} className="font-size-3 active"></span>
                    <span onClick={FontSizeFunction} className="font-size-4"></span>
                    <span onClick={FontSizeFunction} className="font-size-5"></span>
                </div>
                <h3>Aa</h3>
            </div>
        </div>

        <div className="color">
            <h4>Color</h4>
            <div className="choose-color">
                <span onClick={colorPalettefunction} className="color-1 active"></span>
                <span onClick={colorPalettefunction} className="color-2"></span>
                <span onClick={colorPalettefunction} className="color-3"></span>
                <span onClick={colorPalettefunction} className="color-4"></span>
                <span onClick={colorPalettefunction} className="color-5"></span>
            </div>
        </div>

        <div className="background">
            <h4>Background</h4>
            <div className="choose-bg">
                <div onClick={BG1} className="bg-1 active">
                    <span></span>
                    <h5 for="bg-1">Light</h5>
                </div>
                <div onClick={BG2} className="bg-2">
                    <span></span>
                    <h5>Dim</h5>
                </div>
                <div onClick={BG3} className="bg-3">
                    <span></span>
                    <h5 for="bg-3">Light Out</h5>
                </div>
            </div>
        </div>

    </div>
</div>
    )
}