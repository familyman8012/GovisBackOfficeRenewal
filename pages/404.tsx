import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Goivs2Menu } from '@ComponentFarm/layout/MenuData';

const NotAccess = () => {
  const router = useRouter();
  const isLocalDev = window.location.host.includes('localhost');
  const currentUrl = `/${router.asPath.split('/')[1].split('?')[0]}`;

  if (!isLocalDev && !Goivs2Menu.includes(currentUrl)) {
    return (
      <>
        <Head>
          <title>Redirecting...</title>
        </Head>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Not Found | GOVIS For Backoffice</title>
      </Head>
      <section className="error-template">
        <h2>
          잘못된 경로이거나 <br />
          비정상적 접근입니다.
        </h2>
        <p className="mb-3">이용에 불편을 드려 죄송합니다.</p>
        <Button onClick={() => router.replace('/')}>홈으로 이동</Button>
      </section>
    </>
  );
};

export default NotAccess;
