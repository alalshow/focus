/*eslint-disable*/
import React from 'react';

// reactstrap components
import { Container, Button } from 'reactstrap';
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          'translate3d(0,' + windowScrollTop + 'px,0)';
      };
      window.addEventListener('scroll', updateScroll);
      return function cleanup() {
        window.removeEventListener('scroll', updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: 'url(' + require('assets/img/header.jpg') + ')',
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 id="focus-logo" className="h1-seo">
              Focus-Logo-Location
            </h1>
            <div id="label-container"></div>
            <div id="webcam-container"></div>
            <Button
              id="start-btn"
              color="info"
              size="lg"
              onClick={() => {
                init();
              }}
            >
              Start
            </Button>
            <Button
              id="stop-btn"
              color="danger"
              style={{ display: 'none' }}
              size="lg"
              onClick={() => {
                stop();
              }}
            >
              Stop
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
