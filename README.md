# 세팅

npx create-react-app .    
npm i sass   
npm i framer-motion   

[Lenis  바로가기](https://github.com/studio-freight/lenis)   
npm i @studio-freight/lenis

   
    

## 부가 설명

* useScroll(Framer Motion)   

    useScroll 훅은 Framer Motion 라이브러리에서 제공되며, 스크롤 이벤트에 대한 정보를 얻을 수 있게 해주는 훅입니다. 주로 scrollYProgress와 같은 변수를 통해 스크롤 위치에 따른 값(0에서 1까지의 비율)을 가져올 수 있습니다.


  스크롤 위치는 0부터 1까지의 값을 가지며   
     
  0은 스크롤의 맨 위   
  1은 스크롤의 맨 아래를 의미합니다.

    ```js
    const { scrollYProgress } = useScroll({
        target: gallery, // 이벤트를 감지할 대상
        offset: ['start end', 'end start'] //이벤트를 감지할 대상 영역
    })
    ```
   

* useTransform(Framer Motion)

    useTransform 훅은 Framer Motion 라이브러리에서 제공되며 애니메이션을 위해 특정 입력 범위를 다른 출력 범위로 매핑하거나 변환하는 데 사용됩니다. 이 훅은 주로 useScroll이나 useTransform과 같은 다른 Framer Motion 훅과 함께 사용되어 스크롤 <b>위치, 입력 상태, 시간</b> 등 다양한 입력 값을 받아 출력 값을 만들어냅니다.

    useTransform 훅을 사용하면 입력 범위에서 출력 범위로 값을 변환시킬 수 있습니다. 

    ```js
    const y = useTransform(scrollYProgress, [0,1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0,1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0,1], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0,1], [0, height * 3]);
    ```

    y 변수는 scrollYProgress(스크롤 위치)의 값에 따라 [0, height] 사이의 값으로 매핑됩니다. 