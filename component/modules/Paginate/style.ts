import styled from '@emotion/styled';

export const MobilePaginationWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  svg {
    margin-left: 3rem;
    color: gray;

    &.active {
      cursor: pointer;
    }
    &.inactive {
      opacity: 50%;
    }
  }

  .box_num {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    color: gray;
    user-select: none;
  }
`;

// export const PaginationWrap = styled.div`
//   .pagination {
//     display: flex;
//     align-items: center;
//     width: 100%;
//     height: 10rem;
//     user-select: none;
//   }
//   .truncable_class {
//     width: 10rem;
//     padding: 0.5rem;
//     text-align: center;
//     color: gray;
//   }

//   .btn_prev,
//   .btn_next {
//     display: flex;
//     align-items: center;
//     height: 10rem;
//     margin-right: 2rem;
//     color: gray;
//     font-weight: 500;
//     &:hover {
//       color: gray;
//     }
//     &:focus {
//       outline: none;
//     }
//     &.active {
//       cursor: pointer;
//     }
//     &.inactive {
//       cursor: default;
//       opacity: 50%;
//     }
//   }

//   .btn_prev {
//     svg {
//       margin-right: 3rem;
//     }
//   }

//   .btn_next {
//     svg {
//       margin-left: 3rem;
//     }
//   }

//   .box_number {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-grow: 1;

//     .btn_page_number {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       height: 10rem;
//       width: 10rem;
//       border-radius: 50%;
//       cursor: pointer;
//       font-weight: 500;

//       &.active {
//         background-color: #edf2f7;
//         color: #718096;
//       }
//       &.inactive {
//         color: gray;
//       }
//     }
//   }
// `;

export const PaginationWrap = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: flex;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
