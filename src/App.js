import React, { useEffect, useRef, useState } from 'react'
import "./assets/scss/style.scss"
import Column from './components/Column'
import Lenis from '@studio-freight/lenis'
import { useScroll, useTransform } from 'framer-motion'

// 이미지를 import 합니다
import img01 from "./assets/images/1.jpg"
import img02 from "./assets/images/2.jpg"
import img03 from "./assets/images/3.jpg"
import img04 from "./assets/images/4.jpg"
import img05 from "./assets/images/5.jpg"
import img06 from "./assets/images/6.jpg"
import img07 from "./assets/images/7.jpg"
import img08 from "./assets/images/8.jpg"
import img09 from "./assets/images/9.jpg"
import img10 from "./assets/images/10.jpg"
import img11 from "./assets/images/11.jpg"
import img12 from "./assets/images/12.jpg"

// 이미지들의 배열을 생성합니다.
const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12
]

const App = () => {

  // useRef를 사용해 DOM에 접근할 수 있는 ref = {gallery}를 생성합니다.
  const gallery = useRef(null);

  // 윈도우 치수를 state로 관리합니다.
  const [dimension, setDimension] = useState({width:0, height:0});
  const { height } = dimension;

  // Framer Motion의 useScroll 훅을 사용하여 스크롤 위치 정보를 가져옵니다.
 // 스크롤 위치는 0부터 1까지의 값을 가지며, 0은 스크롤의 맨 위, 1은 스크롤의 맨 아래를 의미합니다.

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })


  // Framer Motion 라이브러리의 useTransform 훅을 사용하여 scrollYProgress 변수를 새로운 변수 y로 변환하는 역할을 합니다.
  // 스크롤의 위치가 0에서 1 사이의 범위에서 변할 때, 그 값을 0에서 height * n 사이의 범위로 변환하여 반환하는 것을 의미합니다.
  const y = useTransform(scrollYProgress, [0,1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0,1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0,1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0,1], [0, height * 3]);

  // 윈도우 치수가 변경될 때마다 한 번 업데이트
  useEffect(() => {

    // Lenis
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 창 크기 변경 시 실행되는 함수
    const resize = () => {
        // 현재 창의 너비와 높이를 가져와서 상태 업데이트
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    // 창 크기 변경 이벤트 리스너 등록
    window.addEventListener("resize", resize);
    // 브라우저에게 애니메이션 프레임을 그리도록 요청하는 함수
    requestAnimationFrame(raf);
    resize();

    // 컴포넌트가 언마운트 될 때, 이벤트 리스너를 정리합니다. + 메모리 누수를 방지
    return () => {
        window.removeEventListener("resize", resize);
    };
}, []);


  return (
    <main className='main'>
      <div className='box'></div>
      <div ref={gallery} className='gallery'>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className='box'></div>
    </main>
  )
}

export default App