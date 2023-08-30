import { Control } from 'react-hook-form';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import RadioGroup from '@ComponentFarm/modules/RadioGroup/RadioGroup';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Select } from '@ComponentFarm/atom/Select/Select';
import { InnerTable } from '@ComponentFarm/common';
import IngredientSelect from '@ComponentFarm/molecule/IngredientSelect';
import { RecipeStepWrap } from './template/recipe/style';

interface Props {
  control: Control<any>;
}

const RecipeStep = ({ control }: Props) => {
  return (
    <RecipeStepWrap>
      <section>
        <h3>기본 정보</h3>
        <InnerTable bordered>
          <colgroup>
            <col width={157} />
          </colgroup>
          <tbody>
            <tr>
              <th>토핑 종류</th>
              <td>
                <RadioGroup
                  options={[
                    {
                      label: '기본 토핑',
                      value: '1',
                    },
                    {
                      label: '후토핑',
                      value: '2',
                    },
                    {
                      label: '기본 제공',
                      value: '3',
                    },
                  ]}
                  onChange={() => {}}
                />
                {/* <Button variant="gostPrimary">사진 첨부</Button> */}
                {/* <span className="guide-text">
                  이미지 파일을 첨부해주세요. (최대 1장, 2mb 이하)
                </span> */}
              </td>
            </tr>

            <tr>
              <th>토핑 완성 이미지</th>
              <td>
                <Button variant="gostPrimary">사진 첨부</Button>
                <span className="guide-text">
                  이미지 파일을 첨부해주세요. (최대 1장, 2mb 이하)
                </span>
              </td>
            </tr>
            <tr>
              <th>평균 제조 시간</th>
              <td>
                <div className="time-input">
                  <input type="text" className="inp" placeholder="예: 03" />
                  <span>분</span>
                  <input type="text" className="inp" placeholder="예: 45" />
                  <span>초</span>
                </div>
              </td>
            </tr>
          </tbody>
        </InnerTable>
      </section>
      <section>
        <h3>원재료 정보</h3>
        <div className="ingredient-buttons">
          <IngredientSelect onSelect={() => {}} />
        </div>

        <InnerTable bordered>
          <colgroup>
            <col width={210} />
            <col width={140} />
            <col width={140} />
            <col width={140} />
            <col width={140} />
            <col />
            <col width={140} />
          </colgroup>
          <thead>
            <tr>
              <td colSpan={3}>
                <span className="req">기본 정보</span>
              </td>
              <td colSpan={4}>
                <span className="req">계량 정보</span>
              </td>
            </tr>
            <tr>
              <td>원재료명</td>
              <td>수량</td>
              <td>단위</td>
              <td>수량</td>
              <td>단위</td>
              <td>비고</td>
              <td>설정</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{/* <input className="inp" /> */}</td>
              <td>
                <input className="inp" placeholder="예: 8" />
              </td>
              <td>
                <Select
                  placeholder="단위 선택"
                  options={[]}
                  selectedOption="1"
                  setSelectedOption={() => {}}
                />
              </td>
              <td>
                <input className="inp" placeholder="예: 8" />
              </td>
              <td>
                <Select
                  placeholder="단위 선택"
                  options={[]}
                  selectedOption="1"
                  setSelectedOption={() => {}}
                />
              </td>
              <td>{/* <textarea /> */}</td>
              <td>
                <Button variant="gostSecondary">삭제</Button>
              </td>
            </tr>
          </tbody>
        </InnerTable>
      </section>
      <section>
        <h3>레시피 설명</h3>
        <Editor value="" />
      </section>
    </RecipeStepWrap>
  );
};

export default RecipeStep;
