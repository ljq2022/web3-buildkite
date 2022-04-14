import { Step } from "./types";

import { v4 as uuidv4 } from "uuid";
import {
  Connection,
  PublicKey,
  clusterApiUrl,
  ConfirmOptions,
} from "@solana/web3.js";
import { Program, Provider, web3 } from "@project-serum/anchor";
import fs from "fs";
import yaml from "js-yaml";

export const convertYamlToGroupsArray = (filePath: string) => {
  const config = yaml.load(fs.readFileSync(filePath));
  const steps =
    config != null && config instanceof Object ? config["steps"] : null;
  if (!steps || !(steps instanceof Array)) {
    throw new Error("YAML could not be parsed into JSON");
  }
  const stepGroups: Array<Step>[] = [];
  let currentStepGroup: Step[] = [];
  // If there is a wait command, a new array is initialized to group subsequent commands together.
  steps.forEach((step) => {
    if (step && step.address) {
      const newStep = {
        uid: uuidv4(),
        address: step.address,
        input: step.input,
        output: step.output,
        children: [],
      };
      currentStepGroup.push(newStep);
    } else if (step && step.wait) {
      stepGroups.push(currentStepGroup);
      currentStepGroup = [];
    }
  });
  if (currentStepGroup.length > 0) {
    stepGroups.push(currentStepGroup);
  }
  return stepGroups;
};

export const runGroupsArray = (stepGroups: Array<Step>[]) => {
  let keypair = web3.Keypair.generate();
  let payer = web3.Keypair.generate();
  let connection = new web3.Connection(web3.clusterApiUrl("testnet"));
  console.log(payer);
};
