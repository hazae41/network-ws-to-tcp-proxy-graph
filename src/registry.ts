import { Bytes, store } from "@graphprotocol/graph-ts"

import {
  Register as RegisterEvent,
  Unregister as UnregisterEvent
} from "../generated/Registry/Registry"

import { Data } from "../generated/schema"

export function handleRegister(event: RegisterEvent): void {
  const entity = new Data(Bytes.fromUTF8(event.params.data))
  entity.data = event.params.data
  entity.save()
}

export function handleUnregister(event: UnregisterEvent): void {
  store.remove("Data", Bytes.fromUTF8(event.params.data).toHexString())
}
