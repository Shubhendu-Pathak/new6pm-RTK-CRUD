import React from 'react'

function Loader() {
  return  <div className="">
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><linearGradient id='a12'><stop offset='0' stop-color='#FF156D' stop-opacity='0'></stop><stop offset='1' stop-color='#FF156D'></stop></linearGradient><circle fill='none' stroke='url(#a12)' stroke-width='14' stroke-linecap='round' stroke-dasharray='0 44 0 44 0 44 0 44 0 360' cx='100' cy='100' r='70' transform-origin='center'><animateTransform type='rotate' attributeName='transform' calcMode='discrete' dur='2' values='360;324;288;252;216;180;144;108;72;36' repeatCount='indefinite'></animateTransform></circle></svg>
  </div>

}

export default Loader