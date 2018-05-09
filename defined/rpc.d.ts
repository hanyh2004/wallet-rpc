export interface RPCResponse<T = any> {
  jsonrpc?: string;
  id?: number | string;
  result: T;
  error: void | { code: number; message: string };
}

export interface RPCError {
  jsonrpc?: string;
  id?: number | string;
  result: void;
  error: { code: number; message: string };
}

export interface _RPCReq {
  jsonrpc?: "2.0" | "1.0";
  id?: number | string;
  method: string;
  params: any[];
}

export type RPCRequest = _RPCReq | _RPCReq[];
