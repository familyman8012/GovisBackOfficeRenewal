import { useState, useEffect, SyntheticEvent, ReactElement } from 'react';
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

  // 서버에서 메뉴 전체 데이터 제공하는 걸, 프론트에 맞게 변환 시키는 로직
  //   const { data } = useQuery(['totalMenu'], () => fetchPerm());
  // useEffect(() => {
  //   if (data) {
  //     transFormMenu(data);
  //   }
  // }, [data]);

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

      console.log('authData', authData);

      // const iframe = document.createElement('iframe');
      // iframe.src = 'http://localhost:3001';
      // document.body.prepend(iframe);

      // // iframe이 로드된 후 메시지 전송
      // iframe.onload = () => {
      //   console.log('iframe onloaded');
      //   const token = authData; // 로그인 토큰
      //   iframe?.contentWindow?.postMessage({ token }, 'http://localhost:3001');
      // };

      const iframeElement = document.getElementById('authIframe');
      if (iframeElement && (iframeElement as any).contentWindow) {
        const token = authData; // 로그인 토큰
        (iframeElement as any).contentWindow.postMessage(
          { token },
          'https://dev.govis.gopizza.kr'
        );
      }

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

  if (isLoginState === -1) {
    return <div />;
  }

  if (isLoginState !== -1 && isLoginState !== 0) {
    router.push('/product');
  }

  return (
    <>
      {isLoginState === 0 ? (
        <LoginWrap>
          <div className="login__content">
            <div className="login__card">
              <h1 className="login__logo">
                {/* <img src="/images/main-logo.png" alt="GOVIS for Back-office" /> */}
              </h1>
              <iframe
                id="authIframe"
                src="https://dev.govis.gopizza.kr"
                title="auth-sync"
                style={{ visibility: 'hidden' }} // 필요에 따라 숨기거나 다른 스타일 적용
              />
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
      ) : (
        <div />
      )}
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
