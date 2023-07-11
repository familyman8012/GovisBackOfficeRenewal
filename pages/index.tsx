import { useState, useEffect, SyntheticEvent, ReactElement } from 'react';
import dayjs from 'dayjs';
import { runInAction } from 'mobx';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import { BoRequest } from '@ApiFarm/index';
import { authStore } from '@MobxFarm/store';
import { errorHandler } from '@UtilFarm/error-handler';

const LoginWrap = styled.div``;
const FormInput = styled.input``;
const Button = styled.button``;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string | string[] | undefined>('');
  const [password, setPassword] = useState('');
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [isLoginState, setIsLoginState] = useState(-1);

  // const now = useMemo(() => dayjs(), []);

  useEffect(() => {
    if (localStorage.getItem('user_info') !== null) {
      setIsLoginState(1);
      router.push('/dashboard');
    } else {
      setIsLoginState(0);
    }
  }, [router]);

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const user = await BoRequest.post('/account/login', {
        email,
        password,
      });

      if (user.data.code === '9001') {
        toast.error('아이디 또는 이메일과 비밀번호를 확인해 주세요.');
      }

      runInAction(() => {
        authStore.login(user.data.data);
      });
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null) {
        const { code, message } = error as { code: string; message: string };
        errorHandler(code, message);
      }
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

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    // <LayoutWrap>
    //   <Header />
    <main className="app__main">
      <section className="app__content">
        <div className="app__pageCover">
          {/* <NavText /> */}
          {page}
        </div>
      </section>
    </main>
    // </LayoutWrap>
  );
};
export default Login;
