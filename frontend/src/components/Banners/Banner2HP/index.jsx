import React from 'react';
import BannerHP from '../index';
import Banner2HP from  "../../../assets/banners/Banner2HP.png";

function BannerDoisHP() {
  const handlePromoClick = () => {
    alert('Promoção Aproveitada!');
  };

  return (
    <BannerHP 
      image={Banner2HP} 
      buttonText="Aproveitar Promoção" 
      onClickPromo={handlePromoClick} 
    />
  );
}

export default BannerDoisHP;
