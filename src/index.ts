export { BitcoinMethods } from "./bitcoin/mtd";
export { BitcoinClient } from "./bitcoin/rpc";
export { DKKTokenMethods } from "./dkktoken/mtd";
export { DKKTClient } from "./dkktoken/rpc";
export { EthereumMethods } from "./ethereum/mtd";
export { EthereumClient } from "./ethereum/rpc";
export { EthereumUtil } from "./ethereum/util";
export { OmniLayerMethods } from "./omni/mtd";
export { OmniLayerClient } from "./omni/rpc";
export { EOSClient } from "./eos/rpc";

export {
  IEosAccount,
  IEosAuthority,
  IEosBlockInfo,
  IEosChainInfo,
  IEosTrx,
  IEosAbi,
  IEosError
} from "./eos/mtd";

export {
  IRpcRequest,
  IRpcErrorStruct,
  IRpcResponse,
  IRpcConfig
} from "./client";

export {
  IEthAbiCommonStruct,
  IEthAbiInputStruct,
  IEthAbiOutputStruct,
  IEthAbiStruct,
  IEthBlock,
  IEthBlockSimple,
  IEthBlockVerbose,
  IEthCallFuncParam,
  IEtherScanAbiResponse,
  IEthReceiptLogs,
  IEthSentTxStruct,
  IEthStatus,
  IEthSyncing,
  IEthTraceTxReturn,
  IEthTx,
  IEthTxPoolContent,
  IEthTxReceipt,
  IParityCallAction,
  IParityCallResult,
  IParityCreateAction,
  IParityCreateResult,
  IParitySuicideAction,
  IParityTxTrace
} from "./ethereum/type";

export { IOmniClientInfo, IOmniTxInfo } from "./omni/rpc";

export {
  IDkktBlockInfo,
  IDkktTxInfo,
  IDkktWalletInfo,
  IDkktTxVin,
  IDkktTxVout
} from "./dkktoken/rpc";

export {
  IBtcBlockchainInfo,
  IBtcBlockInfo,
  IBtcFee,
  IBtcMemoryInfo,
  IBtcNetworkInfo,
  IBtcTxInfo,
  IBtcVerboseMemPool,
  IBtcWalletInfo,
  IBtcTxVin,
  IBtcTxVout
} from "./bitcoin/rpc";
