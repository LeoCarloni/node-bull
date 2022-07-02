import LogQueue from './log.queue';
import EmailQueue from './email.queue';
import CandidateQueue from './candidate.queue';
import VoteQueue from './vote.queue';

const queues = {
  log: LogQueue.getInstance().queue,
  email: EmailQueue.getInstance().queue,
  candidate: CandidateQueue.getInstance().queue,
  vote: VoteQueue.getInstance().queue,
};

export default queues;