import { useState, useEffect} from "react";
import "./ChangeStyle.css"

export default function Change(){
    // const playImg = ref("");
	// 	const images = import.meta.globEager(
	// 		require("../../../../assets/Test/CIFAR10_ResNet/Bounce/untargeted_l2/Sample1/*.jpg")
	// 	);
    // const ImgTag = ref(0);
    // const playImg2 = ref("");
    // const images2 = import.meta.globEager(
    //     require("../../../../assets/Test/CIFAR10_ResNet/HSJA/untargeted_l2/Sample1/*.jpg")
    // );
    // 导入所有图片
    const images = [];
    const importAll = (r) => r.keys().forEach((key) => images.push(r(key)));
    importAll(require.context("../../../../assets/Testnew/CIFAR10_ResNet/Bounce/Sample1/", false, /\.jpg$/));
    // console.log(images);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1){
                clearInterval(intervalId);
            }else{
                setCurrentIndex(currentIndex + 1);
            }
        }, 2000);
    
        return () => clearInterval(intervalId);
    }, []);
    const images2 = [];
    const importAll2 = (r) => r.keys().forEach((key) => images2.push(r(key)));
    importAll2(require.context("../../../../assets/Testnew/CIFAR10_ResNet/HSJA/Sample1", false, /\.jpg$/));
    // console.log(images2);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    useEffect(() => {
        const intervalId2 = setInterval(() => {
            if (currentIndex2 === images2.length - 1){
                clearInterval(intervalId2);
            }else{
                setCurrentIndex2(currentIndex2 + 1);
            }
        }, 2000);
    
        return () => clearInterval(intervalId2);
    }, []);
    return (
        <>
            <div id="change">
                <div className="images">
                    <img src={images[currentIndex]} alt="pic" />
                    <img src={images2[currentIndex2]} alt="pic" />
                </div>
            </div>
        </>
    );
}