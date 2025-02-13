// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import { Signature } from '@aptos-labs/ts-sdk'
import { UserResponse } from '../misc'
import { AccountInfo } from '../AccountInfo'

/** Version of the feature. */
export type AptosSignInVersion = '1.0.0'
/** Name of the feature. */
export const AptosSignInNamespace = 'aptos:signIn'

export type AptosSignInFeature = {
  /** Namespace for the feature. */
  [AptosSignInNamespace]: {
    /** Version of the feature API. */
    version: AptosSignInVersion
    signIn: AptosSignInMethod
  }
}

export type AptosSignInMethod = (
  input: AptosSignInInput
) => Promise<UserResponse<AptosSignInOutput>>

export type AptosSignInInput = {
  address?: string
  uri?: string
  version?: string
  statement?: string
  nonce: string
  chainId?: string
  issuedAt?: string
  expirationTime?: string
  notBefore?: string
  requestId?: string
  resources?: string[]
}

export type AptosSignInRequiredFields = {
  domain: string
  address: string
  uri: string
  version: string
  chainId: string
}

export type AptosSignInOutput = {
  account: AccountInfo
  input: AptosSignInInput & AptosSignInRequiredFields
  plainText: string
  signingMessage: Uint8Array
  signature: Signature
  type: string // 'ed25519' | 'multi_ed25519' | 'single_key' | 'multi_key'
}
