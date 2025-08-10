import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './OurTeam.module.css';
import { FaChevronLeft, FaChevronRight, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import TeamMember1 from '../../assets/teams/1.webp'

import 'swiper/css';
import 'swiper/css/navigation';

const teamMembers = [
  {
    id: 1,
    name: 'Mr. S.S. Sharma',
    position: 'Commercial Designer',
    image: TeamMember1,
    expertise: 'Commercial Designer',
    experience: '20+ years',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'john@sharmainteriors.com'
  }
];

const OurTeam = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleAccent}>Team</span>
          </h2>
          <div className={styles.headerLine}></div>
          <p className={styles.sectionDescription}>
            Meet our talented team of professionals dedicated to bringing your vision to life
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
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className={styles.teamCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={400}
                      className={styles.memberImage}
                      priority
                    />
                    <div className={styles.socialOverlay}>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className={styles.socialLink}
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberPosition}>{member.position}</p>
                    <div className={styles.infoGrid}>
                      <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Expertise</span>
                        <span className={styles.infoValue}>{member.expertise}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Experience</span>
                        <span className={styles.infoValue}>{member.experience}</span>
                      </div>
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

export default OurTeam;