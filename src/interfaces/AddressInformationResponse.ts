export interface AddressInformation {
  code: string;
  msg: string;
  data: AddressData;
}

export interface AddressData {
  chainFullName: string;
  chainShortName: string;
  address: string;
  contractAddress: string;
  balance: string;
  balanceSymbol: string;
  transactionCount: string;
  verifying: string;
  sendAmount: string;
  receiveAmount: string;
  tokenAmount: string;
  totalTokenValue: string;
  createContractAddress: string;
  createContractTransactionHash: string;
  firstTransactionTime: string;
  lastTransactionTime: string;
  token: string;
  bandwidth: string;
  energy: string;
  votingRights: string;
  unclaimedVotingRewards: string;
  isAaAddress: boolean;
}

export interface ApiResponse<T> {
  code: number;
  data: T;
  msg: string;
}