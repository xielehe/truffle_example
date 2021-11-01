
const Storage = artifacts.require("Storage")

contract("Storage", () => {
  it('Should update data', async ()=>{
    const storage = await Storage.new()

    await storage.store(6)

    const data = await storage.get()
    assert(data.toString() === '6')
  })
})