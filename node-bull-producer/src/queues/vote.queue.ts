import { Queues } from '../enums';
import BaseQueue from './base.queue';

export default class VoteQueue extends BaseQueue {
  private static instance: VoteQueue;
  public static getInstance(): VoteQueue {
    if (!VoteQueue.instance) {
      VoteQueue.instance = new VoteQueue();
    }
    return VoteQueue.instance;
  }

  private constructor() {
    super(Queues.vote);
  }
}