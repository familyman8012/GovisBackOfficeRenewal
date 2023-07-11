export interface ICouponFetchParams extends Omit<any, "search"> {
  search_type: number;
  search_keyword: string;
  search_status: string | undefined;
  search_coupon_type: string | undefined;
  search_notification_type: string | undefined;
  search_use_dt: string | undefined;
}

export interface ICoupon {
  coupon_name: string;
  coupon_desc: string;
  coupon_type: number;
  status: number;
  discount_value: number;
  notification_type: number;
  use_start_dt: string;
  use_end_dt: string;
  used_qty: number;
  coupon_qty: number;
  tag_keyword: string;
  impossible_store: any[];
  template_image: string;
  created_at: string;
}

export interface ICouponUpdate
  extends Pick<
    ICoupon,
    | "coupon_name"
    | "coupon_desc"
    | "coupon_type"
    | "discount_value"
    | "use_start_dt"
    | "use_end_dt"
    | "tag_keyword"
  > {
  impossible_store?: string;
}

export interface ICouponCreate
  extends Pick<
    ICoupon,
    | "coupon_name"
    | "coupon_desc"
    | "coupon_type"
    | "coupon_qty"
    | "notification_type"
    | "discount_value"
    | "use_start_dt"
    | "use_end_dt"
    | "tag_keyword"
  > {
  impossible_store: string;
}

export interface ICouponListItem {
  coupon_idx: number;
  coupon_name: string;
  coupon_type: 0 | 1 | 2;
  status: 0 | 1 | 2;
  notification_type: 0 | 1;
  discount_value: number;
  use_start_dt: string;
  use_end_dt: string;
  used_qty: number;
  coupon_qty: number;
  created_at: string;
  coupon_desc: string;
}

export interface ICouponSerial {
  coupon_number: string;
  is_used: 0 | 1;
  used_at: string;
  customer_name: string; //	고객 이름
  customer_phone: string; //	고객 전화번호
  customer_email: string; //	고객 이메일
  notification_at: string; //	알림 발송 시간 (Y-m-d H:M:S)
  is_checked: number; //	알림 확인 여부 (0=미확인, 1=확인)
  checked_at: string; //	알림 확인 시간 (Y-m-d H:M:S)
  store_id: number;
  store_name: string;
}

export interface ICouponSerialCustomer {
  coupon_number: string;
  customer_name: string; //	고객 이름
  customer_phone: string; //	고객 전화번호
  customer_email: string; //	고객 이메일
}

export interface ICouponFindAll {
  list: ICouponListItem[];
  count: number;
}

export interface ICouponFindSerials {
  list: ICouponSerial[];
  count: number;
}

export interface ICouponPatch {
  coupon_idx: number;
}

export interface ICouponSerialPatch {
  coupon_idx: number;
  coupon_number: string;
}

export interface ICouponCopyParams {
  source_coupon_idx: number;
  coupon_name: string;
  coupon_qty: number;
}

export interface ICouponSerialCreateParams {
  customer_name: string;
  customer_phone: string;
  customer_email: string;
}

export interface ICouponUpdateParams extends ICouponPatch, ICouponUpdate {}

export interface ICouponUpdateTemplate extends ICouponPatch {
  template_image: string;
}

export interface ICouponCreateParams extends ICouponPatch {
  coupon_name: string;
  use_start_dt: string;
  use_end_dt: string;
  coupon_qty: number;
  coupon_desc: string;
}

export interface ICouponHistory {
  user_id: number;
  user_name: string;
  action_type: string;
  action_message: string;
  created_at: string;
}

export interface ICouponFindHistory {
  count: number;
  list: ICouponHistory[];
}

export interface ICouponMessage {
  limit_count: number; // 남은 발송량
  message: string; // 발송 메시지
  reservation_at: string; // 예약 발송 시간 (Y-m-d H:M:S)
}

export interface ICouponMessageUpdateParams
  extends Pick<ICouponMessage, "message" | "reservation_at"> {}

export interface ICouponMessageResendParams {
  coupon_idx: number;
  resend_type: 0 | 1;
  resend_message: string;
  resend_list?: string; // GP0000100001,GP0000100002,...,GP0000100009
}
