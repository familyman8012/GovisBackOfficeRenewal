import { useRef } from 'react';
import { NextPage } from 'next';
import { fetchEnvironment } from '@ApiFarm/environment';
import { IEnvironmentResItem } from '@InterfaceFarm/environment';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import RecipeForm from '@ComponentFarm/template/recipe/RecipeForm';
import { RegisterRecipeWrap } from '@ComponentFarm/template/recipe/style';

const RecipeDetailPage: NextPage<{ envs: IEnvironmentResItem[] }> = ({
  envs,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <RegisterRecipeWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={
          <>
            <Button variant="gostSecondary">이전</Button>
            <Button onClick={() => formRef.current?.requestSubmit()}>
              저장
            </Button>
          </>
        }
      />
      <Tabs
        id="recipe-detail-tab"
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
      <RecipeForm ref={formRef} envs={envs} onSubmit={() => {}} />
      {/* <section>
        <h3>레시피 기본 정보</h3>

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
                <Controller
                  name="asd"
                  control={control}
                  render={() => (
                    <TimeSecondInput
                      value={1}
                      onChange={val => {
                        console.log(val);
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </FormWrap>
      </section>
      <section className="recipe-steps">
        <h3>레시피 단계별 레시피 정보</h3>
        <div className="left">
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
      </section> */}
    </RegisterRecipeWrap>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          product_info_idx: ':id',
        },
      },
    ],
    fallback: 'blocking',
  };
};

export const getStaticProps = async () => {
  const props = await fetchEnvironment({
    name: [
      'product_group',
      'product_category',
      'product_status',
      'recipe_status',
      'recipe_step_topping_type',
      'recipe_material_meterage_unit',
      'recipe_material_quantity_unit',
    ].join(','),
  });

  return {
    props: {
      envs: props.list,
    },
    revalidate: 10,
  };
};

export default RecipeDetailPage;
