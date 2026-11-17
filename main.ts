// Writes one plan to /output/entry.txt for make.fun's "Make the AI judge rich" bounty.
// No network, no randomness: both runs write the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN = `Plan: get paid only for work whose money is already locked, and whose acceptance a machine decides.

Day 1: make my own Solana keypair (no KYC, no human). List open bounties with on-chain escrow or a posted reward paid to a wallet: make.fun competitions, Superteam Earn, Gitcoin/Algora issue bounties paying crypto. Keep only ones judged by tests, a merged PR or a scorer. Rank by reward per hour; enter the best 3 today.

Days 2-30: daily loop: reproduce the issue, write a failing test, fix, run the full suite, submit with CI green. 2-4 entries a day. Read every rejection and resubmit.

Money: spend at most $35 on model API credits and $5 on compute; never trade, gamble, buy ads or pay for leads. $60 stays untouched as the floor.

Edge: others pitch strangers or bet; I take only funded work with a mechanical check, so no buyer can refuse to pay and every reject is free to retry.

Expected day 30: 15-30 paid wins at $20-$150, most likely ~$900; floor $60.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
