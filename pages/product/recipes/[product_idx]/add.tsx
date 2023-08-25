import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import { FormWrap } from '@ComponentFarm/common';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import RecipeImport from '@ComponentFarm/template/recipe/RecipeImport';
import RecipeStep from '@ComponentFarm/template/recipe/RecipeStep';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';

const recipeFormStyles = css`
  width: 100%;
  margin: 0;

  [class^='field'] {
    display: flex;
    flex-wrap: wrap;

    label {
      margin-right: 3.2rem;
      color: var(--color-gray500);
      font-weight: 600;
      font-size: 1.4rem;
      max-width: 280px;
    }

    p {
      flex: none;
      width: 100%;
    }
  }

  .line {
    display: flex;
    flex-wrap: wrap;
    gap: 6.6rem;
  }

  .line1 {
    .field1,
    .group {
      flex: 1;
    }
  }

  .field1 {
    justify-content: space-between;
  }

  .field1,
  .field2,
  .field3 {
    .box_upload_image,
    .inp {
      flex: 1;
    }
  }

  .field3 {
    flex-wrap: nowrap;
  }

  .group {
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2.4rem 0;
  }

  h4 {
    padding-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
`;

const RecipeDetailPage = () => {
  const defaultValues = {
    name: '', // TODO: replace with the actual value
    group: '', // TODO: replace with the actual value,
    kind: '', // TODO: replace with the actual value,
    product_name_ko: '', // TODO: replace with the actual value,
    product_name_en: '', // TODO: replace with the actual value,
    desc: '', // TODO: replace with the actual value
  };

  const { register, control, handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <RegisterRecipeWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={
          <>
            <Button variant="gostSecondary">이전</Button>
            <Button>저장</Button>
          </>
        }
      />
      <Tabs
        tabs={[
          {
            title: '제품 상세',
          },
          {
            title: '레시피 정보',
          },
          {
            title: '부서정보',
          },
        ]}
        activeTabIndex={1}
        onTabChange={index => {}}
      />

      <section>
        <h3>레시피 기본 정보</h3>
        <RecipeImport />
        <FormWrap
          css={recipeFormStyles}
          onSubmit={handleSubmit(formData =>
            console.log('submitted Data : ', formData)
          )}
        >
          <div className="line line1">
            <div className="group">
              <div className="field1">
                <label htmlFor="TODO" className="req">
                  레시피명
                </label>
                <input
                  type="text"
                  className="inp"
                  {...register('name', { required: '필수 입력항목입니다.' })}
                />
              </div>
              <div className="field1">
                <label htmlFor="TODO">레시피 완성 이미지</label>
                <div className="box_upload_image">
                  <div className="thumb" />
                  <div className="box_btn">
                    <Button variant="primary">이미지 등록</Button>
                    <span className="txt_notice">
                      ※ 2 MB 이하만 업로드 가능
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="field2">
                <label htmlFor="name" className="req">
                  레시피 코드
                </label>
                <input
                  type="text"
                  id="name"
                  className="inp"
                  placeholder="제품코드+_숫자"
                  {...register('name', { required: '필수 입력항목입니다.' })}
                />
              </div>
              <div className="field3">
                <label htmlFor="time-min" className="req">
                  총 제조 시간
                </label>
                <div className="time-input">
                  <input
                    type="text"
                    id="time-min"
                    className="inp"
                    placeholder="예: 03"
                    {...register('name', { required: '필수 입력항목입니다.' })}
                  />
                  <span>분</span>
                  <input
                    type="text"
                    id="time-sec"
                    className="inp"
                    placeholder="예: 45"
                    {...register('name', { required: '필수 입력항목입니다.' })}
                  />
                  <span>초</span>
                </div>
              </div>
            </div>
          </div>
        </FormWrap>
      </section>
      <section className="recipe-steps">
        <h3>레시피 단계별 레시피 정보</h3>
        <div className="left">
          {/** TODO: tab component */}
          <div className="steps">
            <ul>
              <li>도우</li>
              <li className="active">치즈</li>
            </ul>
            <div className="step-add">
              <Button variant="transparent" size="lg" LeadingIcon={<Plus />}>
                단계 추가하기
              </Button>
            </div>
          </div>
        </div>
        <div className="right">
          <RecipeStep control={control} />
        </div>
      </section>
    </RegisterRecipeWrap>
  );
};

export default RecipeDetailPage;
