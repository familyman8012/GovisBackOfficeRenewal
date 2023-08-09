import { useState, useEffect, SyntheticEvent } from 'react';
import dayjs from 'dayjs';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchMyInfo, fetchMyPermissions, login } from '@ApiFarm/auth';
import { authStore } from '@MobxFarm/store';

const LoginWrap = styled.div``;
const FormInput = styled.input``;
const Button = styled.button``;

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginState, setIsLoginState] = useState(-1);
  const [showGuideModal, setShowGuideModal] = useState(false);

  useQuery(
    ['my-permission', authStore.user_info?.user_idx],
    () => fetchMyPermissions(),
    {
      // eslint-disable-next-line consistent-return
      onSuccess: (data: any) => {
        if (data.permission.length === 0) {
          return authStore.logOut();
        }

        runInAction(() => {
          authStore.permission = data.permission;
          authStore.is_staff = data.is_staff;
        });
      },
      onError: () => authStore.logOut(),
      enabled: !!authStore.isLoggedIn,
    }
  );

  useEffect(() => {
    if (authStore.isLoggedIn) {
      setIsLoginState(1);
    } else {
      setIsLoginState(0);
    }
  }, [router]);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const tokenData = await login({
        email,
        password,
      });

      const userInfo = await fetchMyInfo(tokenData['GO-AUTH']);

      runInAction(() => {
        authStore.login({
          token: tokenData['GO-AUTH'],
          ...userInfo,
        });

        router.push('/fc/coupons');
      });
    } catch (error: any) {
      console.log('e', error);
    }
  };

  if (isLoginState === -1) {
    return <div />;
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
              <form className="login__form" onSubmit={handleLogin}>
                <div className="login__input-wrapper">
                  <label className="login__label" htmlFor="email">
                    아이디
                  </label>
                  <FormInput
                    id="email"
                    className="mb-2"
                    placeholder="발급받은 이메일 계정을 입력해 주세요."
                    type="email"
                    value={String(email)}
                    autoComplete="username"
                    onChange={event => setEmail(event.target.value)}
                  />
                </div>
                <div className="login__input-wrapper">
                  <label className="login__label" htmlFor="pw">
                    비밀번호
                  </label>
                  <FormInput
                    id="pw"
                    className="mb-2"
                    type="password"
                    value={password}
                    placeholder="비밀번호를 입력해 주세요."
                    autoComplete="current-password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </div>
                <div className="login__action">
                  <Button
                    // leftIcon={<QuestionCircle />}
                    type="button"
                    // clear
                    color="add"
                    onClick={() => setShowGuideModal(true)}
                  >
                    이용 안내
                  </Button>
                  <Button type="submit" color="primary-2">
                    로그인
                  </Button>
                </div>
              </form>
              <p
                id="copyright"
                className="text-typo-3 gv-text-center gv-typo-body-2 gv-font-kr"
              >
                Copyright {dayjs().year()}. GOPIZZA. All rights reserved.
              </p>
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
