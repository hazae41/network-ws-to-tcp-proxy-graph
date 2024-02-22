import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { Register, Unregister } from "../generated/Registry/Registry"

export function createRegisterEvent(data: string): Register {
  let registerEvent = changetype<Register>(newMockEvent())

  registerEvent.parameters = new Array()

  registerEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return registerEvent
}

export function createUnregisterEvent(data: string): Unregister {
  let unregisterEvent = changetype<Unregister>(newMockEvent())

  unregisterEvent.parameters = new Array()

  unregisterEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromString(data))
  )

  return unregisterEvent
}
