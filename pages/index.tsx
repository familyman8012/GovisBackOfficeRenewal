import { useState, useEffect, SyntheticEvent, ReactElement } from 'react';
import dayjs from 'dayjs';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchMyInfo, fetchMyPermissions, fetchlogin } from '@ApiFarm/auth';
import { fetchEnvironment } from '@ApiFarm/environment';
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

  const handlerGetEnviroment = () => {
    fetchEnvironment();
  };

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

      runInAction(() => {
        authStore.login({
          token: tokenData['GO-AUTH'],
          ...authData,
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

                  <Button
                    type="button"
                    color="primary"
                    onClick={handlerGetEnviroment}
                  >
                    전체메뉴가져오기
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

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <div className="app__wrapper">{page}</div>
    </>
  );
};
