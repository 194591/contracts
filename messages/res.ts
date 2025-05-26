import { TRecordWithTimestamp, TUser } from '../common';

export type TChannel = TRecordWithTimestamp & {
  name: string;
  // messages: TMessage[];
  lastMessage?: TMessage;
};

export type TMessage = TRecordWithTimestamp & {
  content: string;
  sender: TUser;
};
