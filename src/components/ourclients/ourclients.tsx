import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './ourclients.module.css';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ClientLogo1 from '../../assets/client/client1.png';
import ClientLogo2 from '../../assets/client/client2.png';
import ClientLogo3 from '../../assets/client/client3.png';
import ClientLogo4 from '../../assets/client/client4.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const clients = [
  {
    id: 1,
    name: 'Alkem Laboratories Limited',
    logo: ClientLogo1,
    project: 'Office Interior',
    testimonial: 'Exceptional craftsmanship and attention to detail. Transformed our workspace completely.'
  },
  {
    id: 2,
    name: 'Cachet Pharmaceuticals',
    logo: ClientLogo2,
    project: 'Hotel Renovation',
    testimonial: 'Professional team with outstanding design sense. Delivered beyond expectations.'
  },
  {
    id: 3,
    name: 'Venus Remedies Limited',
    logo: ClientLogo3,
    project: 'Residential Complex',
    testimonial: 'Innovative solutions and timely delivery. A pleasure to work with.'
  },
  {
    id: 4,
    name: 'Scorpion Group',
    logo: ClientLogo4,
    project: 'Commercial Space',
    testimonial: 'Excellent work on our commercial space. Modern designs with practical solutions.'
  }
];

const OurClients = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.clientSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleAccent}>Clients</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionDescription}>
            We take pride in serving prestigious clients across various sectors
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <button 
            className={`${styles.navigationButton} ${styles.prevButton}`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <button 
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={1000}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className={styles.swiper}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <div className={styles.clientCard}>
                  <div className={styles.logoContainer}>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={120}
                      height={60}
                      className={styles.clientLogo}
                      priority
                    />
                  </div>
                  <div className={styles.clientInfo}>
                    <h3 className={styles.clientName}>{client.name}</h3>
                    <p className={styles.projectType}>{client.project}</p>
                    <div className={styles.testimonialWrapper}>
                      <FaQuoteRight className={styles.quoteIcon} />
                      <p className={styles.testimonial}>{client.testimonial}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurClients;