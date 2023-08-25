import { useRouter } from 'next/router';
import { Badge } from '@ComponentFarm/atom/Badge/Badge';
import { Button } from '@ComponentFarm/atom/Button/Button';
import { Plus } from '@ComponentFarm/atom/icons';
import Radio from '@ComponentFarm/atom/Radio/Radio';
import { Tabs } from '@ComponentFarm/atom/Tab/Tab';
import TitleArea from '@ComponentFarm/layout/TitleArea';
import { RecipeListWrap } from '@ComponentFarm/template/recipe/style';

const RecipeListPage = () => {
  const router = useRouter();
  const [pathname] = router.asPath.split('?');

  return (
    <RecipeListWrap>
      <TitleArea
        title="레시피 상세 정보"
        BtnBox={<Button variant="gostSecondary">이전</Button>}
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
      <h3>레시피 목록</h3>
      {/** 등록된 레시피가 없을때 */}
      {/* <Empty>
        <span className="empty-wrap">
          등록된 레시피가 없습니다.
          <Button onClick={() => router.push(`${pathname}/add`)}>
            레시피 등록하기
          </Button>
        </span>
      </Empty> */}

      {/** 등록된 레시피가 있을때 */}
      <ul className="recipe-list">
        <li className="recipe-item">
          <div className="recipe-item-info">
            <Radio />
            <span className="recipe-title">오리지널 페퍼로니 피자 ver3.0</span>
          </div>

          <div className="recipe-item-action">
            <span className="use-status">
              <Badge color="red" dot fill="transparent">
                미사용
              </Badge>
            </span>
            <Button variant="gostPrimary">수정</Button>
            <Button variant="gostPrimary">삭제</Button>
          </div>
        </li>
        <li className="recipe-item">
          <div className="recipe-item-info">
            <Radio checked />
            <span className="recipe-title">오리지널 페퍼로니 피자 ver3.0</span>
          </div>

          <div className="recipe-item-action">
            <span className="use-status">
              <Badge color="green" dot fill="transparent">
                사용
              </Badge>
            </span>
            <Button variant="gostPrimary">수정</Button>
            <Button variant="gostPrimary">삭제</Button>
          </div>
        </li>
        <li className="recipe-item">
          <div className="recipe-item-info">
            <Radio />
            <span className="recipe-title">오리지널 페퍼로니 피자 ver3.0</span>
          </div>

          <div className="recipe-item-action">
            <span className="use-status">
              <Badge color="red" dot fill="transparent">
                미사용
              </Badge>
            </span>
            <Button variant="gostPrimary">수정</Button>
            <Button variant="gostPrimary">삭제</Button>
          </div>
        </li>

        <li>
          <Button
            variant="gostPrimary"
            LeadingIcon={<Plus />}
            onClick={() => router.push(`${pathname}/add`)}
          >
            레시피 등록
          </Button>
        </li>
      </ul>
    </RecipeListWrap>
  );
};

export default RecipeListPage;
