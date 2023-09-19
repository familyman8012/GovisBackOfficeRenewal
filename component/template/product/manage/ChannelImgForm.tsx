import React from 'react';

const ChannelImgForm = () => {
  return <<FormWrap>
  <TitleArea
    title="제품 등록"
    BtnBox={<Button variant="gostSecondary">이전</Button>}
  />
  <Tabs
    id="tab_channelimg"
    tabs={tabData}
    activeTabIndex={activeTabIndex}
    onTabChange={index => setActiveTabIndex(index)}
  />
  <h2>채널별 제품 이미지 목록</h2>
  <TableWrap>
    <Table className="basic" css={pageStyle}>
      <thead>
        <tr>
          <th>
            <span className="hiddenZoneV">썸네일 이미지</span>
          </th>
          <th>채널명</th>
          <th>해상도</th>
          <th>등록일</th>
          <th>수정일</th>
          <th>
            <span className="hiddenZoneV">이미지 다운로드</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {ChannelImg.map(el => (
          <tr key={el.id}>
            <td>
              <span className="thumb">
                <Image
                  src="/images/product/manage/channel/thumb_default.svg"
                  fill
                  alt="기본 이미지"
                />
              </span>
            </td>
            <td>{el.Name}</td>
            <td>{el.Resolution}</td>
            <td>{el.regDate}</td>
            <td>{el.modDate}</td>
            <td>
              <div className="btn_box">
                <Button variant="gostSecondary" LeadingIcon={<Plus />}>
                  이미지 추가
                </Button>
                <Button variant="gostSecondary" LeadingIcon={<Export />}>
                  다운로드
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </TableWrap>
</FormWrap>;
};

export default ChannelImgForm;
