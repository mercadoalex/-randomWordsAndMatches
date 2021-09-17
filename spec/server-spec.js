const got = require('got');

describe("testing endpoint  - search", () => {
  let testData = {}; 
  beforeEach((async () => {
    try {
         testData = await got('http://localhost:8081/search?number=5&theword=bar');
         console.log("OK");
    } catch (error) {
        console.log(error);
    }
}));
  it("should get data from endpoint", () => {
    expect(testData).toBeDefined();
    //expect((testData).toExist());
  });
});
