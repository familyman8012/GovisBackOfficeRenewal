import { Control } from 'react-hook-form';
import Editor from '@ComponentFarm/modules/Editor/Editor';
import { Button } from '@ComponentFarm/atom/Button/Button';
import IngredientSearch from '@ComponentFarm/molecule/IngredientSearch';
import { RecipeStepWrap } from './style';

interface Props {
  control: Control<any>;
}

const RecipeStep = ({ control }: Props) => {
  return (
    <RecipeStepWrap>
      <section>
        <h3>기본 정보</h3>
        <table>
          <colgroup>
            <col width={157} />
          </colgroup>
          <tbody>
            <tr>
              <th>토핑 완성 이미지</th>
              <td>
                <Button variant="gostPrimary">사진 첨부</Button>
                <span>이미지 파일을 첨부해주세요. (최대 1장, 2mb 이하)</span>
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
            <tr>
              <th>레시피 설명</th>
              <td>
                <Editor value="" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>원재료 정보</h3>
        <table>
          <colgroup>
            <col width={157} />
          </colgroup>
          <tbody>
            <tr>
              <th>원재료 설정</th>
              <td>
                <IngredientSearch onSearch={() => {}} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </RecipeStepWrap>
  );
};

export default RecipeStep;
