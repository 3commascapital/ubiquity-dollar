import { ethers, BigNumber } from "ethers";

import { UbiquityAlgorithmicDollar__factory } from "../src/types/factories/UbiquityAlgorithmicDollar__factory";
import { IMetaPool__factory } from "../src/types/factories/IMetaPool__factory";
import { Bonding__factory } from "../src/types/factories/Bonding__factory";
import { BondingShare__factory } from "../src/types/factories/BondingShare__factory";
import { UbiquityAlgorithmicDollarManager__factory } from "../src/types/factories/UbiquityAlgorithmicDollarManager__factory";
import { UbiquityAlgorithmicDollarManager } from "../src/types/UbiquityAlgorithmicDollarManager";
import { ERC20__factory } from "../src/types/factories/ERC20__factory";

import { ADDRESS } from "../pages/index";
import { useConnectedContext } from "./context/connected";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Bonding, BondingShare, IMetaPool } from "../src/types";
import { EthAccount } from "../utils/types";

async function __depositBondingToken(
  lpsAmount: ethers.BigNumber,
  weeks: ethers.BigNumber,
  provider: ethers.providers.Web3Provider | undefined,
  account: EthAccount,
  setBondingSharesBalance: Dispatch<SetStateAction<string | undefined>>,
  metapool: IMetaPool,
  bonding: Bonding,
  bondingShare: BondingShare
) {
  if (provider && account) {
    // check approved amount
    // make sure to check balance spendable -- if (lpsAmount) is > spendable then ask approval again
    console.log(account);
    //const SIGNER = await provider.getSigner();
    const allowance = await metapool.allowance(
      account.address,
      ADDRESS.BONDING
    );

    console.log("allowance", ethers.utils.formatEther(allowance));
    console.log("lpsAmount", ethers.utils.formatEther(lpsAmount));
    let approveTransaction;
    if (allowance.lt(lpsAmount)) {
      approveTransaction = await metapool.approve(ADDRESS.BONDING, lpsAmount);

      const approveWaiting = await approveTransaction.wait();
      console.log(
        `approveWaiting gas used with 100 gwei / gas:${ethers.utils.formatEther(
          approveWaiting.gasUsed.mul(ethers.utils.parseUnits("100", "gwei"))
        )}`
      );
      const allowance2 = await metapool.allowance(
        account.address,
        ADDRESS.BONDING
      );
      console.log("allowance2", ethers.utils.formatEther(allowance2));
    }

    console.log({ lpsAmount, weeks });

    const depositWaiting = await bonding.deposit(lpsAmount, weeks);
    const waiting = await depositWaiting.wait();

    console.log(
      `deposit gas used with 100 gwei / gas:${ethers.utils.formatEther(
        waiting.gasUsed.mul(ethers.utils.parseUnits("100", "gwei"))
      )}`
    );

    /**
     *
     *
     */
    /*     const addr = await SIGNER.getAddress();
    console.log({ addr });
    const ids = await bondingShare.holderTokens(addr);
    console.log(`
      ids of bonding shares
      length:${ids.length}
      0:${ids[0]} balance:${await bondingShare.balanceOf(addr, ids[0])} 
   
      `);

    const bondingSharesBalance = await bondingShare.balanceOf(addr, ids[0]);

    console.log({ ids, bondingSharesBalance });

    //
    let balance = BigNumber.from("0");
    if (ids.length > 1) {
      console.log(` 
      bondingShares ids 1:${ids[1]} balance:${await bondingShare.balanceOf(
        addr,
        ids[1]
      )}
   
      `);
      const balanceOfs = ids.map((id) => {
        return bondingShare.balanceOf(addr, id);
      });
      const balances = Promise.all(balanceOfs);
      balance = (await balances).reduce((prev, cur) => {
        return prev.add(cur);
      });
    } else {
      balance = bondingSharesBalance;
    }
    console.log(`
 balance:${balance.toString()} 
 `); */

    const balance = await calculateBondingShareBalance(account, bondingShare);
    setBondingSharesBalance(ethers.utils.formatEther(balance));
    /** */
    /*   const addr = await SIGNER.getAddress();
    console.log({ addr });
    const ids = await bondingShare.holderTokens(addr);
    console.log({ ids });

    const bondingSharesBalance = await bondingShare.balanceOf(addr, ids[0]);

    console.log({ ids, bondingSharesBalance }); */

    //
    // const decimals = await token.decimals();
    // const balance = ethers.utils.formatUnits(rawBalance, decimals);
    //setBondingTokenBalance(bondingSharesBalance.toString());
  } else {
    alert(`no provider and account found`);
  }
}
async function calculateBondingShareBalance(
  account: EthAccount,
  bondingShare: BondingShare
) {
  const addr = account.address;
  console.log({ addr });
  const ids = await bondingShare.holderTokens(addr);

  let bondingSharesBalance = BigNumber.from("0");
  if (ids && ids.length > 0) {
    bondingSharesBalance = await bondingShare.balanceOf(addr, ids[0]);
  }

  console.log({ ids, bondingSharesBalance });

  //
  let balance = BigNumber.from("0");
  if (ids.length > 1) {
    console.log(` 
    bondingShares ids 1:${ids[1]} balance:${await bondingShare.balanceOf(
      addr,
      ids[1]
    )}
 
    `);
    const balanceOfs = ids.map((id) => {
      return bondingShare.balanceOf(addr, id);
    });
    const balances = Promise.all(balanceOfs);
    balance = (await balances).reduce((prev, cur) => {
      return prev.add(cur);
    });
  } else {
    balance = bondingSharesBalance;
  }
  console.log(`
balance:${balance.toString()} 
`);
  return balance;
}
export function _depositBondingTokens(
  provider: ethers.providers.Web3Provider | undefined,
  account: EthAccount,
  setBondingTokenBalance: Dispatch<SetStateAction<string | undefined>>,
  metapool: IMetaPool,
  bonding: Bonding,
  bondingShare: BondingShare
) {
  const missing = `missing input value for`;
  const bignumberErr = `can't parse BigNumber from`;

  let subject = `lp token amount`;

  const lpsAmount = document.getElementById("lpsAmount") as HTMLInputElement;
  const lpsAmountValue = lpsAmount?.value;
  if (!lpsAmountValue) {
    return alert(`${missing} ${subject}`);
  }
  if (BigNumber.isBigNumber(lpsAmountValue)) {
    return alert(`${bignumberErr} ${subject}`);
  }

  subject = `weeks lockup amount`;

  const weeks = document.getElementById("weeks") as HTMLInputElement;
  const weeksValue = weeks?.value;
  if (!weeksValue) {
    return alert(`${missing} ${subject}`);
  }
  if (BigNumber.isBigNumber(weeksValue)) {
    return alert(`${bignumberErr} ${subject}`);
  }

  return __depositBondingToken(
    ethers.utils.parseEther(lpsAmountValue),
    BigNumber.from(weeksValue),
    provider,
    account,
    setBondingTokenBalance,
    metapool,
    bonding,
    bondingShare
  );
}

const DepositShare = () => {
  const {
    account,
    provider,
    manager,
    metapool,
    bonding,
    bondingShare,
    masterChef,
  } = useConnectedContext();
  const [
    tokenBondingSharesBalance,
    setBondingSharesBalance,
  ] = useState<string>();

  useEffect(() => {
    const initializeAccount = async () => {
      try {
        console.log("2useEffect", account, bondingShare);
        const bondingShareBalance = await calculateBondingShareBalance(
          account as EthAccount,
          bondingShare as BondingShare
        );
        console.log("bondingShareBalance", bondingShareBalance);
        setBondingSharesBalance(ethers.utils.formatEther(bondingShareBalance));
      } catch (error) {
        setBondingSharesBalance(undefined);
      }
    };
    console.log("useEffect", account, bondingShare);
    initializeAccount();
  }, []);

  if (!account) {
    return null;
  }

  const handleDeposit = async () =>
    _depositBondingTokens(
      provider,
      account,
      setBondingSharesBalance,
      metapool as IMetaPool,
      bonding as Bonding,
      bondingShare as BondingShare
    );
  const handleBalance = async () => {
    if (bondingShare) {
      const balance = await calculateBondingShareBalance(account, bondingShare);
      setBondingSharesBalance(ethers.utils.formatEther(balance));
    }
  };
  handleBalance();
  return (
    <>
      <div className="row">
        <button onClick={handleBalance}>Get Bonding Shares</button>
        <p className="value">{tokenBondingSharesBalance} Bonding Shares</p>
      </div>
      <div className="row-wrap">
        <input
          type="number"
          name="lpsAmount"
          id="lpsAmount"
          placeholder="uAD-3CRV LP Tokens"
        />
        <input type="number" name="weeks" id="weeks" placeholder="weeks" />
        <button onClick={handleDeposit}>Deposit Bonding Token Balance</button>
      </div>
      <p>
        <a href="https://crv.finance/liquidity">
          Deposit to curve uAD-3CRV pool.
        </a>
        <br />
        Select pool Ubiquity Algorithmic Dollar (uAD3CRV-f-2){" "}
      </p>
    </>
  );
};

export default DepositShare;
