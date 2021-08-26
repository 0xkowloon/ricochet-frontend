export enum MainActionTypes {
  SET_STATE = 'MAIN.SET_STATE',
  LOAD_DATA = 'MAIN.LOAD_DATA',
  CHAIN_CHANGED = 'MAIN.CHAIN_CHANGED',
  USDC_DOWNGRADE = 'MAIN.USDC_DOWNGRADE',
  WETH_DOWNGRADE = 'MAIN.WETH_DOWNGRADE',
  WBTC_DOWNGRADE = 'MAIN.WBTC_DOWNGRADE',
  USDC_APPROVE = 'MAIN.CHECK_APPROVE',
  USDC_UPGRADE = 'MAIN.USDC_UPGRADE',
  WETH_APPROVE = 'MAIN.WETH_APPROVE',
  WETH_UPGRADE = 'MAIN.WETH_UPGRADE',
  WBTC_APPROVE = 'MAIN.WBTC_APPROVE',
  WBTC_UPGRADE = 'MAIN.WBTC_UPGRADE',
  USDC_WETH_SUBSCRIPTION = 'MAIN.USDC_WETH_SUBSCRIPTION',
  WETH_USDC_SUBSCRIPTION = 'MAIN.WETH_USDC_SUBSCRIPTION',
  USDC_WETH_STOP_FLOW = 'MAIN.USDC_WETH_STOP_FLOW',
  USDC_WBTC_STOP_FLOW = 'MAIN.USDC_WBTC_STOP_FLOW',
  WETH_USDC_STOP_FLOW = 'MAIN.WETH_USDC_STOP_FLOW',
  WBTC_USDC_STOP_FLOW = 'MAIN.WBTC_USDC_STOP_FLOW',
  USDC_WETH_START_FLOW = 'MAIN.USDC_WETH_START_FLOW',
  USDC_WBTC_START_FLOW = 'MAIN.USDC_WBTC_START_FLOW',
  WETH_USDC_START_FLOW = 'MAIN.WETH_USDC_START_FLOW',
  WBTC_USDC_START_FLOW = 'MAIN.WBTC_USDC_START_FLOW',
}