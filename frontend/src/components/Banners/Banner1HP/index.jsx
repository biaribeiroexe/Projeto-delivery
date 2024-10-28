import React from 'react';
import BannerHP from '../index';
import ImagemBannerUm from  "../../../assets/banners/hamburguerBanner.png";

function BannerUmHP() {
  const handlePromoClick = () => {
    alert('Promoção Aproveitada!');
  };

  return (
    <BannerHP 
      image={ImagemBannerUm} 
      buttonText="Aproveitar Promoção" 
      onClickPromo={handlePromoClick} 
    />
  );
}

export default BannerUmHP;
