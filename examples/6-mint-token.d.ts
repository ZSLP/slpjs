/***************************************************************************************
 *
 *  Example 6: Minting for a Type 1 or NFT1 Parent token
 *
 *  Instructions:
 *      (1) - Send some BCH to simpleledger:qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqnt0wauwu
 *            or tBCH to slptest:qpwyc9jnwckntlpuslg7ncmhe2n423304ueqcyw80l
 *      (2) - Select Network and Address by commenting/uncommenting the desired
 *              NETWORK section and providing valid BCH address.
 *
 *      (3) - Select a Validation method by commenting/uncommenting the desired
 *              VALIDATOR section. Chose from remote validator or local validator.
 *              Both options rely on remote JSON RPC calls to rest.bitcoin.com.
 *                  - Option 1: REMOTE VALIDATION (rest.bitcoin.com/v2/slp/isTxidValid/)
 *                  - Option 2: LOCAL VALIDATOR / REST JSON RPC
 *                  - Option 3: LOCAL VALIDATOR / LOCAL FULL NODE
 *
 *      (4) - Run `tsc && node <file-name.js>` just before script execution, or for
 *              debugger just run `tsc` in the console and then use vscode debugger
 *              with "Launch Current File" mode.
 *
 * ************************************************************************************/
export {};
