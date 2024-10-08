import fs from 'fs';
import path from 'path';
import { verifyDKIMSignature } from '../src/dkim';
import { generateEmailVerifierInputs } from '../src/input-generators';

jest.setTimeout(10000);

describe('DKIM old', () => {
  it("should generate input from raw email", async () => {
    const email = fs.readFileSync(
      path.join(__dirname, "test-data/email-expired-selector.eml")
    );

    try {
      const inputs = await generateEmailVerifierInputs(Buffer.from(email), {
        ignoreBodyHashCheck: true,
    });
    // console.log(inputs);

    // expect(inputs.emailHeader).toBeDefined();
    // expect(inputs.pubkey).toBeDefined();
    // expect(inputs.signature).toBeDefined();
    // expect(inputs.precomputedSHA).toBeDefined();
    // expect(inputs.emailBody).toBeDefined();
      // expect(inputs.emailBodyLength).toBeDefined();
      // expect(inputs.bodyHashIndex).toBeDefined();
    } catch (error) {
      expect(error).toBeUndefined();
      console.log(error);
    }
  });
  // it('should not pass as DKIM selector does not have a public key', async () => {
  //   const email = fs.readFileSync(
  //     path.join(__dirname, 'test-data/email-expired-selector.eml'),
  //   );

  //   // Add a label to the subject
  //   const result = await verifyDKIMSignature(email);
  //   expect(result.publicKey.toString()).toBe("158902977594277841035507991210465261088718158969020711438468051883545263206784869183816002779198291507773956642587291646624806426943797842430841187640968797566378161092945222129992784031810964769374400336360603680510758555736464762928976088516026664811166131873291545586680537947411715590463551924415770160899");
  // });
});