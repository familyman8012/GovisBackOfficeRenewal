import { useState, useEffect, SyntheticEvent, ReactElement } from 'react';
import Cookies from 'js-cookie';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchMyInfo, fetchMyPermissions, fetchlogin } from '@ApiFarm/auth';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { authStore } from '@MobxFarm/store';

const LoginWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .login__content {
    width: 50rem;
    height: 50rem;
  }

  .login__input-wrapper:nth-of-type(2) {
    display: block;
    margin: 30px 0;
  }
`;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginState, setIsLoginState] = useState(-1);
  const [showGuideModal] = useState(false);

  // 로그인에 따른 화면 전환
  useEffect(() => {
    if (authStore.isLoggedIn) {
      setIsLoginState(1);
    } else {
      setIsLoginState(0);
    }
  }, [router]);

  // 로그인 후 permission
  useQuery(['my-permission'], () => fetchMyPermissions(), {
    // eslint-disable-next-line consistent-return
    onSuccess: (data: any) => {
      if (data.permission.length === 0) {
        return authStore.logOut();
      }

      runInAction(() => {
        authStore.permissionList = data.permission;
        authStore.is_staff = data.is_staff;
      });
    },
    onError: () => authStore.logOut(),
    enabled: !!authStore.isLoggedIn,
  });

  // 로그인 핸들링
  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const tokenData = await fetchlogin({
        email,
        password,
      });

      const authData = await fetchMyInfo(tokenData['GO-AUTH']);

      const cookieData = { ...authData };
      const chkhost =
        typeof window !== 'undefined' ? window?.location?.host : null;

      if (
        cookieData.permission &&
        Array.isArray(cookieData.permission.perm_list)
      ) {
        cookieData.permission.perm_list = cookieData.permission.perm_list.map(
          (item: any) => ({ perm_code: item.perm_code })
        );
      }

      Cookies.set(
        'AUTH_DATA',
        JSON.stringify({
          token: tokenData['GO-AUTH'],
          ...cookieData,
        }),
        {
          secure: true,
          domain:
            chkhost?.indexOf('localhost') !== -1 ? undefined : '.gopizza.kr',
          sameSite: 'none',
          path: '/',
        }
      );

      runInAction(() => {
        authStore.login({
          token: tokenData['GO-AUTH'],
          ...authData,
        });

        // router.push('/product');
      });
    } catch (error: any) {
      console.log('e', error);
    }
  };

  useEffect(() => {
    console.log('aaa');
    console.log('Cookie', JSON.parse(Cookies.get('AUTH_DATA') || '{}'));
  }, []);

  if (isLoginState === -1) {
    return <div />;
  }

  if (isLoginState !== -1 && isLoginState !== 0) {
    // router.push('/product');
  }

  return (
    <>
      {/* {isLoginState === 0 ? ( */}
      <>
        <LoginWrap>
          <div className="login__content">
            <div className="login__card">
              <h1 className="login__logo">
                {/* <img src="/images/main-logo.png" alt="GOVIS for Back-office" /> */}
              </h1>
              <form className="login__form" onSubmit={handleLogin}>
                <div className="login__input-wrapper">
                  <label className="login__label" htmlFor="email">
                    아이디
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="inp"
                    placeholder="발급받은 이메일 계정을 입력해 주세요."
                    value={String(email)}
                    autoComplete="username"
                    onChange={event => setEmail(event.target.value)}
                  />
                </div>
                <div className="login__input-wrapper">
                  <label className="login__label" htmlFor="pw">
                    비밀번호
                  </label>
                  <input
                    className="inp"
                    type="password"
                    id="pw"
                    value={password}
                    placeholder="비밀번호를 입력해 주세요."
                    autoComplete="current-password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </div>
                <div className="login__action">
                  {/* <Button
                    // leftIcon={<QuestionCircle />}
                    type="button"
                    // clear

                    onClick={() => setShowGuideModal(true)}
                  >
                    이용 안내
                  </Button> */}
                  <Button type="submit" variant="primary">
                    로그인
                  </Button>

                  {/* <Button type="button">전체메뉴가져오기</Button> */}
                </div>
              </form>
              {/* <p
                id="copyright"
                className="text-typo-3 gv-text-center gv-typo-body-2 gv-font-kr"
              >
                Copyright {dayjs().year()}. GOPIZZA. All rights reserved.
              </p> */}
            </div>
          </div>
          {showGuideModal && 1}
          {/* <LoginGuideModal
            show={showGuideModal}
            onClose={() => setShowGuideModal(false)}
          /> */}
        </LoginWrap>
      </>
      {/* ) : (
        <div />
      )} */}
    </>
  );
};

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div className="app__wrapper">{page}</div>
    </>
  );
};
