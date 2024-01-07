import React from 'react';
import { motion } from 'framer-motion';

// Column 컴포넌트는 이미지 배열과 y 위치를 받아와서 렌더링합니다.
const Column = ({ images, y }) => {    

  return (
    // Framer Motion의 motion.div 컴포넌트를 사용하여 애니메이션을 추가한 div 요소입니다.
    <motion.div className='column' style={{ y }}>
        {
            // map을 사용하여 받아온 images를 뿌립니다.
            images.map((img, index) => {
                return (
                    <div key={index} className='imgBox'>
                        <img src={img} alt='img_card' />
                    </div>
                );
            })
        }
    </motion.div>
  );
}

export default Column;
