require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据

let imageDatas = require('../data/images.json');


/*function genImageURL(imageDatasArr) {
  for (let i =0, j = imageDatasArr.length; i<j; i++){
    let singleImageData = imgageDateArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData[i].fileName);
    imageDatasArr[i] = singleImageData;

  }

  return imageDatasArr;
}

imageDatas = genImageURL(imageDatas);*/

//利用自执行函数，将图片信息转化为图片url信息

imageDatas = ((imageDatasArr) => {
  for(let i=0, j=imageDatasArr.length; i<j; i++){
    let singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/'+singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
       <section className="stage">
         <section className="img-sec">

         </section>
         <nav className="controller-nav">

         </nav>
       </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
