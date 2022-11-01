import { Box, ButtonGroup, Grid } from '@mui/material';
import bg1 from './bg1.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from '@mui/icons-material';
import ItemsCarousel from 'react-items-carousel';
import { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import nexticon from './nexticon.png';
import previcon from './previcon.png';



function MainCarousel() {
  const ref = useRef(null);

  const images = [
    bg1,
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slideNext = () => {
    ref.current.slideNext();
  };

  const slidePrev = () => {
    ref.current.slidePrev();
  };
  const onSlideChanged = (e) => {
    setCurrentIndex(e.item);
  }

  const items = images.map((item, i) => <div key={i} style={{backgroundImage: `url(${item})`, width: '162px', height: '78px', backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', margin: 'auto',
  borderRadius: '22px',
  border: i === currentIndex ? " 3px solid #fff" : '2px solid rgba(255, 255, 255, 0.19)',

  }}></div>)


  return (
      <Box sx={{backgroundImage: `url(${images[currentIndex]})`, height: { xs: '60vh', md: '85.6vh',  } , backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        height="100%"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{marginBottom: '85px'}}
        > 
        <Grid xs={2}>
          <img src={previcon} style={{cursor: 'pointer'}} onClick={slidePrev} />
        </Grid>
        <Grid xs={7}>
            <AliceCarousel
              items={items}
              ref={ref}
              // autoPlayInterval={3000}
              //   animationDuration={500}
              //   autoPlay={true}
              //   infinite={true}
              mouseTracking
              disableDotsControls
              activeIndex={currentIndex}
              dotsDisabled={true}
              disableButtonsControls
              onSlideChanged={onSlideChanged}
              responsive={
                  {
                    520: {
                    items: 1
                    },
                    680: {
                      items: 2,
                  },
                  1024: {
                      items: 3
                  },
                  1320: {
                    items: 4
                  }
                    
                  }}
            />
              
            {/* { images.map((item, i) => <div key={i} style={{backgroundImage: `url(${item})`, width: '162px', height: '78px', backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat', margin: 'auto',
              borderRadius: '22px',
              border: i === currentIndex ? " 3px solid #fff" : '2px solid rgba(255, 255, 255, 0.19)',

            }}></div>)}
                
            </AliceCarousel> */}
        </Grid>
        <Grid xs={2} style={{height: '100%'}}>
        <img src={nexticon} style={{cursor: 'pointer'}} onClick={slideNext}  />
        </Grid>
        </Grid>
        </Grid>
      </Box>
  );
}

export default MainCarousel;
