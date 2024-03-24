import React from 'react';
import Menu from '../components/Menu';
import Content from '../components/Content';

function Home() {
  return (
    <div className="flex m-12 h-auto drop-shadow-2xl justify-center">
      <Menu />
      <Content />
    </div>
  );
}

export default Home;
