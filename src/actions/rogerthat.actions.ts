import { Action } from '@ngrx/store';
import { CameraType, CryptoAddress, CryptoTransaction, QrCodeScannedContent, RogerthatError, SupportedAlgorithms, } from 'rogerthat-plugin';
import { ApiRequestStatus, GetAddressPayload, ServiceData, UserData } from '../interfaces';

export const enum RogerthatActionTypes {
  SET_USER_DATA = '[rogerthat] Set user data',
  SET_SERVICE_DATA = '[rogerthat] Set service data',
  SCAN_QR_CODE = '[rogerthat] Scan QR code',
  SCAN_QR_CODE_STARTED = '[rogerthat] Scan QR code started',
  SCAN_QR_CODE_UPDATE = '[rogerthat] Scan QR code update',
  SCAN_QR_CODE_FAILED = '[rogerthat] Scan QR code failed',
  GET_ADDRESS = '[rogerthat]Get address',
  GET_ADDRESS_COMPLETE = '[rogerthat]Get address complete',
  GET_ADDRESS_FAILED = '[rogerthat]Get address failed',
  CREATE_TRANSACTION_DATA = '[rogerthat] Create transaction data',
  CREATE_TRANSACTION_DATA_COMPLETE = '[rogerthat] Create transaction data complete',
  CREATE_TRANSACTION_DATA_FAILED = '[rogerthat] Create transaction data failed',
}

export class SetUserDataAction implements Action {
  readonly type = RogerthatActionTypes.SET_USER_DATA;

  constructor(public payload: UserData) {
  }
}

export class SetServiceDataAction implements Action {
  readonly type = RogerthatActionTypes.SET_SERVICE_DATA;

  constructor(public payload: ServiceData) {
  }
}

export class ScanQrCodeAction implements Action {
  readonly type = RogerthatActionTypes.SCAN_QR_CODE;

  constructor(public payload: CameraType) {
  }
}

export class ScanQrCodeStartedAction implements Action {
  readonly type = RogerthatActionTypes.SCAN_QR_CODE_STARTED;
}

export class ScanQrCodeUpdateAction implements Action {
  readonly type = RogerthatActionTypes.SCAN_QR_CODE_UPDATE;

  constructor(public payload: QrCodeScannedContent) {
  }
}

export class ScanQrCodeFailedAction implements Action {
  readonly type = RogerthatActionTypes.SCAN_QR_CODE_FAILED;

  constructor(public payload: RogerthatError) {
  }
}

export class GetAddresssAction implements Action {
  readonly type = RogerthatActionTypes.GET_ADDRESS;

  constructor(public payload: GetAddressPayload) {
  }
}

export class GetAddresssCompleteAction implements Action {
  readonly type = RogerthatActionTypes.GET_ADDRESS_COMPLETE;

  constructor(public payload: CryptoAddress) {
  }
}

export class GetAddresssFailedAction implements Action {
  readonly type = RogerthatActionTypes.GET_ADDRESS_FAILED;

  constructor(public payload: ApiRequestStatus) {
  }
}

export class CreateTransactionDataAction implements Action {
  readonly type = RogerthatActionTypes.CREATE_TRANSACTION_DATA;

  constructor(public payload: CryptoTransaction, public keyName: string, public algorithm: SupportedAlgorithms, public index: number,
              public message: string) {
  }
}

export class CreateTransactionDataCompleteAction implements Action {
  readonly type = RogerthatActionTypes.CREATE_TRANSACTION_DATA_COMPLETE;

  constructor(public payload: CryptoTransaction) {
  }
}

export class CreateTransactionDataFailedAction implements Action {
  readonly type = RogerthatActionTypes.CREATE_TRANSACTION_DATA_FAILED;

  constructor(public payload: ApiRequestStatus) {
  }
}

export type RogerthatActions
  = SetUserDataAction
  | SetServiceDataAction
  | ScanQrCodeAction
  | ScanQrCodeStartedAction
  | ScanQrCodeUpdateAction
  | ScanQrCodeFailedAction
  | GetAddresssAction
  | GetAddresssCompleteAction
  | GetAddresssFailedAction
  | CreateTransactionDataAction
  | CreateTransactionDataCompleteAction
  | CreateTransactionDataFailedAction;

