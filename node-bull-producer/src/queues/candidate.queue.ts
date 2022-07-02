import { Queues } from '../enums';
import BaseQueue from './base.queue';

export default class CandidateQueue extends BaseQueue {
  private static instance: CandidateQueue;
  public static getInstance(): CandidateQueue {
    if (!CandidateQueue.instance) {
      CandidateQueue.instance = new CandidateQueue();
    }
    return CandidateQueue.instance;
  }

  private constructor() {
    super(Queues.candidate);
  }
}