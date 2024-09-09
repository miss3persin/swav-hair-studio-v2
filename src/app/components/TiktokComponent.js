'use client'

// This annoying tiktok component and script was devastating to implement

//can't even comment it properly

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import heart_comment from '/public/heart_comment.png';
import comment_comment from '/public/comment_comment.png';
import user_img from '/public/user_1_vid_1_swav.jpg';
import user_img_1 from '/public/user_1_vid_2_swav.jpeg';
import user_img_2 from '/public/user_1_vid_3_swav.jpg';
import user_img_3 from '/public/user_2_vid_3_swav.jpg';
import heart_icon from '/public/heart_icon.png';
import comment_icon from '/public/comment_icon.png';
import share_icon from '/public/share_icon.png';
import more_icon from '/public/more_icon.png';

export const TiktokComponent = () => {
  const videoUrl = '/swav_video_2.mp4';
  const videoUrl_1 = '/swav_video_1.mp4';
  const videoUrl_2 = '/swav_video_3.mp4';

  const [activeContainers, setActiveContainers] = useState([
    'video-player-container__left',
    'video-player',
    'video-player-container__right',
  ]);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(1);

  const videoRefs = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
  };

  const isElementInView = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleVideoPlayback = () => {
    Object.keys(videoRefs).forEach((index) => {
      const videoElement = videoRefs[index].current;
      if (videoElement) {
        if (parseInt(index) === playingVideoIndex && isElementInView(videoElement)) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    });
  };
  

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        Object.values(videoRefs).forEach((ref) => ref.current?.pause());
      } else {
        handleVideoPlayback();
      }
    };

    const handleScroll = () => {
      handleVideoPlayback();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [playingVideoIndex]);

  useEffect(() => {
    handleVideoPlayback();
  
    setTimeout(() => {
      const activeVideoElement = videoRefs[playingVideoIndex]?.current;
      if (activeVideoElement && isElementInView(activeVideoElement)) {
        activeVideoElement.play();
      }
    }, 100);
  }, [activeContainers, playingVideoIndex]);

  const handleDivClick = () => {
    window.open('https://www.tiktok.com/@swavhairstudio', '_blank');
  };

  const handleNavClick = (direction) => {
    const newContainers =
      direction === 'prev'
        ? [activeContainers[1], activeContainers[2], activeContainers[0]]
        : [activeContainers[2], activeContainers[0], activeContainers[1]];
  
    setActiveContainers(newContainers);
    const newIndex = newContainers.indexOf('video-player');
    setPlayingVideoIndex(newIndex);
  
    setTimeout(() => {
      Object.keys(videoRefs).forEach((index) => {
        const videoElement = videoRefs[index].current;
        if (videoElement) {
          if (parseInt(index) === newIndex) {
            videoElement.play();
          } else {
            videoElement.pause();
          }
        }
      });
    }, 100);
  };
  

  return (
    <div className='tiktok-section-container__config'>
      <div className='video-player-container__main'>
        <div
          className='previous-click hoverable'
          onClick={() => handleNavClick('prev')}
        ></div>
        <div
          className='next-click hoverable'
          onClick={() => handleNavClick('next')}
        ></div>

        <div className='video-player-container'>


          {/* first video */}
        
          <div onClick={handleDivClick} className={`${activeContainers[0]} hoverable`}>
            <div className='video'>
              <video
                ref={videoRefs[0]}
                className='h-full w-full object-cover'
                src={videoUrl_1}
                width={100}
                height={100}
                autoPlay={true}
                loop
              />
          
            </div>
            <div className='comments-section'>
              <div className='comments-header'>
                <h3>Views - 2288</h3>
              </div>
              <div className='comments'>
                <div className='comment'>
                  <div className='user-comment-container'>
                    <div className='comment-img w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={user_img_2} alt='user' className='object-cover w-full h-full' />
                    </div>

                    <div className='comment-info'>
                      <p className='user'>Kristen-Luxiscents</p>
                      <p className='actual-comment'>
                      Can I book appointment please?
                      </p>
                    </div>
                  </div>

                  <div className='like-n-comment'>
                    <Image src={comment_comment} alt='comments' />
                    <Image src={heart_comment} alt='likes' />
                  </div>
                </div>

                <div className='comment'>
                  <div className='user-comment-container'>
                    <div className='comment-img w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={user_img_3} alt='user' className='object-cover w-full h-full'/>
                    </div>

                    <div className='comment-info'>
                      <p className='user'>AntNation</p>
                      <p className='actual-comment'>
                      Hard trim🔥
                      </p>
                    </div>
                  </div>
                  <div className='like-n-comment'>
                    <Image src={comment_comment} alt='comments' />
                    <Image src={heart_comment} alt='likes' />
                  </div>
                </div>

              </div>
              <div className='transition-block'></div>
            </div>
          </div>

          {/* second video */}

          <div onClick={handleDivClick} className={`${activeContainers[1]} hoverable`}>
            <div className='video'>
            <video
                ref={videoRefs[1]}
                className='h-full w-full object-cover'
                src={videoUrl}
                width={100}
                height={100}
                autoPlay={true}
                loop
              />

            </div>
            <div className='comments-section'>
              <div className='comments-header'>
                <h3>Views - 874</h3>
              </div>
              <div className='comments'>
                <div className='comment'>
                  <div className='user-comment-container'>
                    <div className='comment-img w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={user_img} alt='user' className='object-cover w-full h-full'/>
                    </div>

                    <div className='comment-info'>
                      <p className='user'>Samy</p>
                      <p className='actual-comment'>
                        Fire bro🤩
                      </p>
                    </div>
                  </div>

                  <div className='like-n-comment'>
                    <Image src={comment_comment} alt='comments' />
                    <Image src={heart_comment} alt='likes' />
                  </div>
                </div>

               
              </div>
              <div className='transition-block'></div>
            </div>
          </div>

          {/* third video */}

          <div onClick={handleDivClick} className={`${activeContainers[2]} hoverable`}>
            <div className='video'>
            <video
                ref={videoRefs[2]}
                className='h-full w-full object-cover'
                src={videoUrl_2}
                width={100}
                height={100}
                autoPlay={true}
                loop
              />

            </div>
            <div className='comments-section'>
              <div className='comments-header'>
                <h3>Views - 777</h3>
              </div>
              <div className='comments'>
                <div className='comment'>
                  <div className='user-comment-container'>
                    <div className='comment-img w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={user_img_1} alt='user' className='object-cover w-full h-full'/>
                    </div>

                    <div className='comment-info'>
                      <p className='user'>Ib Ziyad</p>
                      <p className='actual-comment'>
                        i'm down!
                      </p>
                    </div>
                  </div>

                  <div className='like-n-comment'>
                    <Image src={comment_comment} alt='comments' />
                    <Image src={heart_comment} alt='likes' />
                  </div>
                </div>

                <div className='comment'>
                  <div className='user-comment-container'>
                    <div className='comment-img w-10 h-10 rounded-full overflow-hidden'>
                      <Image src={user_img_1} alt='user' className='object-cover w-full h-full'/>
                    </div>

                    <div className='comment-info'>
                      <p className='user'>Ib Ziyad</p>
                      <p className='actual-comment'>
                        me. pick me
                      </p>
                    </div>
                  </div>
                  <div className='like-n-comment'>
                    <Image src={comment_comment} alt='comments' />
                    <Image src={heart_comment} alt='likes' />
                  </div>
                </div>

              </div>
              <div className='transition-block'></div>
            </div>
          </div>

          <div className='controls'>
            <button>
              <Image src={heart_icon} alt='likes' />
              422+
            </button>
            <button>
              <Image src={comment_icon} alt='comments' /> 10+
            </button>
            <button>
              <Image src={share_icon} alt='share' /> 10+
            </button>
            <button>
              <Image src={more_icon} alt='see more' />
            </button>
          </div>
          
          <div className='navbar'>
            <div
              className='nav-prev hoverable'
              onClick={() => handleNavClick('prev')}
            ></div>
            <div className='nav-indicator'></div>
            <div
              className='nav-next hoverable'
              onClick={() => handleNavClick('next')}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
