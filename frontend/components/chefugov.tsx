import { ethers } from "ethers";
import { Balances, useConnectedContext } from "./context/connected";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MasterChef, UbiquityGovernance } from "../src/types";

async function _getUBQBalance(
  account: string,
  uGov: UbiquityGovernance | undefined,
  balances: Balances | undefined,
  setBalances: Dispatch<SetStateAction<Balances | undefined>>
): Promise<void> {
  if (uGov) {
    const rawBalance = await uGov?.balanceOf(account);
    if (balances) {
      if (!balances.ubq.eq(rawBalance))
        setBalances({ ...balances, ubq: rawBalance });
    }
  }
}

async function _getUBQReward(
  account: string,
  masterChef: MasterChef | undefined,
  reward: string | undefined,
  setRewards: Dispatch<SetStateAction<string | undefined>>
): Promise<void> {
  if (masterChef && account) {
    const balance = await masterChef?.pendingUGOV(account);
    if (balance) {
      if (!(balance.toString() === reward)) {
        setRewards(ethers.utils.formatEther(balance));
      }
    }
  }
}

const ChefUgov = () => {
  const {
    account,
    masterChef,
    uGov,
    balances,
    setBalances,
  } = useConnectedContext();

  useEffect(() => {
    _getUBQBalance(account ? account.address : "", uGov, balances, setBalances);
    _getUBQReward(
      account ? account.address : "",
      masterChef,
      rewards,
      setRewards
    );
  }, [balances?.ubq]);

  const [rewards, setRewards] = useState<string>();

  const handleBalance = async () => {
    _getUBQBalance(account ? account.address : "", uGov, balances, setBalances);
  };
  const handleReward = async () => {
    _getUBQReward(
      account ? account.address : "",
      masterChef,
      rewards,
      setRewards
    );
  };

  if (!account) {
    return null;
  }

  const handleClaim = async () => {
    if (masterChef) {
      await (await masterChef?.getRewards()).wait();
      await handleReward();
      await handleBalance();
    }
  };

  return (
    <>
      <div className="row">
        <button onClick={handleReward}>Get UBQ Rewards</button>
        <button onClick={handleClaim}>Claim Rewards</button>
        <p className="value">Pending Rewards: {rewards} UBQ</p>
      </div>
      <div className="column-wrap">
        <div className="row">
          <button onClick={handleBalance}>Get UBQ Balance</button>
          <p className="value">
            {balances ? ethers.utils.formatEther(balances.ubq) : "0.0"} UBQ
          </p>{" "}
        </div>
        <div>
          <a href="  https://app.sushi.com/add/0x4e38D89362f7e5db0096CE44ebD021c3962aA9a0/0x0F644658510c95CB46955e55D7BA9DDa9E9fBEc6">
            Get UBQ on sushiswap.
          </a>
        </div>
      </div>
    </>
  );
};

export default ChefUgov;
