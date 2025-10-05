import React from 'react';
import bookImg from '../../assets/books.jpg';


const Banner = () => {
    return (
       <div class="hero bg-base-200 h-[80vh]">
  <div class="hero-content flex-col lg:flex-row-reverse gap-20">
    <img
      src= {bookImg}
      class="w-6xl rounded-lg shadow-2xl"
    />
    <div>
      <h1 class="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button class="bg-green-600 text-white text-lg px-10 py-2 rounded-sm">Order Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;