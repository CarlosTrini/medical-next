import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/modules/layouts/mainLayout.module.scss';

const MainLayout = ({ children }) => {
  const router = useRouter();

  const [showOpt, setShowOpt] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const [showMenuResp, setshowMenuResp] = useState(false);

  const handleOptions = () => setShowOpt(!showOpt);
  const handleCollapse = () => setCollapse(!collapse);
  const handleToggleRes = () => setshowMenuResp(!showMenuResp);

  // add the active class in the link
  useEffect(() => {
    const links = ['dashboard', 'profile', 'patients', 'doctors', 'schedule'];
    const currentPath = router.pathname;
    for (const link of links) {
      if (currentPath.indexOf(link) !== -1) {
        document.getElementById(link).classList.add(styles.aside_active);
        break;
      }
    }
  }, [router.pathname]);

  return (
    <>
      <header className={` sys_txt_light ${styles.header}`}>
        <div className={`sys_container ps-2`}>
          <div className={`${styles.header_title}`}>
            <Image
              src='/images/icons/simbol.svg'
              alt='medical icon'
              width={20}
              height={20}
            />
            <h1 className='fs-6  sys_txt_light'>Social Medical</h1>
          </div>

          <div className={`${styles.header_info}`}>
            <div
              className={`d-flex justify-content-between align-items-center`}
            >
              <button
                className={`${styles.header_collapse}  sys_reset_button`}
                title='Ocultar Menú'
                onClick={handleCollapse}
              >
                <Image
                  src='/images/icons/hamburguer.svg'
                  alt='ocultar menú button'
                  width={30}
                  height={30}
                />
              </button>
              <section className='d-flex gap-3 justify-content-end  w-100 '>
                <div>
                  <p className='fw-bold sys_fs_12'>
                    Atendidos: <span>5</span>
                  </p>
                  <p className='fw-bold  sys_fs_12'>
                    Agendados: <span>10</span>
                  </p>
                </div>
                <button className='sys_reset_button' title='salir'>
                  <Image
                    src='/images/icons/door.svg'
                    alt='cerrar sesión button'
                    width={30}
                    height={30}
                  />
                </button>
              </section>
            </div>

            <div>
              <div
                className={`d-flex justify-content-between align-items-center mt-1 ${
                  styles.header_left
                } ${collapse && styles.header_move_left}`}
              >
                <section>
                  <h3 className=' sys_txt_light fw-bold'>Dr. Takeshi</h3>
                  <h4 className='sys_txt_info'>Pediatra</h4>
                </section>
                <section className='sys_txt_light d-flex gap-3'>
                  <h2 className='fw-bold sys_txt_light'>Dasboard</h2>
                </section>
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className={`${styles.aside} ${collapse && styles.aside_hide} ${showMenuResp && styles.aside_show_resp}`}>
        <div className='text-center mt-2'>
          <Image
            src='/images/avatar.svg'
            alt='foto perfil'
            width={collapse ? 25 : 35}
            height={collapse ? 25 : 35}
            className={`${styles.aside_avatar}`}
          />
          <div className='d-flex justify-content-center'>
            {!collapse && (
              <p
                className={`fw-bold sys_txt_light sys_fs_12 me-2`}
              >
                Bienvenid@
              </p>
            )}

            <button className='sys_reset_button' onClick={handleOptions}>
              <Image
                src='/images/icons/down.svg'
                alt='dashboard icon'
                width={10}
                height={15}
              />
            </button>

            {/* menu button */}
            <div
              className={`${styles.aside_options} ${
                collapse && styles.aside_options_responsive
              } ${showOpt && styles.aside_options_show} `}
            >
              <ul>
                <li className='mb-2'>
                  <Link href='#'>
                    <a>Perfil</a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a>Salir</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className='sys_bg_light' />
        </div>
        <div>
          {/* MENU NO RESPONSIVE */}
          <ul className={`${styles.aside_links}`}>
            <li>
              <Link href='/medical/dashboard' passHref>
                <a id='dashboard'>
                  <Image
                    src='/images/icons/dash.svg'
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                  {!collapse && (
                    <span className={`${styles.aside_link}`}>Dashboard</span>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/medical/profile/update' passHref>
                <a id='profile'>
                  <Image
                    src='/images/icons/user.svg'
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                  {!collapse && (
                    <span className={`${styles.aside_link}`}>Perfil</span>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/medical/patients'>
                <a id='patients'>
                  <Image
                    src='/images/icons/users.svg'
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                  {!collapse && (
                    <span className={`${styles.aside_link}`}>Pacientes</span>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/medical/doctors'>
                <a id='doctors'>
                  <Image
                    src='/images/icons/medical.svg'
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                  {!collapse && (
                    <span className={`${styles.aside_link}`}>Médicos</span>
                  )}
                </a>
              </Link>
            </li>
            <li>
              <Link href='/medical/book'>
                <a id='schedule'>
                  <Image
                    src='/images/icons/book.svg'
                    alt='dashboard icon'
                    width={15}
                    height={15}
                  />
                  {!collapse && (
                    <span className={`${styles.aside_link}`}>Agenda</span>
                  )}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className={`${styles.main} ${collapse && styles.main_collapse}`}>
        {children}
      </main>

      <footer className={`${styles.footer}`}>
        <button className={`${styles.reset_button} ${styles.menu_responsive}`}
        onClick={handleToggleRes}
        >
          <img src='/images/icons/hamburguer.svg' alt="show menu responsive"/>
        </button>
      </footer>
    </>
  );
};

export default MainLayout;
