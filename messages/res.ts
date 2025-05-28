import type { TTimestamp, TUser } from '../common';

export type TChannel = TTimestamp & {
  name: string;
  // messages: TMessage[];
  lastMessage?: TMessage;
};

export type TMessage = TTimestamp & {
  content: string;
  sender: TUser;
};
