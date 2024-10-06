'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/app/page.module.css';
import Button from './button';
import Image from 'next/image';
import Logo from '@/public/packpal-logo.svg';
import Link from 'next/link';
import burger from '@/public/burger.svg';
import close from '@/public/close.svg';
import Spacer from './spacer';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar'); // Add an ID to the sidebar
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setShowSidebar(false);
      }
    };

    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <div className={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src={Logo} alt="Logo" style={{ width: 50, height: 'auto' }} />
        <Link
          style={{
            color: 'var(--white)',
            fontFamily: 'OstrichSans',
            fontSize: 30,
            marginTop: 5,
          }}
          href={'/'}
        >
          PACKPAL.AI
        </Link>
      </div>
      <div className="hidden md:block ">
        <Link href={'/pricing'} style={{ marginRight: 15 }}>
          Pricing
        </Link>
        <Link href={'/how-it-works'} style={{ marginRight: 15 }}>
          How it Works
        </Link>

        <Button
          text={'Contact Us!'}
          type="secondary"
          link="mailto:hunter@chipp.ai"
        />
      </div>
      <div className="lg:hidden md:hidden">
        <Image
          src={burger}
          alt="Hamburger Icon"
          width="40"
          height="40"
          style={{ color: 'var(--white)' }}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        />
      </div>
      {showSidebar ? (
        <>
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'var(--white)',
              right: 0,
              top: 0,
              padding: 20,
              borderRadius: '10px 0px 0px 10px',
              height: '100vh',
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
            id="sidebar"
          >
            <Image
              src={close}
              alt="Hamburger Icon"
              width="40"
              height="40"
              style={{ color: 'var(--white)' }}
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
            />
            <Spacer height={20} />

            <Link
              href={'/pricing'}
              style={{ color: 'var(--brown)', fontSize: 20 }}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              Pricing
            </Link>
            <Spacer height={10} />

            <Link
              href={'/how-it-works'}
              style={{ color: 'var(--brown)', fontSize: 20 }}
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              How it Works
            </Link>
            <Spacer height={20} />

            <Button
              text={'Contact Us!'}
              type="primary"
              link="mailto:hunter@chipp.ai"
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
