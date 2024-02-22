import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { Register } from "../generated/schema"
import { Register as RegisterEvent } from "../generated/Registry/Registry"
import { handleRegister } from "../src/registry"
import { createRegisterEvent } from "./registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let data = "Example string value"
    let newRegisterEvent = createRegisterEvent(data)
    handleRegister(newRegisterEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Register created and stored", () => {
    assert.entityCount("Register", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Register",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
