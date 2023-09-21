export interface IHistoryResItem {
  user_idx: number;
  user_name: string;
  created_date: string;
  history_id: number;
  log_column: string;
  log_type: 1 | 2;
  log_value_org: string;
  log_value_ch: string;
}
